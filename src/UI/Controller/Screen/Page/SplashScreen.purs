module UI.Controller.Screen.Page.SplashScreen where

import Prelude
import PrestoDOM.Core
import Data.Either (Either(..))
import PrestoDOM.Types.Core
import Control.Monad.Eff (Eff)
import FRP (FRP)




type ScreenInput = String

type ScreenOutput = String

data Action
	= SplashScreenAction


type State =
	{	}


initialState :: ScreenInput -> State
initialState input =
	{	}


eval
	:: Action
	-> State 
	-> Either ScreenOutput State
eval SplashScreenAction state = Right state


overrides
	:: forall i eff
	. String
	-> (Action -> Eff (frp :: FRP | eff) Unit)
	-> State
	-> Props i
overrides _ push state = []


