module UI.View.Screen.Page.SplashScreen where

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





import UI.Controller.Screen.Page.SplashScreen (Action(..), State, ScreenInput, ScreenOutput, initialState, eval, overrides)

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
		, padding "0,169,0,206"
		, background Color.a_FFFFFFFF
		, cornerRadius "0"
		, root true
		, clickable "true"
		] <> overrides "Group" push state )
		[ linearLayout
			([ height $ V 200
			, width $ V 226
			, orientation "horizontal"
			, gravity "center"
			, margin "67,0,67,0"
			] <> overrides "ImageGroup" push state )
			[ imageView
				([ height Match_Parent
				, width Match_Parent
				, imageUrl "4f7567e0a05a1ca91745875071783ee2f6a85324"
				] <> overrides "CVDProblemsWithHealth" push state )
			]
		, linearLayout
			([ height $ V 45
			, width Match_Parent
			, orientation "horizontal"
			, gravity "center"
			, margin "0,20,0,0"
			, background Color.a_FFFFFFFF
			, cornerRadius "0"
			] <> overrides "TextGroup" push state )
			[ textView
				([ height $ V 45
				, width Match_Parent
				, text STR.knowYourDoctor3
				, textSize FontSize.a_36
				, color FontColor.a_FF484848
				, fontStyle Font.sOURCESANSPROBOLD
				, gravity "center"
				] <> overrides "KnowYourDoctor" push state )
			]
		]

