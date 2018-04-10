module UI.View.Screen.Page.HomeScreen where

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


import UI.Controller.Screen.Page.HomeScreen (Action(..), State, ScreenInput, ScreenOutput, initialState, eval, overrides)

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
		, background Color.a_FFFFFFFF
		, cornerRadius "0"
		, root true
		, clickable "true"
		] <> overrides "Group" push state )
		[ (mapDom ToolBar.view push state.toolBar1State ToolBar1Action 
			[ height_c $ V 56
			, width_c Match_Parent
			, override_c "t_subjects" "List of Doctors"
			])
		, scrollView
			([ height $ V 564
			, width Match_Parent
			, margin "10,20,10,0"
			, background Color.a_FFFFFFFF
			, cornerRadius "0"
			] <> overrides "Scroll" push state )
			[ linearLayout
				([ height $ V 50
				, width Match_Parent
				, orientation "horizontal"
				, gravity "center"
				] <> overrides "DrList" push state )
				[]
			]
		]

