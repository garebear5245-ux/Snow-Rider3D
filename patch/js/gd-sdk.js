gdsdk = function () {

  // ***** UTILS *****
  function loadJS(FILE_URL, callback) {
    console.log("--blocked-loadJS--", FILE_URL);
    callback(false);
  }

  // ***** INIT *****
  this.getSession = function () {
    return Promise.resolve(true);
  };

  // ***** ADS *****
  this.AdType = {
    Rewarded: "rewarded",
    Interstitial: "interstitial",
    Preroll: "interstitial",
    Midroll: "interstitial",
    Display: "display"
  };

  this.Interstitial = function () {
    console.log("--gdsdk-disabled-Interstitial--");
  };

  this.preloadAd = function () {
    console.log("--gdsdk-preloadAd-disabled--");
    return Promise.resolve(true);
  };

  this.cancelAd = function () {
    return Promise.resolve(true);
  };

  this.showAd = function (adType) {
    console.log("--gdsdk-showAd-disabled--", adType);

    return new Promise((resolve) => {
      window.GD_OPTIONS?.onEvent?.({
        name: "SDK_GAME_START",
        message: "Blocked Ad",
        status: "success",
      });
      resolve(true);
    });
  };

  this.showBanner = function () {
    console.log("--gdsdk-showBanner-disabled--");
    return Promise.resolve(true);
  };

  // ***** EVENTS *****
  this.sendEvent = function () {};
  this.openConsole = function () {};

  this.leaderboard = {
    addScore: function () {},
    show: function () {}
  };

  try {
    window.GD_OPTIONS?.onEvent?.({
      name: "SDK_READY",
      message: "Everything is ready.",
      status: "success"
    });
  } catch (e) {}
};

gdsdk = new gdsdk();
