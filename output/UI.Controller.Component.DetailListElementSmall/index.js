// Generated by purs version 0.11.7
"use strict";
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Either = require("../Data.Either");
var FRP = require("../FRP");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Types_Core = require("../PrestoDOM.Types.Core");
var DetailListElementSmallAction = (function () {
    function DetailListElementSmallAction() {

    };
    DetailListElementSmallAction.value = new DetailListElementSmallAction();
    return DetailListElementSmallAction;
})();
var overrides = function (v) {
    return function (push) {
        return function (state) {
            return [  ];
        };
    };
};
var initialState = {};
var $$eval = function (v) {
    return function (state) {
        return state;
    };
};
module.exports = {
    DetailListElementSmallAction: DetailListElementSmallAction,
    initialState: initialState,
    "eval": $$eval,
    overrides: overrides
};
