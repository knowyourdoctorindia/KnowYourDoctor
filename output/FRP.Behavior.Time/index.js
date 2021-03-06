// Generated by purs version 0.11.7
"use strict";
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Functor = require("../Data.Functor");
var FRP_Behavior = require("../FRP.Behavior");
var FRP_Event = require("../FRP.Event");
var FRP_Event_Time = require("../FRP.Event.Time");
var Prelude = require("../Prelude");
var millisSinceEpoch = FRP_Behavior.behavior(function (e) {
    return Data_Functor.map(FRP_Event.functorEvent)(function (v) {
        return v.value(v.time);
    })(FRP_Event_Time.withTime(e));
});
var seconds = Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))(function (v) {
    return v / 1000.0;
})(millisSinceEpoch);
module.exports = {
    millisSinceEpoch: millisSinceEpoch,
    seconds: seconds
};
