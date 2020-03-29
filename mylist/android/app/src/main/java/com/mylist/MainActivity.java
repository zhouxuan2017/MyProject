package com.mylist;
import android.os.Bundle; 
import org.devio.rn.splashscreen.SplashScreen;
import com.imagepicker.permissions.OnImagePickerPermissionsCallback;
import com.facebook.react.modules.core.PermissionListener; 
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
   private PermissionListener listener;
     @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  
        super.onCreate(savedInstanceState);
    }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "mylist";
  }
}
