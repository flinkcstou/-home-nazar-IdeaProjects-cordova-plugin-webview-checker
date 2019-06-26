var packageName = 'com.google.android.webview';
var chromePackageName = 'com.android.chrome';

function promisifyCordovaExec(command, params, className) {
  params = params || [];
  className = className || 'WebViewChecker';

  return new Promise(function innerPromise(resolve, reject) {
    var rejecter = function rejecter(error) {
      console.error('[Android Webview Checker] Error:', error);
      reject(error)
    };

    cordova.exec(resolve, rejecter, className, command, params);
  });
}

/**
 * Check if Android System Webview is enabled or not.
 */
function isWebViewEnabled() {
  return promisifyCordovaExec('isAppEnabled', [packageName]);
}

/**
 * Gets the version of Android System Webview.
 */
function getWebViewVersion() {
  return promisifyCordovaExec('getAppVersion', [packageName]);
}
/**
 * Gets the version of Chrome WebView.
 */
function getChromeWebViewVersion() {
  return promisifyCordovaExec('getAppVersionChrome', [chromePackageName]);
}

/**
 * Opens the Google Play page of Android System Webview.
 */
function openGooglePlayPage() {
  return promisifyCordovaExec('openGooglePlayPage', [packageName]);

}

module.exports = {
  isWebViewEnabled: isWebViewEnabled,
  getWebViewVersion: getWebViewVersion,
  getChromeWebViewVersion: getChromeWebViewVersion,
  openGooglePlayPage: openGooglePlayPage
}