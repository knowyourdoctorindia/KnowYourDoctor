// Generated by purs version 0.11.7
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_State = require("../Control.Monad.State");
var Control_Monad_State_Class = require("../Control.Monad.State.Class");
var Control_Monad_State_Trans = require("../Control.Monad.State.Trans");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class");
var Data_Array = require("../Data.Array");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Monoid = require("../Data.Monoid");
var Data_Ord = require("../Data.Ord");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_String = require("../Data.String");
var Data_Traversable = require("../Data.Traversable");
var Data_Unit = require("../Data.Unit");
var Pipes = require("../Pipes");
var Pipes_Core = require("../Pipes.Core");
var Pipes_Internal = require("../Pipes.Internal");
var Prelude = require("../Prelude");
var Test_Spec = require("../Test.Spec");
var Test_Spec_Color = require("../Test.Spec.Color");
var Test_Spec_Runner = require("../Test.Spec.Runner");
var Test_Spec_Runner_Event = require("../Test.Spec.Runner.Event");
var Test_Spec_Summary = require("../Test.Spec.Summary");
var scanWithStateM = function (dictMonad) {
    return function (step) {
        return function (begin) {
            var go = function (x) {
                return Control_Bind.bind(Pipes_Internal.bindProxy(dictMonad))(Pipes["await"](dictMonad))(function (v) {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Pipes_Internal.bindProxy(dictMonad))(Pipes["yield"](dictMonad)(v))(function () {
                        return Control_Bind.bind(Pipes_Internal.bindProxy(dictMonad))(Control_Monad_Trans_Class.lift(Pipes_Internal.monadTransProxy)(dictMonad)(step(x)(v)))(function (v1) {
                            return go(v1);
                        });
                    });
                });
            };
            return Control_Bind.bind(Pipes_Internal.bindProxy(dictMonad))(Control_Monad_Trans_Class.lift(Pipes_Internal.monadTransProxy)(dictMonad)(begin))(function (v) {
                return go(v);
            });
        };
    };
};
var indent = function (i) {
    return Data_String.fromCharArray(Data_Array.replicate(i)(" "));
};
var printFailures = function (xs) {
    var go = function (crumbs) {
        return function (groups) {
            return Data_Foldable.for_(Control_Monad_State_Trans.applicativeStateT(Control_Monad_Eff.monadEff))(Data_Foldable.foldableArray)(groups)(function (v) {
                if (v instanceof Test_Spec.Describe) {
                    return go(Data_Array.cons(v.value1)(crumbs))(v.value2);
                };
                if (v instanceof Test_Spec.It && v.value2 instanceof Test_Spec.Failure) {
                    var label = Data_Foldable.intercalate(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(" ")(Data_Array.reverse(Data_Array.cons(v.value1)(crumbs)));
                    return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_State_Trans.bindStateT(Control_Monad_Eff.monadEff))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Control_Monad_Eff.monadEff))(function (v1) {
                        return v1 + 1 | 0;
                    }))(function () {
                        return Control_Bind.bind(Control_Monad_State_Trans.bindStateT(Control_Monad_Eff.monadEff))(Control_Monad_State_Class.get(Control_Monad_State_Trans.monadStateStateT(Control_Monad_Eff.monadEff)))(function (v1) {
                            return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_State_Trans.bindStateT(Control_Monad_Eff.monadEff))(Control_Monad_Trans_Class.lift(Control_Monad_State_Trans.monadTransStateT)(Control_Monad_Eff.monadEff)(Control_Monad_Eff_Console.log(Data_Show.show(Data_Show.showInt)(v1) + (") " + label))))(function () {
                                return Control_Monad_Trans_Class.lift(Control_Monad_State_Trans.monadTransStateT)(Control_Monad_Eff.monadEff)(Control_Monad_Eff_Console.log(Test_Spec_Color.colored(Test_Spec_Color.ErrorMessage.value)(indent(2) + Control_Monad_Eff_Exception.message(v.value2.value0))));
                            });
                        });
                    });
                };
                return Control_Applicative.pure(Control_Monad_State_Trans.applicativeStateT(Control_Monad_Eff.monadEff))(Data_Unit.unit);
            });
        };
    };
    return Data_Functor["void"](Control_Monad_Eff.functorEff)(Control_Monad_State_Trans.evalStateT(Control_Monad_Eff.functorEff)(go([  ])(xs))(0));
};
var defaultUpdate = function (s) {
    return function (v) {
        return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(s);
    };
};
var defaultSummary = function (xs) {
    return function __do() {
        (function () {
            var v = Test_Spec_Summary.summarize(xs);
            return function __do() {
                Control_Applicative.when(Control_Monad_Eff.applicativeEff)(v.value0 > 0)(Control_Monad_Eff_Console.log(Test_Spec_Color.colored(Test_Spec_Color.Green.value)(Data_Show.show(Data_Show.showInt)(v.value0) + " passing")))();
                Control_Applicative.when(Control_Monad_Eff.applicativeEff)(v.value2 > 0)(Control_Monad_Eff_Console.log(Test_Spec_Color.colored(Test_Spec_Color.Pending.value)(Data_Show.show(Data_Show.showInt)(v.value2) + " pending")))();
                return Control_Applicative.when(Control_Monad_Eff.applicativeEff)(v.value1 > 0)(Control_Monad_Eff_Console.log(Test_Spec_Color.colored(Test_Spec_Color.Fail.value)(Data_Show.show(Data_Show.showInt)(v.value1) + " failed")))();
            };
        })()();
        Control_Monad_Eff_Console.log("")();
        return printFailures(xs)();
    };
};
var defaultReporter = function (initialState) {
    return function (onEvent) {
        var dispatch = function (s) {
            return function (e) {
                return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(onEvent(s)(e));
            };
        };
        return scanWithStateM(Control_Monad_Aff.monadAff)(dispatch)(Control_Applicative.pure(Control_Monad_Aff.applicativeAff)(initialState));
    };
};
module.exports = {
    defaultUpdate: defaultUpdate,
    defaultSummary: defaultSummary,
    defaultReporter: defaultReporter
};
