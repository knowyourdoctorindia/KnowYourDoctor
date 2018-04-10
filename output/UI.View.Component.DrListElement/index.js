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
var UI_Controller_Component_DrListElement = require("../UI.Controller.Component.DrListElement");
var view = function (push) {
    return function (state) {
        return function (parent) {
            return PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties_GetChildProps.height_p(new PrestoDOM_Types_DomAttributes.V(50))(parent), PrestoDOM_Properties_GetChildProps.width_p(PrestoDOM_Types_DomAttributes.Match_Parent.value)(parent), PrestoDOM_Properties_GetChildProps.orientation_p("horizontal")(parent), PrestoDOM_Properties_GetChildProps.padding_p("2,0,0,2")(parent), PrestoDOM_Properties_GetChildProps.background_p(UI_Constant_Color_Default.a_FFFFFFFF)(parent), PrestoDOM_Properties_GetChildProps.cornerRadius_p("0")(parent), PrestoDOM_Properties_GetChildProps.root_p(true)(parent), PrestoDOM_Properties_GetChildProps.margin_p("0,0,0,0")(parent), PrestoDOM_Properties_GetChildProps.weight_p("null")(parent), PrestoDOM_Properties_GetChildProps.visibility_p("null")(parent) ])(UI_Controller_Component_DrListElement.overrides("DrListElement")(push)(state)))([ PrestoDOM_Elements_Elements.imageView(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(46)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(48)), PrestoDOM_Properties.margin("0,2,0,0"), PrestoDOM_Properties.imageUrl("drphoto180878FB9") ])(UI_Controller_Component_DrListElement.overrides("DrPhoto")(push)(state))), PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(270)), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.gravity("center_horizontal"), PrestoDOM_Properties.margin("20,0,0,0"), PrestoDOM_Properties.weight("1") ])(UI_Controller_Component_DrListElement.overrides("Group2")(push)(state)))([ PrestoDOM_Elements_Elements.textView(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(23)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.text(UI_Constant_Str_Default.drName4), PrestoDOM_Properties.textSize(UI_Constant_FontSize_Default.a_18), PrestoDOM_Properties.color(UI_Constant_FontColor_Default.a_FF000000), PrestoDOM_Properties.fontStyle(UI_Constant_FontStyle_Default.sOURCESANSPROSEMIBOLD), PrestoDOM_Properties.gravity("left") ])(UI_Controller_Component_DrListElement.overrides("DrName")(push)(state))), PrestoDOM_Elements_Elements.textView(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(15)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.margin("0,2,0,0"), PrestoDOM_Properties.text(UI_Constant_Str_Default.hospitalName5), PrestoDOM_Properties.textSize(UI_Constant_FontSize_Default.a_12), PrestoDOM_Properties.color(UI_Constant_FontColor_Default.a_FF000000), PrestoDOM_Properties.fontStyle(UI_Constant_FontStyle_Default.sOURCESANSPROREGULAR), PrestoDOM_Properties.gravity("left") ])(UI_Controller_Component_DrListElement.overrides("HospitalName")(push)(state))) ]) ]);
        };
    };
};
module.exports = {
    view: view
};
