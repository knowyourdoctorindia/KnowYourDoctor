module UI.View.Component.ListDetailCard where

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




import UI.Controller.Component.ListDetailCard (Action(..), State, initialState, eval, overrides)

t_state = override_p "t_state" ""


view
	:: forall w eff
	. (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> StrMap.StrMap GenProp
	-> PrestoDOM Action w
view push state parent =
	linearLayout
		([ height_p (V 45) parent
		, width_p Match_Parent parent
		, orientation_p "horizontal" parent
		, background_p Color.a_FFFFFFFF parent
		, cornerRadius_p "0" parent
		, root_p true parent
		, margin_p "0,0,0,0" parent
		, weight_p "null" parent
		, visibility_p "null" parent
		] <> (overrides "ListDetailCard" push state))
		[ textView
			([ height $ V 31
			, width $ V 77
			, margin "0,5,0,0"
			, t_state parent
			, textSize FontSize.a_24
			, color FontColor.a_FF000000
			, fontStyle Font.sOURCESANSPROREGULAR
			, gravity "left"
			] <> overrides "State" push state )
		, linearLayout
			([ height $ V 45
			, width $ V 226
			, orientation "horizontal"
			, gravity "center_vertical"
			, padding "4,0,7,0"
			, margin "37,0,0,0"
			, weight "1"
			, background Color.a_FFFFFFFF
			, stroke "1,#969696"
			, cornerRadius "8"
			] <> overrides "Group" push state )
			[ textView
				([ height $ V 31
				, width Match_Parent
				, text STR.karnataka10
				, textSize FontSize.a_24
				, color FontColor.a_87424242
				, fontStyle Font.sOURCESANSPROREGULAR
				, gravity "center"
				] <> overrides "Karnataka" push state )
			]
		]

