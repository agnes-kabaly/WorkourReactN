import React, { Component } from "react";
import Expo from "expo";
//import HomeScreen from "./src/homeScreen/index.js";
import StackNav from "./src/welcome/index";
//import HomeScreen from "./src/homeScreen/index";


export default class AwesomeProject extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("native-base/Fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }
    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        //return <HomeScreen />;
        //return <WelcomeScreen />;
        return (<StackNav/>);
    }
}

/*const StackNav = StackNavigator({
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
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    },
});*/