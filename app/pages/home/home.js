import {Page, Platform} from 'ionic/ionic';
import {FbProvider} from '../../providers/fb-provider/fb-provider';

@Page({
  templateUrl: 'build/pages/home/home.html',
  })
export class HomePage {
    constructor(platform:Platform, fbProvider : FbProvider ) {
        this.platform = platform;
        this.fb = fbProvider;
        this.email = '';
        this.name = '';
        this.id = '';
    }

    login() {
        this.fb.login().then(() => {
            this.fb.getCurrentUserProfile().then(
                (profileData) => {
                    this.email = profileData.email;
                    this.name = profileData.name;
                    this.id = profileData.id;
                }
            );
        });
    }
}
