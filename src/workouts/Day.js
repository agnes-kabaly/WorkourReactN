import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import FlatListItem from './FlatListItem';
import EditModal from './EditModal';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class Day extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realEdit: true,
        }
    }

    renderSeparator = () => {
        return(
            <View
                style={styles.separatorStyle}
            />
        )
    };

    render(){

        const { navigate } = this.props.navigation;

        var exerciseList = this.props.navigation.state.params.workoutDay.workouts;

        while (flatListData.valueOf().length != 0) {
            flatListData.pop();
        }

        for(var workouts in exerciseList) {
            flatListData.push(exerciseList[workouts]);
        }

        return(
            <View style={styles.container}>
                <View style={styles.flatContainer}>
                    <FlatList
                        ref={"flatList"}
                        style={{flex:1}}
                        data={flatListData}
                        ItemSeparatorComponent={this.renderSeparator}
                        renderItem={({item, index}) => {
                            return (
                                <FlatListItem item={item} index={index} parentFlatList={this}>

                                </FlatListItem>
                            )
                        }}
                    >
                    </FlatList>
                </View>

                <EditModal ref={"editModal"} parentFlatList={this} passedVal={this.state.realEdit}>

                </EditModal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6b800',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    flatContainer: {
        flex: 2,
        width: screen.width > 460 ? screen.width - 310 : screen.width - 30,
        backgroundColor: '#e6b800',
    },
    separatorStyle: {
        height: 7,
        width: "86%",
        backgroundColor: '#e6b800',
        marginLeft: "14%",
    },
});