import React from "react";
import { StackNavigator } from "react-navigation";
import Login from "../login/Login";
import WelcomeScreen from "./WelcomeScreen";
import HomeScreen from "../homeScreen/index";

const StackNav = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    WelcomeScreen: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    },
});

export default StackNav;