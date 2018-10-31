import React from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import FlatListItem from './FlatListItem';
import EditModal from './EditModal';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class Day extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realEdit: true,
            deletedRowKey: null,
            exerciseList: this.props.navigation.state.params.workoutDay.workouts,
            deletedExList: [],
            parentLength: flatListData.valueOf().length,
            dayStatus: 'ABORTED',
        }
    }

    renderSeparator = () => {
        return(
            <View
                style={styles.separatorStyle}
            />
        )
    };

    setDayStatus(size) {
        if (size > 0) {
            this.setState({
                dayStatus: "ABORTED",
            })
        } else {
            this.setState({
                dayStatus: "COMPLETED",
            })
        }
        Alert.alert('Alert', 'Are you sure you want to SUBMIT?',
            [
                {text: 'No', onPress: () => console.log('Cancel Pressed on SUBMIT'), style: 'cancel'},
                {text: 'Yes', onPress: () => {
                    console.log("Submitted day status: " + this.state.dayStatus);
                }},
            ],
            {cancelable: true}
        );
    };

    refreshFlatList = (activeKey) => {
        this.refs.flatList.scrollToOffset({ offset: 0, animated: true });
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey,
                parentLength: flatListData.valueOf().length,
            };
        });
    };

    componentDidMount = () => {
        if (this.state.exerciseList.valueOf().length == 0) {
            while (flatListData.valueOf().length != this.state.exerciseList.valueOf().length) {
                flatListData.pop();
            }
        }

        while (flatListData.valueOf().length != 0) {
            flatListData.pop();
        }
        this.state.deletedExList.push(this.state.deletedRowKey);
        for(var workouts in this.state.exerciseList) {
            for (var deletedIndex in this.state.deletedExList) {
                if (this.state.exerciseList[workouts].key != this.state.deletedExList[deletedIndex]) {
                    console.log("Name: " + this.state.exerciseList[workouts].workoutName);
                    this.refreshFlatList(this.state.exerciseList[workouts].key);
                    flatListData.push(this.state.exerciseList[workouts]);
                }
            }
        }
    };

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.flatContainer}>
                    <FlatList
                        ref={"flatList"}
                        style={{flex:1}}
                        data={flatListData}
                        ItemSeparatorComponent={this.renderSeparator}
                        renderItem={({item, index}) => {
                            return (
                                <FlatListItem
                                    item={item}
                                    index={index}
                                    //style={{flex:1}}
                                    parentFlatList={this}
                                    passedVal={this.state.realEdit}
                                    passedId={this.props.navigation.state.params.workoutDay.dayId}>
                                </FlatListItem>
                            )
                        }}
                    >
                    </FlatList>
                </View>

                <EditModal ref={"editModal"} parentFlatList={this} passedVal={this.state.realEdit}>

                </EditModal>

                <View>
                    <TouchableOpacity style={styles.submitStyle} onPress={() => this.setDayStatus(this.state.parentLength)}>
                        <Image
                            style={styles.btnImg}
                            source={this.state.oneDel ? null : require('../assets/green-submit-button-png-1.png')}
                        ></Image>
                    </TouchableOpacity>
                </View>

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
        paddingBottom: 10,
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
    submitStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 8,
    },
    btnImg: {
        width: 180,
        height: 48,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'black'
    },
});