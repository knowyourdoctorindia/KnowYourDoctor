// Generated by purs version 0.11.7
"use strict";
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Either = require("../Data.Either");
var Data_Function = require("../Data.Function");
var FRP = require("../FRP");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Types_Core = require("../PrestoDOM.Types.Core");
var UI_Controller_Component_ListDetailCard = require("../UI.Controller.Component.ListDetailCard");
var UI_Controller_Component_ToolBar = require("../UI.Controller.Component.ToolBar");
var UserDetailsAction = (function () {
    function UserDetailsAction() {

    };
    UserDetailsAction.value = new UserDetailsAction();
    return UserDetailsAction;
})();
var ToolBar1Action = (function () {
    function ToolBar1Action(value0) {
        this.value0 = value0;
    };
    ToolBar1Action.create = function (value0) {
        return new ToolBar1Action(value0);
    };
    return ToolBar1Action;
})();
var ListDetailCard1Action = (function () {
    function ListDetailCard1Action(value0) {
        this.value0 = value0;
    };
    ListDetailCard1Action.create = function (value0) {
        return new ListDetailCard1Action(value0);
    };
    return ListDetailCard1Action;
})();
var ListDetailCard2Action = (function () {
    function ListDetailCard2Action(value0) {
        this.value0 = value0;
    };
    ListDetailCard2Action.create = function (value0) {
        return new ListDetailCard2Action(value0);
    };
    return ListDetailCard2Action;
})();
var ListDetailCard3Action = (function () {
    function ListDetailCard3Action(value0) {
        this.value0 = value0;
    };
    ListDetailCard3Action.create = function (value0) {
        return new ListDetailCard3Action(value0);
    };
    return ListDetailCard3Action;
})();
var ListDetailCard4Action = (function () {
    function ListDetailCard4Action(value0) {
        this.value0 = value0;
    };
    ListDetailCard4Action.create = function (value0) {
        return new ListDetailCard4Action(value0);
    };
    return ListDetailCard4Action;
})();
var overrides = function (v) {
    return function (push) {
        return function (state) {
            return [  ];
        };
    };
};
var initialState = function (input) {
    return {
        toolBar1State: UI_Controller_Component_ToolBar.initialState,
        listDetailCard1State: UI_Controller_Component_ListDetailCard.initialState,
        listDetailCard2State: UI_Controller_Component_ListDetailCard.initialState,
        listDetailCard3State: UI_Controller_Component_ListDetailCard.initialState,
        listDetailCard4State: UI_Controller_Component_ListDetailCard.initialState
    };
};
var $$eval = function (v) {
    return function (state) {
        if (v instanceof UserDetailsAction) {
            return new Data_Either.Right(state);
        };
        if (v instanceof ToolBar1Action) {
            return Data_Either.Right.create((function () {
                var $9 = {};
                for (var $10 in state) {
                    if ({}.hasOwnProperty.call(state, $10)) {
                        $9[$10] = state[$10];
                    };
                };
                $9.toolBar1State = UI_Controller_Component_ToolBar["eval"](v.value0)(state.toolBar1State);
                return $9;
            })());
        };
        if (v instanceof ListDetailCard1Action) {
            return Data_Either.Right.create((function () {
                var $13 = {};
                for (var $14 in state) {
                    if ({}.hasOwnProperty.call(state, $14)) {
                        $13[$14] = state[$14];
                    };
                };
                $13.listDetailCard1State = UI_Controller_Component_ListDetailCard["eval"](v.value0)(state.listDetailCard1State);
                return $13;
            })());
        };
        if (v instanceof ListDetailCard2Action) {
            return Data_Either.Right.create((function () {
                var $17 = {};
                for (var $18 in state) {
                    if ({}.hasOwnProperty.call(state, $18)) {
                        $17[$18] = state[$18];
                    };
                };
                $17.listDetailCard2State = UI_Controller_Component_ListDetailCard["eval"](v.value0)(state.listDetailCard2State);
                return $17;
            })());
        };
        if (v instanceof ListDetailCard3Action) {
            return Data_Either.Right.create((function () {
                var $21 = {};
                for (var $22 in state) {
                    if ({}.hasOwnProperty.call(state, $22)) {
                        $21[$22] = state[$22];
                    };
                };
                $21.listDetailCard3State = UI_Controller_Component_ListDetailCard["eval"](v.value0)(state.listDetailCard3State);
                return $21;
            })());
        };
        if (v instanceof ListDetailCard4Action) {
            return Data_Either.Right.create((function () {
                var $25 = {};
                for (var $26 in state) {
                    if ({}.hasOwnProperty.call(state, $26)) {
                        $25[$26] = state[$26];
                    };
                };
                $25.listDetailCard4State = UI_Controller_Component_ListDetailCard["eval"](v.value0)(state.listDetailCard4State);
                return $25;
            })());
        };
        throw new Error("Failed pattern match at UI.Controller.Screen.Page.UserDetails line 47, column 1 - line 50, column 37: " + [ v.constructor.name, state.constructor.name ]);
    };
};
module.exports = {
    UserDetailsAction: UserDetailsAction,
    ToolBar1Action: ToolBar1Action,
    ListDetailCard1Action: ListDetailCard1Action,
    ListDetailCard2Action: ListDetailCard2Action,
    ListDetailCard3Action: ListDetailCard3Action,
    ListDetailCard4Action: ListDetailCard4Action,
    initialState: initialState,
    "eval": $$eval,
    overrides: overrides
};