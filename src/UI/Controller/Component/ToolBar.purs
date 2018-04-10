module UI.Controller.Component.ToolBar where

import Prelude
import PrestoDOM.Core
import Data.Either (Either(..))
import PrestoDOM.Types.Core
import Control.Monad.Eff (Eff)
import FRP (FRP)



import UI.Controller.Component.Arrowback as Arrowback

type ScreenInput = String

type ScreenOutput = String

data Action
	= ToolBarAction
	| Arrowback1Action Arrowback.Action


type State =
	{ arrowback1State :: Arrowback.State
	}


initialState :: State
initialState =
	{ arrowback1State : Arrowback.initialState
	}


eval
	:: Action
	-> State 
	-> State
eval ToolBarAction state = state
eval (Arrowback1Action action) state = state { arrowback1State = Arrowback.eval action state.arrowback1State }


overrides
	:: forall i eff
	. String
	-> (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> Props i
overrides _ push state = []


