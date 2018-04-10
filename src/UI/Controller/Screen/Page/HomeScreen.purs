module UI.Controller.Screen.Page.HomeScreen where

import Prelude
import PrestoDOM.Core
import Data.Either (Either(..))
import PrestoDOM.Types.Core
import Control.Monad.Eff (Eff)
import FRP (FRP)



import UI.Controller.Component.ToolBar as ToolBar

type ScreenInput = String

type ScreenOutput = String

data Action
	= HomeScreenAction
	| ToolBar1Action ToolBar.Action


type State =
	{ toolBar1State :: ToolBar.State
	}


initialState :: ScreenInput -> State
initialState input =
	{ toolBar1State : ToolBar.initialState
	}


eval
	:: Action
	-> State 
	-> Either ScreenOutput State
eval HomeScreenAction state = Right state
eval (ToolBar1Action action) state = Right $ state { toolBar1State = ToolBar.eval action state.toolBar1State }


overrides
	:: forall i eff
	. String
	-> (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> Props i
overrides _ push state = []


