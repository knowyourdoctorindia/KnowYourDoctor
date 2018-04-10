module UI.Controller.Screen.Page.HospitalDetails where

import Prelude
import PrestoDOM.Core
import Data.Either (Either(..))
import PrestoDOM.Types.Core
import Control.Monad.Eff (Eff)
import FRP (FRP)



import UI.Controller.Component.ToolBar as ToolBar
import UI.Controller.Component.DetailListElement as DetailListElement
import UI.Controller.Component.DetailListElementSmall as DetailListElementSmall

type ScreenInput = String

type ScreenOutput = String

data Action
	= HospitalDetailsAction
	| ToolBar1Action ToolBar.Action
	| DetailListElement1Action DetailListElement.Action
	| DetailListElementSmall1Action DetailListElementSmall.Action


type State =
	{ toolBar1State :: ToolBar.State
	, detailListElement1State :: DetailListElement.State
	, detailListElementSmall1State :: DetailListElementSmall.State
	}


initialState :: ScreenInput -> State
initialState input =
	{ toolBar1State : ToolBar.initialState
	, detailListElement1State : DetailListElement.initialState
	, detailListElementSmall1State : DetailListElementSmall.initialState
	}


eval
	:: Action
	-> State 
	-> Either ScreenOutput State
eval HospitalDetailsAction state = Right state
eval (ToolBar1Action action) state = Right $ state { toolBar1State = ToolBar.eval action state.toolBar1State }
eval (DetailListElement1Action action) state = Right $ state { detailListElement1State = DetailListElement.eval action state.detailListElement1State }
eval (DetailListElementSmall1Action action) state = Right $ state { detailListElementSmall1State = DetailListElementSmall.eval action state.detailListElementSmall1State }


overrides
	:: forall i eff
	. String
	-> (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> Props i
overrides _ push state = []


