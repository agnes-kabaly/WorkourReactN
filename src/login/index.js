import React from "react";
import { StackNavigator } from "react-navigation";
import Login from "./Login";
import HomeScreen from "../homeScreen/index";
import Register from "../register/Register";

const LoginScreenStackRouter = StackNavigator({
    Login: {
        screen: Login,
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
    Register: {
        screen: Register,
        navigationOptions: {
            header: null,
        }
    },

});

export default LoginScreenStackRouter;