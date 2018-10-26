import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Alert,
    Text,
} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0,
            errors: "",
        };
    }

    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    };

    async onDeletePressed() {
        try {
            //let response = await fetch('http://192.168.150.158:8080/deleteExercise', {
            //home:
            let response = await fetch('http://192.168.0.152:8080/deleteExercise', {
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    workoutExerciseKey: {
                        key: this.props.item.key,
                    },
                    dayId : {
                        dayId: this.props.passedId,
                    },
                })
            });
            let res = await response.text();

            if (response.status >= 200 && response.status < 300) {
                console.log("delete was success: " + res);
                Alert.alert("Exercise delete OK", res);
            } else {
                errors = res;
                throw errors;
            }
        } catch (errors) {
            console.log("catch errors: " + errors);
            Alert.alert("Oops...", errors);
        }
    }

    render() {

        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                    if (this.state.activeRowKey != null) {
                    this.setState({activeRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});
            },
            right: [

                {
                    onPress: () => {
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },

                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert('Alert', 'Are you sure you want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed' + flatListData), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    if (this.props.passedVal == true) {
                                        this.onDeletePressed();
                                    }
                                    flatListData.splice(this.props.index, 1);
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            {cancelable: true}
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1,
        };
        return(
            <Swipeout {...swipeSettings} backgroundColor='transparent'>
                <View style={{
                    flex: 1,
                    height: 60,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor:'black',
                    backgroundColor: this.props.index % 2 == 0 ? '#232E33': '#35454D'
                }}>
                    <View>
                        <Text style={[styles.flatListItem, {fontWeight: 'bold'}]}>{this.props.item.workoutName}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.flatListItem}>{this.props.item.weight}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.workoutSet}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.rep}</Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    },
});