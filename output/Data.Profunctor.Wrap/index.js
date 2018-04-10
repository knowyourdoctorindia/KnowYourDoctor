// Generated by purs version 0.11.7
"use strict";
var Data_Eq = require("../Data.Eq");
var Data_Functor = require("../Data.Functor");
var Data_Newtype = require("../Data.Newtype");
var Data_Ord = require("../Data.Ord");
var Data_Profunctor = require("../Data.Profunctor");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Prelude = require("../Prelude");
var Wrap = function (x) {
    return x;
};
var showWrap = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Wrap " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var ordWrap = function (dictOrd) {
    return dictOrd;
};
var newtypeWrap = new Data_Newtype.Newtype(function (n) {
    return n;
}, Wrap);
var functorWrap = function (dictProfunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return Data_Profunctor.rmap(dictProfunctor)(f)(v);
        };
    });
};
var eqWrap = function (dictEq) {
    return dictEq;
};
module.exports = {
    Wrap: Wrap,
    newtypeWrap: newtypeWrap,
    eqWrap: eqWrap,
    ordWrap: ordWrap,
    showWrap: showWrap,
    functorWrap: functorWrap
};
