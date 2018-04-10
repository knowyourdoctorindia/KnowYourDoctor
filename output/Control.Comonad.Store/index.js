// Generated by purs version 0.11.7
"use strict";
var Control_Comonad_Store_Class = require("../Control.Comonad.Store.Class");
var Control_Comonad_Store_Trans = require("../Control.Comonad.Store.Trans");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Identity = require("../Data.Identity");
var Data_Newtype = require("../Data.Newtype");
var Data_Tuple = require("../Data.Tuple");
var Prelude = require("../Prelude");
var store = function (f) {
    return function (x) {
        return Control_Comonad_Store_Trans.StoreT(new Data_Tuple.Tuple(f, x));
    };
};
var runStore = function (v) {
    return Data_Tuple.swap(Data_Functor.map(Data_Tuple.functorTuple)(Data_Newtype.unwrap(Data_Identity.newtypeIdentity))(Data_Tuple.swap(v)));
};
module.exports = {
    runStore: runStore,
    store: store
};
