// Generated by purs version 0.11.7
"use strict";
var DOM_Event_Types = require("../DOM.Event.Types");
var Data_Foreign = require("../Data.Foreign");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var storageEventToEvent = Unsafe_Coerce.unsafeCoerce;
var readStorageEvent = Data_Foreign.unsafeReadTagged("StorageEvent");
module.exports = {
    readStorageEvent: readStorageEvent,
    storageEventToEvent: storageEventToEvent
};
