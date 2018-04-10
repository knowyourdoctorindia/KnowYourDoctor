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
var UI_Controller_Component_DrPhoto = require("../UI.Controller.Component.DrPhoto");
var view = function (push) {
    return function (state) {
        return function (parent) {
            return PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties_GetChildProps.height_p(new PrestoDOM_Types_DomAttributes.V(46))(parent), PrestoDOM_Properties_GetChildProps.width_p(new PrestoDOM_Types_DomAttributes.V(48))(parent), PrestoDOM_Properties_GetChildProps.root_p(true)(parent), PrestoDOM_Properties_GetChildProps.margin_p("0,0,0,0")(parent), PrestoDOM_Properties_GetChildProps.weight_p("null")(parent), PrestoDOM_Properties_GetChildProps.visibility_p("null")(parent) ])(UI_Controller_Component_DrPhoto.overrides("DrPhoto1")(push)(state)))([ PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(46)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(48)), PrestoDOM_Properties.background(UI_Constant_Color_Default.a_FFFFFFFF), PrestoDOM_Properties.cornerRadius("0") ])(UI_Controller_Component_DrPhoto.overrides("Bg")(push)(state)))([  ]), PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(46)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(48)), PrestoDOM_Properties.background("#d7d7d7"), PrestoDOM_Properties.stroke("1,#969696"), PrestoDOM_Properties.cornerRadius("0") ])(UI_Controller_Component_DrPhoto.overrides("Oval")(push)(state)))([  ]) ]);
        };
    };
};
module.exports = {
    view: view
};
