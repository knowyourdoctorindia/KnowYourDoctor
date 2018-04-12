module UI.View.Component.DetailListElementSmall where

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





import UI.Controller.Component.DetailListElementSmall (Action(..), State, initialState, eval, overrides)



view
	:: forall w eff
	. (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> StrMap.StrMap GenProp
	-> PrestoDOM Action w
view push state parent =
	linearLayout
		([ height_p (V 37) parent
		, width_p Match_Parent parent
		, orientation_p "vertical" parent
		, root_p true parent
		, margin_p "0,0,0,0" parent
		, weight_p "null" parent
		, visibility_p "null" parent
		] <> (overrides "DetailListElement" push state))
		[ linearLayout
			([ height $ V 30
			, width $ V 189
			, orientation "horizontal"
			, margin "6,0,145,0"
			] <> overrides "Group" push state )
			[ imageView
				([ height $ V 30
				, width $ V 30
				, imageUrl "phoneicon5B9969A2"
				] <> overrides "Phoneicon" push state )
			, textView
				([ height $ V 18
				, width $ V 149
				, margin "10,4,0,0"
				, weight "1"
				, text STR.number8
				, textSize FontSize.a_14
				, color FontColor.a_FF00BFFF
				, fontStyle Font.sOURCESANSPROSEMIBOLD
				, gravity "center"
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

