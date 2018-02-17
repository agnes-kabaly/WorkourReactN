import React, {Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Alert, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class EditModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workoutName: "",
            weight: "",
            workoutSet: "",
            rep: "",
        }
    }

    showEditModal = (editingExercise, flatlistItem) => {
        //console.log(`editingExercise= ${JSON.stringify(editingExercise)}`);
        this.setState({
            key: editingExercise.key,
            workoutName: editingExercise.workoutName,
            weight: editingExercise.weight,
            workoutSet: editingExercise.workoutSet,
            rep: editingExercise.rep,
            flatlistItem: flatlistItem,
        });
        this.refs.myModal.open();
    };

    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    };

    render() {

        return(
            <Modal
                ref={"myModal"}
                style={styles.modalStyle}
                position='center'
                backdrop={true}
                onClosed={() => {
                    //Alert.alert("Meghívódik ha a modal bezárt.");
                }}
            >
                <Text style={styles.modalText}>Edit Exercise:</Text>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={ (text) => this.setState({workoutName: text})}
                    placeholder="Name"
                    value={this.state.workoutName}
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={ (text) => this.setState({weight: text})}
                    placeholder="Weight"
                    value={this.state.weight}
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={ (text) => this.setState({workoutSet: text})}
                    placeholder="Set"
                    value={this.state.workoutSet}
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={ (text) => this.setState({rep: text})}
                    placeholder="Repeat"
                    value={this.state.rep}
                />
                <Button style={styles.button}
                        containerStyle={{
                            padding: 8,
                            marginLeft: 70,
                            marginRight: 70,
                            height: 40,
                            borderRadius: 6,
                            backgroundColor: 'mediumseagreen',
                        }}
                        onPress={() => {
                            if (this.state.workoutName.length == 0 ||
                                this.state.weight.length == 0 ||
                                this.state.workoutSet.length == 0 ||
                                this.state.rep.length == 0) {
                                Alert.alert("You must enter into every field.");
                                return;
                            }
                            var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                            if (foundIndex < 0) {
                                return;
                            }
                            flatListData[foundIndex].workoutName = this.state.workoutName;
                            flatListData[foundIndex].weight = this.state.weight;
                            flatListData[foundIndex].workoutSet = this.state.workoutSet;
                            flatListData[foundIndex].rep = this.state.rep;

                            this.state.flatlistItem.refreshFlatListItem();
                            this.refs.myModal.close();
                        }}
                >
                    Save
                </Button>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalStyle: {
        justifyContent: 'center',
        borderRadius: 16,
        shadowRadius: 10,
        width: screen.width > 460 ? screen.width - 360 : screen.width - 80,
        height: 340,
        marginBottom: 400,
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
    },
    inputStyle: {
        height: 40,
        borderBottomColor: 'grey',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        fontSize: 18,
        color: 'white',
    },
});