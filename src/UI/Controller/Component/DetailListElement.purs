module UI.Controller.Component.DetailListElement where

import Prelude
import PrestoDOM.Core
import Data.Either (Either(..))
import PrestoDOM.Types.Core
import Control.Monad.Eff (Eff)
import FRP (FRP)



import UI.Controller.Component.DrPhoto as DrPhoto

type ScreenInput = String

type ScreenOutput = String

data Action
	= DetailListElementAction
	| DrPhoto1Action DrPhoto.Action


type State =
	{ drPhoto1State :: DrPhoto.State
	}


initialState :: State
initialState =
	{ drPhoto1State : DrPhoto.initialState
	}


eval
	:: Action
	-> State 
	-> State
eval DetailListElementAction state = state
eval (DrPhoto1Action action) state = state { drPhoto1State = DrPhoto.eval action state.drPhoto1State }


overrides
	:: forall i eff
	. String
	-> (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> Props i
overrides _ push state = []


