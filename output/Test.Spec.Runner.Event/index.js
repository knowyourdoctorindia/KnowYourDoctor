// Generated by purs version 0.11.7
"use strict";
var Data_Maybe = require("../Data.Maybe");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Prelude = require("../Prelude");
var Test_Spec = require("../Test.Spec");
var Test_Spec_Speed = require("../Test.Spec.Speed");
var Start = (function () {
    function Start(value0) {
        this.value0 = value0;
    };
    Start.create = function (value0) {
        return new Start(value0);
    };
    return Start;
})();
var Suite = (function () {
    function Suite(value0) {
        this.value0 = value0;
    };
    Suite.create = function (value0) {
        return new Suite(value0);
    };
    return Suite;
})();
var Test = (function () {
    function Test() {

    };
    Test.value = new Test();
    return Test;
})();
var TestEnd = (function () {
    function TestEnd() {

    };
    TestEnd.value = new TestEnd();
    return TestEnd;
})();
var SuiteEnd = (function () {
    function SuiteEnd() {

    };
    SuiteEnd.value = new SuiteEnd();
    return SuiteEnd;
})();
var Fail = (function () {
    function Fail(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Fail.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Fail(value0, value1, value2);
            };
        };
    };
    return Fail;
})();
var Pass = (function () {
    function Pass(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Pass.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Pass(value0, value1, value2);
            };
        };
    };
    return Pass;
})();
var Pending = (function () {
    function Pending(value0) {
        this.value0 = value0;
    };
    Pending.create = function (value0) {
        return new Pending(value0);
    };
    return Pending;
})();
var End = (function () {
    function End(value0) {
        this.value0 = value0;
    };
    End.create = function (value0) {
        return new End(value0);
    };
    return End;
})();
var showEvent = new Data_Show.Show(function (v) {
    if (v instanceof Start) {
        return "Start " + Data_Show.show(Data_Show.showInt)(v.value0);
    };
    if (v instanceof Suite) {
        return "Suite " + v.value0;
    };
    if (v instanceof Test) {
        return "Test";
    };
    if (v instanceof TestEnd) {
        return "TestEnd";
    };
    if (v instanceof SuiteEnd) {
        return "SuiteEnd";
    };
    if (v instanceof Fail) {
        return "Fail " + (v.value0 + (": " + v.value1));
    };
    if (v instanceof Pass) {
        return "Pass " + (v.value0 + (" " + (Data_Show.show(Test_Spec_Speed.showSpeed)(v.value1) + (" " + Data_Show.show(Data_Show.showInt)(v.value2)))));
    };
    if (v instanceof Pending) {
        return "Pending " + v.value0;
    };
    if (v instanceof End) {
        return "End " + Data_Show.show(Data_Show.showArray(Test_Spec.showGroup(Test_Spec.showResult)))(v.value0);
    };
    throw new Error("Failed pattern match at Test.Spec.Runner.Event line 27, column 5 - line 38, column 37: " + [ v.constructor.name ]);
});
module.exports = {
    Start: Start,
    Suite: Suite,
    Test: Test,
    TestEnd: TestEnd,
    SuiteEnd: SuiteEnd,
    Fail: Fail,
    Pass: Pass,
    Pending: Pending,
    End: End,
    showEvent: showEvent
};
