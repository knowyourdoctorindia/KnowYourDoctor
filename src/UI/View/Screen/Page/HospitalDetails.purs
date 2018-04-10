module UI.View.Screen.Page.HospitalDetails where

import Prelude
import Data.Array
import Data.StrMap (StrMap(..)) as StrMap
import PrestoDOM.Core
import PrestoDOM.Elements.Elements
import PrestoDOM.Events
import PrestoDOM.Properties
import PrestoDOM.Properties.GetChildProps
import PrestoDOM.Properties.SetChildProps
import PrestoDOM.Types.Core
import PrestoDOM.Types.DomAttributes
import Control.Monad.Eff (Eff)
import FRP (FRP)
import UI.Constant.Color.Default as Color
import UI.Constant.FontColor.Default as FontColor
import UI.Constant.FontSize.Default as FontSize
import UI.Constant.FontStyle.Default as Font
import UI.Constant.Str.Default as STR
import UI.Constant.Accessibility.Default as HINT


import UI.View.Component.ToolBar as ToolBar


import UI.View.Component.DetailListElement as DetailListElement
import UI.View.Component.DetailListElementSmall as DetailListElementSmall

import UI.Controller.Screen.Page.HospitalDetails (Action(..), State, ScreenInput, ScreenOutput, initialState, eval, overrides)

screen :: forall eff. ScreenInput -> Screen Action State eff ScreenOutput
screen input =
	{ initialState : (initialState input)
	, view
	, eval
	}



view
	:: forall w eff
	. (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> PrestoDOM Action w
view push state =
	linearLayout
		([ height Match_Parent
		, width Match_Parent
		, orientation "vertical"
		, gravity "center_horizontal"
		, padding "0,0,0,257"
		, background Color.a_FFFFFFFF
		, cornerRadius "0"
		, root true
		, clickable "true"
		] <> overrides "Group" push state )
		[ (mapDom ToolBar.view push state.toolBar1State ToolBar1Action 
			[ height_c $ V 56
			, width_c Match_Parent
			, override_c "t_subjects" "Hospital Detail"
			])
		, linearLayout
			([ height $ V 100
			, width $ V 100
			, orientation "horizontal"
			, gravity "center"
			, margin "130,20,130,0"
			] <> overrides "Photo" push state )
			[ linearLayout
				([ height $ V 100
				, width Match_Parent
				, orientation "horizontal"
				, gravity "center"
				] <> overrides "DrPhoto" push state )
				[ imageView
					([ height $ V 100
					, width $ V 100
					, imageUrl "drphoto1DC64C5D6"
					] <> overrides "DrPhoto1" push state )
				]
			]
		, linearLayout
			([ height $ V 23
			, width Match_Parent
			, orientation "horizontal"
			, gravity "center"
			, margin "10,10,10,0"
			, cornerRadius "0"
			] <> overrides "Group2" push state )
			[ textView
				([ height $ V 23
				, width Match_Parent
				, text STR.hospitalName2
				, textSize FontSize.a_18
				, color FontColor.a_FF000000
				, fontStyle Font.sOURCESANSPROSEMIBOLD
				, gravity "center"
				] <> overrides "HospitalName" push state )
			]
		, (mapDom DetailListElement.view push state.detailListElement1State DetailListElement1Action 
			[ height_c $ V 90
			, width_c Match_Parent
			, margin_c "9,20,10,0"
			])
		, (mapDom DetailListElementSmall.view push state.detailListElementSmall1State DetailListElementSmall1Action 
			[ height_c $ V 44
			, width_c Match_Parent
			, margin_c "10,20,10,0"
			])
		]

