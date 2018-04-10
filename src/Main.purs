module Main where

import Prelude

import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)
import DOM (DOM)
import FRP (FRP)
import PrestoDOM.Core (runScreen)
import Control.Monad.Eff.Exception (EXCEPTION)
import Control.Monad.Aff(launchAff, makeAff, Aff, liftEff')
import UI.View.Screen.Page.UserDetails (screen) as UserDetails
import UI.View.Screen.Page.HospitalDetails (screen) as HospitalDetails
import UI.View.Screen.Page.HomeScreen (screen) as HomeScreen
import UI.View.Screen.Page.SplashScreen (screen) as SplashScreen

foreign import duiShowScreen :: forall e. (String -> Eff e Unit) -> Eff e Unit

main :: forall eff. Eff ( frp :: FRP, dom :: DOM, console :: CONSOLE, exception :: EXCEPTION | eff ) Unit
main = do
	_ <- launchAff (runUI $ SplashScreen.screen "")
	_ <- launchAff $ makeAff (\err sc -> duiShowScreen sc) >>= changeScreen
	pure unit

changeScreen screenName =
	case screenName of
		"UserDetails" -> runUI $ UserDetails.screen ""
		"HospitalDetails" -> runUI $ HospitalDetails.screen ""
		"HomeScreen" -> runUI $ HomeScreen.screen ""
		"SplashScreen" -> runUI $ SplashScreen.screen ""
		_ -> runUI $ UserDetails.screen ""

runUI screen = do
	makeAff (\err sc -> runScreen screen sc)
