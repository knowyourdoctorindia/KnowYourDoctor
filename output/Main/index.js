"use strict";
var $foreign = require("./foreign");
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var DOM = require("../DOM");
var Data_Function = require("../Data.Function");
var Data_Unit = require("../Data.Unit");
var FRP = require("../FRP");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var UI_View_Screen_Page_HomeScreen = require("../UI.View.Screen.Page.HomeScreen");
var UI_View_Screen_Page_HospitalDetails = require("../UI.View.Screen.Page.HospitalDetails");
var UI_View_Screen_Page_SplashScreen = require("../UI.View.Screen.Page.SplashScreen");
var UI_View_Screen_Page_UserDetails = require("../UI.View.Screen.Page.UserDetails");
var runUI = function (screen) {
    return Control_Monad_Aff.makeAff(function (err) {
        return function (sc) {
            return PrestoDOM_Core.runScreen(screen)(sc);
        };
    });
};
var changeScreen = function (screenName) {
    if (screenName === "UserDetails") {
        return runUI(UI_View_Screen_Page_UserDetails.screen(""));
    };
    if (screenName === "HospitalDetails") {
        return runUI(UI_View_Screen_Page_HospitalDetails.screen(""));
    };
    if (screenName === "HomeScreen") {
        return runUI(UI_View_Screen_Page_HomeScreen.screen(""));
    };
    if (screenName === "SplashScreen") {
        return runUI(UI_View_Screen_Page_SplashScreen.screen(""));
    };
    return runUI(UI_View_Screen_Page_UserDetails.screen(""));
};
var main = function __do() {
    var v = Control_Monad_Aff.launchAff(runUI(UI_View_Screen_Page_SplashScreen.screen("")))();
    var v1 = Control_Monad_Aff.launchAff(Control_Bind.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff.makeAff(function (err) {
        return function (sc) {
            return $foreign.duiShowScreen(sc);
        };
    }))(changeScreen))();
    return Data_Unit.unit;
};
module.exports = {
    main: main,
    changeScreen: changeScreen,
    runUI: runUI,
    duiShowScreen: $foreign.duiShowScreen
};
