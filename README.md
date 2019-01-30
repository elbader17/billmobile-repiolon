# Getting Started

This will help you install and build your first React Native application.

**Important:** Building Projects whith Native Code.

The instructions are a little different from your development operating system, here we will use **Linux** and **Android** OS.

You can also check the [documentation](https://facebook.github.io/react-native/docs/getting-started.html) of React Native to install it in the other OS.

## Installing dependencies 📋

You will need Node, the **React Native** command line interface, a **JDK**, and **Android Studio**.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

### Node 

Install with the following commands:

In ubuntu or derivatives
```
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs
```

In debian, as root
```
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs
```

Else, follow the [Installation instructions](https://nodejs.org/en/download/package-manager/) for your Linux distribution to install Node 8.3 or newer.

### The React Native CLI

Node comes with npm, which lets you install the React Native command line interface.

Run the following command in a Command Prompt or shell:

```
npm install -g react-native-cli
```
_*If you get an error like Cannot find module 'npmlog', try installing npm directly: curl -0 -L https://npmjs.org/install.sh | sudo sh._

### Java Development Kit

React Native requires a recent version of the Java SE Development Kit (JDK). [Download and install Oracle JDK 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) if needed. You can also use [OpenJDK 8](http://openjdk.java.net/install/) as an alternative.

### Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

### 1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio/). Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

* _Android SDK_
* _Android SDK Platform_
* _Android Virtual Device_

Then, click "Next" to install all of these components.

_*If the checkboxes are grayed out, you will have a chance to install these components later on._

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the **Android 9 (Pie) SDK** in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio. The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

_*The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK._

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

* _Android SDK Platform 28_
* _Intel x86 Atom_64 System Image_ or _Google APIs Intel x86 Atom System Image_

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that **28.0.3** is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

### 3. Configure the ANDROID_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your **$HOME/.bash_profile** (or $HOME/.profile) config file:

```
  export ANDROID_HOME=$HOME/Android/Sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/tools
  export PATH=$PATH:$ANDROID_HOME/tools/bin
  export PATH=$PATH:$ANDROID_HOME/platform-tools
```

_*.bash_profile is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file._

Type **source $HOME/.bash_profile** to load the config into your current shell. Verify that ANDROID_HOME has been added to your path by running **echo $PATH**.

_*Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK._


### Watchman

Follow the [Watchman installation guide](https://facebook.github.io/watchman/docs/install.html#buildinstall) to compile and Watchman install from source.


## Preparing the Android device Using a physical device

You will need to prepare the device to run Android apps for development.

We will build our application in a physical mobile device. To verify if your device is connected,type the following command:

```
adb devices
```
Note: you need to authorize your mobile device and enable USB debugging by going to **Settings>Developer Options>USB debugging**

You can also follow the detailed instructions[here](https://facebook.github.io/react-native/docs/running-on-device).

If you want to use a virtual device (AVD) you must create it following the steps described in the [official React Native documentation](https://facebook.github.io/react-native/docs/getting-started.html#content): Preparing the _Android device > Using a virtual device_.

_Note:_Choose the Android and Linux option.


### Running your React Native application

Run _react-native run-android_ inside your React Native project folder:

```
cd billmobilefrontend

react-native run-android
```

If everything is set up correctly, you should see your new app running in your Android shortly.

_Note:_ If you can't get this to work, see the [Troubleshooting](https://facebook.github.io/react-native/docs/troubleshooting#content) page.

