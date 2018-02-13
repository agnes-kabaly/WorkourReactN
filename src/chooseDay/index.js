import React from 'react';
import { StackNavigator } from 'react-navigation';
import ChooseDayScreen from './ChooseDay';
import Day from '../workouts/Day';

const chooseDayStackNavigator = StackNavigator({
    ChooseDayScreen: {
        screen: ChooseDayScreen,
        navigationOptions: {
            header: null,
        }
    },
    Day: {
        screen: Day,
        navigationOptions: {
            header: null,
        }
    },
});

export default chooseDayStackNavigator;