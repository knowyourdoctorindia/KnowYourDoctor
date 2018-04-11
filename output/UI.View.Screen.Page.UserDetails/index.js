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
var UI_Controller_Screen_Page_UserDetails = require("../UI.Controller.Screen.Page.UserDetails");
var UI_View_Component_ListDetailCard = require("../UI.View.Component.ListDetailCard");
var UI_View_Component_ToolBar = require("../UI.View.Component.ToolBar");
var view = function (push) {
    return function (state) {
        return PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.gravity("center_horizontal"), PrestoDOM_Properties.padding("0,0,0,20"), PrestoDOM_Properties.background(UI_Constant_Color_Default.a_FFFFFFFF), PrestoDOM_Properties.cornerRadius("0"), PrestoDOM_Properties.root(true), PrestoDOM_Properties.clickable("true") ])(UI_Controller_Screen_Page_UserDetails.overrides("UserDetails")(push)(state)))([ PrestoDOM_Core.mapDom(UI_View_Component_ToolBar.view)(push)(state.toolBar1State)(UI_Controller_Screen_Page_UserDetails.ToolBar1Action.create)([ PrestoDOM_Properties_SetChildProps.height_c(new PrestoDOM_Types_DomAttributes.V(56)), PrestoDOM_Properties_SetChildProps.width_c(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties_SetChildProps.override_c("t_subjects")("Filter Details") ]), PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(240)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.gravity("center_horizontal"), PrestoDOM_Properties.margin("9,20,10,0") ])(UI_Controller_Screen_Page_UserDetails.overrides("Contents")(push)(state)))([ PrestoDOM_Core.mapDom(UI_View_Component_ListDetailCard.view)(push)(state.listDetailCard1State)(UI_Controller_Screen_Page_UserDetails.ListDetailCard1Action.create)([ PrestoDOM_Properties_SetChildProps.height_c(new PrestoDOM_Types_DomAttributes.V(45)), PrestoDOM_Properties_SetChildProps.width_c(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties_SetChildProps.margin_c("1,0,0,0"), PrestoDOM_Properties_SetChildProps.override_c("t_state")("State") ]), PrestoDOM_Core.mapDom(UI_View_Component_ListDetailCard.view)(push)(state.listDetailCard2State)(UI_Controller_Screen_Page_UserDetails.ListDetailCard2Action.create)([ PrestoDOM_Properties_SetChildProps.height_c(new PrestoDOM_Types_DomAttributes.V(45)), PrestoDOM_Properties_SetChildProps.width_c(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties_SetChildProps.margin_c("1,20,0,0"), PrestoDOM_Properties_SetChildProps.override_c("t_state")("District") ]), PrestoDOM_Core.mapDom(UI_View_Component_ListDetailCard.view)(push)(state.listDetailCard3State)(UI_Controller_Screen_Page_UserDetails.ListDetailCard3Action.create)([ PrestoDOM_Properties_SetChildProps.height_c(new PrestoDOM_Types_DomAttributes.V(45)), PrestoDOM_Properties_SetChildProps.width_c(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties_SetChildProps.margin_c("1,20,0,0"), PrestoDOM_Properties_SetChildProps.override_c("t_state")("Area") ]), PrestoDOM_Core.mapDom(UI_View_Component_ListDetailCard.view)(push)(state.listDetailCard4State)(UI_Controller_Screen_Page_UserDetails.ListDetailCard4Action.create)([ PrestoDOM_Properties_SetChildProps.height_c(new PrestoDOM_Types_DomAttributes.V(45)), PrestoDOM_Properties_SetChildProps.width_c(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties_SetChildProps.margin_c("0,20,1,0"), PrestoDOM_Properties_SetChildProps.override_c("t_state")("Disease") ]) ]), PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.weight("1") ])(UI_Controller_Screen_Page_UserDetails.overrides("Space")(push)(state)))([  ]), PrestoDOM_Elements_Elements.linearLayout(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(60)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.orientation("horizontal"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.margin("20,0,20,0"), PrestoDOM_Properties.background(UI_Constant_Color_Default.a_9F788624), PrestoDOM_Properties.stroke("1,#969696"), PrestoDOM_Properties.cornerRadius("8") ])(UI_Controller_Screen_Page_UserDetails.overrides("Group")(push)(state)))([ PrestoDOM_Elements_Elements.textView(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.text(UI_Constant_Str_Default.submit1), PrestoDOM_Properties.textSize(UI_Constant_FontSize_Default.a_32), PrestoDOM_Properties.color(UI_Constant_FontColor_Default.a_FFFFFFFF), PrestoDOM_Properties.fontStyle(UI_Constant_FontStyle_Default.sOURCESANSPROREGULAR), PrestoDOM_Properties.gravity("center") ])(UI_Controller_Screen_Page_UserDetails.overrides("Submit")(push)(state))) ]) ]);
    };
};
var screen = function (input) {
    return {
        initialState: UI_Controller_Screen_Page_UserDetails.initialState(input),
        view: view,
        "eval": UI_Controller_Screen_Page_UserDetails["eval"]
    };
};
module.exports = {
    screen: screen,
    view: view
};
