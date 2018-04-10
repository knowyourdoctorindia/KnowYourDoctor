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
		, padding "0,182,0,309"
		, background Color.a_FFFFFFFF
		, cornerRadius "0"
		, root true
		, clickable "true"
		] <> overrides "Group" push state )
		[ linearLayout
			([ height $ V 98
			, width $ V 98
			, orientation "horizontal"
			, gravity "center"
			, margin "131,0,131,0"
			] <> overrides "ImageGroup" push state )
			[ imageView
				([ height $ V 98
				, width $ V 98
				, imageUrl "a9b74a6d1fb97cab857c204760c14e0eeb08e165"
				] <> overrides "a_479956200" push state )
			]
		, linearLayout
			([ height $ V 31
			, width Match_Parent
			, orientation "horizontal"
			, gravity "center"
			, margin "0,20,0,0"
			, background Color.a_FFFFFFFF
			, cornerRadius "0"
			] <> overrides "Group2" push state )
			[ textView
				([ height $ V 31
				, width Match_Parent
				, text STR.knowYourDoctor3
				, textSize FontSize.a_24
				, color FontColor.a_FF000000
				, fontStyle Font.sOURCESANSPROSEMIBOLD
				, gravity "center"
				] <> overrides "KnowYourDoctor" push state )
			]
		]

