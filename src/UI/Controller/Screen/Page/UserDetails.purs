module UI.Controller.Screen.Page.UserDetails where

import Prelude
import PrestoDOM.Core
import Data.Either (Either(..))
import PrestoDOM.Types.Core
import Control.Monad.Eff (Eff)
import FRP (FRP)



import UI.Controller.Component.ToolBar as ToolBar
import UI.Controller.Component.ListDetailCard as ListDetailCard

type ScreenInput = String

type ScreenOutput = String

data Action
	= UserDetailsAction
	| ToolBar1Action ToolBar.Action
	| ListDetailCard1Action ListDetailCard.Action
	| ListDetailCard2Action ListDetailCard.Action
	| ListDetailCard3Action ListDetailCard.Action
	| ListDetailCard4Action ListDetailCard.Action


type State =
	{ toolBar1State :: ToolBar.State
	, listDetailCard1State :: ListDetailCard.State
	, listDetailCard2State :: ListDetailCard.State
	, listDetailCard3State :: ListDetailCard.State
	, listDetailCard4State :: ListDetailCard.State
	}


initialState :: ScreenInput -> State
initialState input =
	{ toolBar1State : ToolBar.initialState
	, listDetailCard1State : ListDetailCard.initialState
	, listDetailCard2State : ListDetailCard.initialState
	, listDetailCard3State : ListDetailCard.initialState
	, listDetailCard4State : ListDetailCard.initialState
	}


eval
	:: Action
	-> State 
	-> Either ScreenOutput State
eval UserDetailsAction state = Right state
eval (ToolBar1Action action) state = Right $ state { toolBar1State = ToolBar.eval action state.toolBar1State }
eval (ListDetailCard1Action action) state = Right $ state { listDetailCard1State = ListDetailCard.eval action state.listDetailCard1State }
eval (ListDetailCard2Action action) state = Right $ state { listDetailCard2State = ListDetailCard.eval action state.listDetailCard2State }
eval (ListDetailCard3Action action) state = Right $ state { listDetailCard3State = ListDetailCard.eval action state.listDetailCard3State }
eval (ListDetailCard4Action action) state = Right $ state { listDetailCard4State = ListDetailCard.eval action state.listDetailCard4State }


overrides
	:: forall i eff
	. String
	-> (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> Props i
overrides _ push state = []


