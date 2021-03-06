package com.billmobilefrontend;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.burnweb.rnsendintent.RNSendIntentPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import org.wonday.pdf.RCTPdfView;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;
import com.rnfs.RNFSPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.swmansion.rnscreens.RNScreensPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.RNTextInputMask.RNTextInputMaskPackage;
import com.horcrux.svg.SvgPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.henninghall.date_picker.DatePickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.amazonaws.RNAWSCognitoPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSendIntentPackage(),
          new ReactNativePushNotificationPackage(),
            new RNFetchBlobPackage(),
            new RCTPdfView(),
            new RNDateTimePickerPackage(),
            new RNFSPackage(),
            new RNCWebViewPackage(),
            new RNScreensPackage(),
            new ReanimatedPackage(),
            new RNTextInputMaskPackage(),
            new SvgPackage(),
            new LinearGradientPackage(),
            new DatePickerPackage(),
            new VectorIconsPackage(),
            new RNGestureHandlerPackage(),
            new RNAWSCognitoPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }


  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
