module UI.View.Component.DetailListElement where

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





import UI.Controller.Component.DetailListElement (Action(..), State, initialState, eval, overrides)



view
	:: forall w eff
	. (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> StrMap.StrMap GenProp
	-> PrestoDOM Action w
view push state parent =
	linearLayout
		([ height_p (V 90) parent
		, width_p Match_Parent parent
		, orientation_p "vertical" parent
		, gravity_p "center_horizontal" parent
		, root_p true parent
		, margin_p "0,0,0,0" parent
		, weight_p "null" parent
		, visibility_p "null" parent
		] <> (overrides "DetailListElement" push state))
		[ linearLayout
			([ height $ V 1
			, width Match_Parent
			, background Color.a_FFB2AC00
			, cornerRadius "0"
			] <> overrides "Rectangle" push state )
			[]
		, linearLayout
			([ height $ V 73
			, width Match_Parent
			, orientation "horizontal"
			, margin "9,9,9,0"
			] <> overrides "Group" push state )
			[ imageView
				([ height $ V 30
				, width $ V 31
				, margin "0,8,0,0"
				, imageUrl "addressiconB1C4C452"
				] <> overrides "Addressicon" push state )
			, textView
				([ height $ V 73
				, width $ V 264
				, margin "25,0,0,0"
				, weight "1"
				, text STR.number7
				, textSize FontSize.a_12
				, color FontColor.a_FF000000
				, fontStyle Font.hELVETICA
				, gravity "left"
				] <> overrides "Number" push state )
			]
		, linearLayout
			([ height $ V 1
			, width Match_Parent
			, background Color.a_FFB2AC00
			, margin "0,6,0,0"
			, cornerRadius "0"
			] <> overrides "Rectangle1" push state )
			[]
		]

