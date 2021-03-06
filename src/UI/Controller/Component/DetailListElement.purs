module UI.Controller.Component.DetailListElement where

import Prelude
import PrestoDOM.Core
import Data.Either (Either(..))
import PrestoDOM.Types.Core
import Control.Monad.Eff (Eff)
import FRP (FRP)




type ScreenInput = String

type ScreenOutput = String

data Action
	= DetailListElementAction


type State =
	{	}


initialState :: State
initialState =
	{	}


eval
	:: Action
	-> State 
	-> State
eval DetailListElementAction state = state


overrides
	:: forall i eff
	. String
	-> (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> Props i
overrides _ push state = []


