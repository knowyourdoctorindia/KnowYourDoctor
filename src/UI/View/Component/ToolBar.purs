module UI.View.Component.ToolBar where

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





import UI.Controller.Component.ToolBar (Action(..), State, initialState, eval, overrides)

t_subjects = override_p "t_subjects" ""


view
	:: forall w eff
	. (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> StrMap.StrMap GenProp
	-> PrestoDOM Action w
view push state parent =
	linearLayout
		([ height_p (V 56) parent
		, width_p Match_Parent parent
		, orientation_p "horizontal" parent
		, gravity_p "center_vertical" parent
		, padding_p "20,0,3,0" parent
		, background_p Color.a_FFFFFFFF parent
		, cornerRadius_p "0" parent
		, root_p true parent
		, margin_p "0,0,0,0" parent
		, weight_p "null" parent
		, visibility_p "null" parent
		] <> (overrides "Group" push state))
		[ linearLayout
			([ height $ V 24
			, width Match_Parent
			, orientation "horizontal"
			] <> overrides "TopBarWithArrowContents" push state )
			[ imageView
				([ height $ V 24
				, width $ V 24
				, imageUrl "arrowback62CAD875"
				] <> overrides "Arrowback" push state )
			, textView
				([ height $ V 20
				, width $ V 285
				, margin "28,1,0,0"
				, weight "1"
				, t_subjects parent
				, textSize FontSize.a_16
				, color FontColor.a_FF333333
				, fontStyle Font.sOURCESANSPROSEMIBOLD
				, gravity "left"
				] <> overrides "Subjects" push state )
			]
		]

