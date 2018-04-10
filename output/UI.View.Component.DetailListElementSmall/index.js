// Generated by purs version 0.11.7
"use strict";
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Array = require("../Data.Array");
var Data_Function = require("../Data.Function");
var Data_Semigroup = require("../Data.Semigroup");
var Data_StrMap = require("../Data.StrMap");
var FRP = require("../FRP");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Elements_Elements = require("../PrestoDOM.Elements.Elements");
var PrestoDOM_Events = require("../PrestoDOM.Events");
var PrestoDOM_Properties = require("../PrestoDOM.Properties");
var PrestoDOM_Properties_GetChildProps = require("../PrestoDOM.Properties.GetChildProps");
var PrestoDOM_Properties_SetChildProps = require("../PrestoDOM.Properties.SetChildProps");
var PrestoDOM_Types_Core = require("../PrestoDOM.Types.Core");
var PrestoDOM_Types_DomAttributes = require("../PrestoDOM.Types.DomAttributes");
var UI_Constant_Accessibility_Default = require("../UI.Constant.Accessibility.Default");
var UI_Constant_Color_Default = require("../UI.Constant.Color.Default");
var UI_Constant_FontColor_Default = require("../UI.Constant.FontColor.Default");
var UI_Constant_FontSize_Default = require("../UI.Constant.FontSize.Default");
var UI_Constant_FontStyle_Default = require("../UI.Constant.FontStyle.Default");
var UI_Constant_Str_Default = require("../UI.Constant.Str.Default");
var UI_Controller_Component_DetailListElementSmall = require("../UI.Controller.Component.DetailListElementSmall");
var view = function (push) {
    return function (state) {
        return function (parent) {
            return PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties_GetChildProps.height_p(new PrestoDOM_Types_DomAttributes.V(37))(parent), PrestoDOM_Properties_GetChildProps.width_p(PrestoDOM_Types_DomAttributes.Match_Parent.value)(parent), PrestoDOM_Properties_GetChildProps.orientation_p("vertical")(parent), PrestoDOM_Properties_GetChildProps.root_p(true)(parent), PrestoDOM_Properties_GetChildProps.margin_p("0,0,0,0")(parent), PrestoDOM_Properties_GetChildProps.weight_p("null")(parent), PrestoDOM_Properties_GetChildProps.visibility_p("null")(parent) ])(UI_Controller_Component_DetailListElementSmall.overrides("DetailListElement")(push)(state)))([ PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(30)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(189)), PrestoDOM_Properties.orientation("horizontal"), PrestoDOM_Properties.margin("6,0,145,0") ])(UI_Controller_Component_DetailListElementSmall.overrides("Group")(push)(state)))([ PrestoDOM_Elements_Elements.imageView(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(30)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(30)), PrestoDOM_Properties.imageUrl("drphoto180878FB9") ])(UI_Controller_Component_DetailListElementSmall.overrides("DrPhoto")(push)(state))), PrestoDOM_Elements_Elements.textView(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(18)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(149)), PrestoDOM_Properties.margin("10,4,0,0"), PrestoDOM_Properties.weight("1"), PrestoDOM_Properties.text(UI_Constant_Str_Default.number8), PrestoDOM_Properties.textSize(UI_Constant_FontSize_Default.a_14), PrestoDOM_Properties.color(UI_Constant_FontColor_Default.a_FF00BFFF), PrestoDOM_Properties.fontStyle(UI_Constant_FontStyle_Default.sOURCESANSPROSEMIBOLD), PrestoDOM_Properties.gravity("center") ])(UI_Controller_Component_DetailListElementSmall.overrides("Number")(push)(state))) ]), PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(1)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.background(UI_Constant_Color_Default.a_FFB2AC00), PrestoDOM_Properties.margin("0,6,0,0"), PrestoDOM_Properties.cornerRadius("0") ])(UI_Controller_Component_DetailListElementSmall.overrides("Rectangle1")(push)(state)))([  ]) ]);
        };
    };
};
module.exports = {
    view: view
};
