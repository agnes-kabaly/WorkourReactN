import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import FlatListItem from './FlatListItem';
import EditModal from './EditModal';

var screen = Dimensions.get('window');

export default class Day extends React.Component {

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

        return(
            <View style={styles.container}>
                <View style={styles.flatContainer}>
                    <FlatList
                        ref={"flatList"}
                        data={exerciseList}
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

                <EditModal ref={"editModal"} parentFlatList={this}>

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