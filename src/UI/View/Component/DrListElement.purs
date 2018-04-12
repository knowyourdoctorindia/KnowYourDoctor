module UI.View.Component.DrListElement where

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





import UI.Controller.Component.DrListElement (Action(..), State, initialState, eval, overrides)

t_hospitalName = override_p "t_hospitalName" ""


view
	:: forall w eff
	. (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> StrMap.StrMap GenProp
	-> PrestoDOM Action w
view push state parent =
	linearLayout
		([ height_p (V 50) parent
		, width_p Match_Parent parent
		, orientation_p "horizontal" parent
		, padding_p "2,0,0,2" parent
		, background_p Color.a_FFFFFFFF parent
		, cornerRadius_p "0" parent
		, root_p true parent
		, margin_p "0,0,0,0" parent
		, weight_p "null" parent
		, visibility_p "null" parent
		] <> (overrides "DrListElement" push state))
		[ imageView
			([ height $ V 46
			, width $ V 48
			, margin "0,2,0,0"
			, imageUrl "drphoto180878FB9"
			] <> overrides "DrPhoto" push state )
		, linearLayout
			([ height $ V 40
			, width $ V 270
			, orientation "vertical"
			, gravity "center_horizontal"
			, margin "20,0,0,0"
			, weight "1"
			] <> overrides "Group2" push state )
			[ textView
				([ height $ V 23
				, width Match_Parent
				, text STR.drName4
				, textSize FontSize.a_18
				, color FontColor.a_FF000000
				, fontStyle Font.sOURCESANSPROSEMIBOLD
				, gravity "left"
				] <> overrides "DrName" push state )
			, textView
				([ height $ V 15
				, width Match_Parent
				, margin "0,2,0,0"
				, t_hospitalName parent
				, textSize FontSize.a_12
				, color FontColor.a_FF000000
				, fontStyle Font.sOURCESANSPROREGULAR
				, gravity "left"
				] <> overrides "HospitalName" push state )
			]
		]

