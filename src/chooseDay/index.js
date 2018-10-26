import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ChooseDayScreen from './ChooseDay';
import Day from '../workouts/Day';

const chooseNavigation = ({navigation}) => (<ChooseDayScreen navigation={navigation}/>);

const chooseDayStackNavigator = createStackNavigator({
    ChooseDayScreen: {
        screen: ChooseDayScreen,
        navigationOptions: {
            header: null,
        }
    },
    Day: {
        screen: Day,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.workoutDay.dayName}`,
            headerStyle: {
                backgroundColor: `${navigation.state.params.workoutDay.color}`,
            },
            headerTitleStyle: {fontSize: 30},
        }),
    },
});

export default chooseDayStackNavigator;