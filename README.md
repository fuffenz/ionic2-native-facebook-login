# ionic2-native-facebook-login

> A simple app to show how to use native Facebook sign-in in Ionic 2.  

## Installation

I assume that you know how to build an Ionic2 app and that you have registered your Facebook app with Facebook and have an `APP_ID` and `APP_NAME` [https://developers.facebook.com/apps](https://developers.facebook.com/apps).

Clone this repo:

```bash
$ git clone git@github.com:fuffenz/ionic2-native-facebook-login.git
```

CD into your new folder

```bash
$ cd ionic2-native-facebook-login
```

Add a cordova plugin for Facebook SDK.  Make sure to use your own APP_ID and APP_NAME:
 
```bash
$ cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID="123456789" --variable APP_NAME="myApp"
```

Add inappbrowser.  If your app is used on a phone without the Facebook app, authorization will happen in a browser.

```bash
$ cordova plugin add --save cordova-plugin-inappbrowser
```

Add the Cordova whitelist to make sure your app can talk to other sites.  Notice that there is also a Content-Security-Policy in index.html. The one in this demo allows pretty much anything.

```bash
$ cordova plugin add --save cordova-plugin-whitelist 
```
 
Add your platform 
 
```bash
$ ionic platform add android 
```

Finally, update node modules, build your app and run it on a device.
  
```bash
$ npm install
$ ionic build android
$ ionic run android    
```

YES. You need to run it on a device.  NO, you can NOT test this in a browser with "ionic serve".



