// Generated by purs version 0.11.7
"use strict";
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Either = require("../Data.Either");
var FRP = require("../FRP");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Types_Core = require("../PrestoDOM.Types.Core");
var SplashScreenAction = (function () {
    function SplashScreenAction() {

    };
    SplashScreenAction.value = new SplashScreenAction();
    return SplashScreenAction;
})();
var overrides = function (v) {
    return function (push) {
        return function (state) {
            return [  ];
        };
    };
};
var initialState = function (input) {
    return {};
};
var $$eval = function (v) {
    return function (state) {
        return new Data_Either.Right(state);
    };
};
module.exports = {
    SplashScreenAction: SplashScreenAction,
    initialState: initialState,
    "eval": $$eval,
    overrides: overrides
};
