import React from 'react';
import {View, Text} from 'react-native';

export default class Day extends React.Component {
    render(){

        const { navigate } = this.props.navigation;

        var exerciseList = this.props.navigation.state.params.workoutDay.workouts;

        return(
            <View>
                <Text>Dax oki</Text>
                <Text>{this.props.navigation.state.params.workoutDay.dayName}</Text>
                <Text>{this.props.navigation.state.params.workoutDay.color}</Text>
                <Text>{exerciseList.length}</Text>
            </View>
        )
    }
}