import React from "react";
import { StackNavigator } from "react-navigation";
import Login from "../login/index";
import WelcomeScreen from "./WelcomeScreen";

const WelcomeScreenStackRouter = StackNavigator({
    WelcomeScreen: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },

});

export default WelcomeScreenStackRouter;