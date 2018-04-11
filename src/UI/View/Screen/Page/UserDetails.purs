module UI.View.Screen.Page.UserDetails where

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
import UI.View.Component.ListDetailCard as ListDetailCard


import UI.Controller.Screen.Page.UserDetails (Action(..), State, ScreenInput, ScreenOutput, initialState, eval, overrides)

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
		, padding "0,0,0,20"
		, background Color.a_FFFFFFFF
		, cornerRadius "0"
		, root true
		, clickable "true"
		] <> overrides "UserDetails" push state )
		[ (mapDom ToolBar.view push state.toolBar1State ToolBar1Action
			[ height_c $ V 56
			, width_c Match_Parent
			, override_c "t_subjects" "Filter Details"
			])
		, linearLayout
			([ height $ V 240
			, width Match_Parent
			, orientation "vertical"
			, gravity "center_horizontal"
			, margin "9,20,10,0"
			] <> overrides "Contents" push state )
			[ (mapDom ListDetailCard.view push state.listDetailCard1State ListDetailCard1Action
				[ height_c $ V 45
				, width_c Match_Parent
				, margin_c "1,0,0,0"
				, override_c "t_state" "State"
				])
			, (mapDom ListDetailCard.view push state.listDetailCard2State ListDetailCard2Action
				[ height_c $ V 45
				, width_c Match_Parent
				, margin_c "1,20,0,0"
				, override_c "t_state" "District"
				])
			, (mapDom ListDetailCard.view push state.listDetailCard3State ListDetailCard3Action
				[ height_c $ V 45
				, width_c Match_Parent
				, margin_c "1,20,0,0"
				, override_c "t_state" "Area"
				])
			, (mapDom ListDetailCard.view push state.listDetailCard4State ListDetailCard4Action
				[ height_c $ V 45
				, width_c Match_Parent
				, margin_c "0,20,1,0"
				, override_c "t_state" "Disease"
				])
			]
		, linearLayout
			([ weight "1"
			] <> overrides "Space" push state )
			[]
		, linearLayout
			([ height $ V 60
			, width Match_Parent
			, orientation "horizontal"
			, gravity "center"
			, margin "20,0,20,0"
			, background Color.a_9F788624
			, stroke "1,#969696"
			, cornerRadius "8"
			] <> overrides "Group" push state )
			[ textView
				([ height $ V 40
				, width Match_Parent
				, text STR.submit1
				, textSize FontSize.a_32
				, color FontColor.a_FFFFFFFF
				, fontStyle Font.sOURCESANSPROREGULAR
				, gravity "center"
				] <> overrides "Submit" push state )
			]
		]
