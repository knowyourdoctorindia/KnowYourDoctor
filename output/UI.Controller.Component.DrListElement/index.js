// Generated by purs version 0.11.7
"use strict";
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Either = require("../Data.Either");
var FRP = require("../FRP");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Types_Core = require("../PrestoDOM.Types.Core");
var DrListElementAction = (function () {
    function DrListElementAction() {

    };
    DrListElementAction.value = new DrListElementAction();
    return DrListElementAction;
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
    DrListElementAction: DrListElementAction,
    initialState: initialState,
    "eval": $$eval,
    overrides: overrides
};
