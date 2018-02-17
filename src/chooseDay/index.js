import React from 'react';
import { StackNavigator } from 'react-navigation';
import ChooseDayScreen from './ChooseDay';
import Day from '../workouts/Day';

const chooseNavigation = ({navigation}) => (<ChooseDayScreen navigation={navigation}/>);

const chooseDayStackNavigator = StackNavigator({
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
                flexDirection: 'row',
                justifyContent: "space-between"
            },
            headerTitleStyle: {fontSize: 30},
        }),
    },
});

export default chooseDayStackNavigator;