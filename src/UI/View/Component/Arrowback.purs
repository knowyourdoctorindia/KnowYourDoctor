module UI.View.Component.Arrowback where

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



import UI.Controller.Component.Arrowback (Action(..), State, initialState, eval, overrides)



view
	:: forall w eff
	. (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> StrMap.StrMap GenProp
	-> PrestoDOM Action w
view push state parent =
	linearLayout
		([ height_p (V 24) parent
		, width_p (V 24) parent
		, root_p true parent
		, margin_p "0,0,0,0" parent
		, weight_p "null" parent
		, visibility_p "null" parent
		] <> (overrides "Arrowback" push state))
		[ linearLayout
			([ height $ V 24
			, width $ V 24
			, background Color.a_FFFFFFFF
			, cornerRadius "0"
			] <> overrides "Bg" push state )
			[]
		, linearLayout
			([ height $ V 16
			, width $ V 16
			, background "#333333"
			, cornerRadius "0"
			] <> overrides "Shape" push state )
			[]
		]
