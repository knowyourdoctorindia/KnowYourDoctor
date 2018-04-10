// Generated by purs version 0.11.7
"use strict";
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Either = require("../Data.Either");
var FRP = require("../FRP");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Types_Core = require("../PrestoDOM.Types.Core");
var UI_Controller_Component_DrPhoto = require("../UI.Controller.Component.DrPhoto");
var DetailListElementAction = (function () {
    function DetailListElementAction() {

    };
    DetailListElementAction.value = new DetailListElementAction();
    return DetailListElementAction;
})();
var DrPhoto1Action = (function () {
    function DrPhoto1Action(value0) {
        this.value0 = value0;
    };
    DrPhoto1Action.create = function (value0) {
        return new DrPhoto1Action(value0);
    };
    return DrPhoto1Action;
})();
var overrides = function (v) {
    return function (push) {
        return function (state) {
            return [  ];
        };
    };
};
var initialState = {
    drPhoto1State: UI_Controller_Component_DrPhoto.initialState
};
var $$eval = function (v) {
    return function (state) {
        if (v instanceof DetailListElementAction) {
            return state;
        };
        if (v instanceof DrPhoto1Action) {
            var $5 = {};
            for (var $6 in state) {
                if ({}.hasOwnProperty.call(state, $6)) {
                    $5[$6] = state[$6];
                };
            };
            $5.drPhoto1State = UI_Controller_Component_DrPhoto["eval"](v.value0)(state.drPhoto1State);
            return $5;
        };
        throw new Error("Failed pattern match at UI.Controller.Component.DetailListElement line 34, column 1 - line 37, column 17: " + [ v.constructor.name, state.constructor.name ]);
    };
};
module.exports = {
    DetailListElementAction: DetailListElementAction,
    DrPhoto1Action: DrPhoto1Action,
    initialState: initialState,
    "eval": $$eval,
    overrides: overrides
};