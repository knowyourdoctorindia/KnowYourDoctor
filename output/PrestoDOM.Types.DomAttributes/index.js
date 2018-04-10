// Generated by purs version 0.11.7
"use strict";
var Data_Show = require("../Data.Show");
var Prelude = require("../Prelude");
var Match_Parent = (function () {
    function Match_Parent() {

    };
    Match_Parent.value = new Match_Parent();
    return Match_Parent;
})();
var V = (function () {
    function V(value0) {
        this.value0 = value0;
    };
    V.create = function (value0) {
        return new V(value0);
    };
    return V;
})();
var renderLength = function (v) {
    if (v instanceof Match_Parent) {
        return "match_parent";
    };
    if (v instanceof V) {
        return Data_Show.show(Data_Show.showInt)(v.value0);
    };
    throw new Error("Failed pattern match at PrestoDOM.Types.DomAttributes line 10, column 16 - line 12, column 17: " + [ v.constructor.name ]);
};
module.exports = {
    Match_Parent: Match_Parent,
    V: V,
    renderLength: renderLength
};