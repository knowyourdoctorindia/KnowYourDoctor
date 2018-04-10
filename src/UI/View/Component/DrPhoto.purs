module UI.View.Component.DrPhoto where

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



import UI.Controller.Component.DrPhoto (Action(..), State, initialState, eval, overrides)



view
	:: forall w eff
	. (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> StrMap.StrMap GenProp
	-> PrestoDOM Action w
view push state parent =
	linearLayout
		([ height_p (V 46) parent
		, width_p (V 48) parent
		, root_p true parent
		, margin_p "0,0,0,0" parent
		, weight_p "null" parent
		, visibility_p "null" parent
		] <> (overrides "DrPhoto1" push state))
		[ linearLayout
			([ height $ V 46
			, width $ V 48
			, background Color.a_FFFFFFFF
			, cornerRadius "0"
			] <> overrides "Bg" push state )
			[]
		, linearLayout
			([ height $ V 46
			, width $ V 48
			, background "#d7d7d7"
			, stroke "1,#969696"
			, cornerRadius "0"
			] <> overrides "Oval" push state )
			[]
		]
