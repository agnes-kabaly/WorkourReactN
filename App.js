import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './src/pages/ProfileScreen';
import BackgroundImageWelcome from "./src/pages/BackgroundImageWelcome";
import LoginFull from './src/pages/LoginFull';
import RegisterFull from './src/pages/RegisterFull';

const RootNavigate = StackNavigator({
    Home: {
        screen: BackgroundImageWelcome,
        navigationOptions: {
            header: false,
        }
    },
    LoginFull: {
        screen: LoginFull,
        navigationOptions: {
            header: null,
        }
    },
    RegisterFull: {
        screen: RegisterFull,
        navigationOptions: {
            header: null,
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}'s Profile`,
        }),
    },


});

export default class App extends Component {
    render() {
        return (
            <RootNavigate/>
        )
    }
}