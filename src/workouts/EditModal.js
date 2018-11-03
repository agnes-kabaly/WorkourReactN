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
            errors: "",
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

    separateNums(exProper) {
        return exProper.replace(/[^0-9]/g, "");
    }

    ifNull(param) {
        if (param == 0) {
            return ++param;
        }
        return param;
    }

    generateValue(weight, set, repeat) {
        return (this.ifNull(weight) * this.ifNull(set) * this.ifNull(repeat));
    };

    async onSavePressed() {

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

        let newVal = this.generateValue(this.separateNums(this.state.weight),
            this.separateNums(this.state.workoutSet), this.separateNums(this.state.rep));

        let oldVal = this.generateValue(this.separateNums(flatListData[foundIndex].weight),
            this.separateNums(flatListData[foundIndex].workoutSet), this.separateNums(flatListData[foundIndex].rep));

        this.props.afterEdit(oldVal - newVal);

        flatListData[foundIndex].workoutName = this.state.workoutName;
        flatListData[foundIndex].weight = this.state.weight;
        flatListData[foundIndex].workoutSet = this.state.workoutSet;
        flatListData[foundIndex].rep = this.state.rep;

        this.state.flatlistItem.refreshFlatListItem();
        this.refs.myModal.close();

        if (this.props.passedVal == true) {
            try {
                //let response = await fetch('http://192.168.150.158:8080/editExercise', {
                //home:
                let response = await fetch('http://192.168.0.152:8080/editExercise', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        key: this.state.key,
                        workoutName: this.state.workoutName,
                        weight: this.state.weight,
                        workoutSet: this.state.workoutSet,
                        rep: this.state.rep,
                    })
                });

                let res = await response.text();

                if (response.status >= 200 && response.status < 300) {
                    console.log("edit was success: " + res);
                    Alert.alert("Exercise modifying OK", res);
                } else {
                    errors = res;
                    throw errors;
                }
            } catch (errors) {
                console.log("catch errors: " + errors);
                Alert.alert("Oops...", errors);
            }
        }

    }

    render() {

        return(
            <Modal
                ref={"myModal"}
                style={styles.modalStyle}
                position='top'
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
                    maxLength={24}
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={ (text) => this.setState({weight: text})}
                    placeholder="Weight"
                    value={this.state.weight}
                    maxLength={8}
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={ (text) => this.setState({workoutSet: text})}
                    placeholder="Set"
                    value={this.state.workoutSet}
                    maxLength={6}
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={ (text) => this.setState({rep: text})}
                    placeholder="Repeat"
                    value={this.state.rep}
                    maxLength={6}
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
                        onPress={this.onSavePressed.bind(this)}
                >
                    Save
                </Button>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalStyle: {
        borderRadius: 16,
        shadowRadius: 10,
        width: screen.width > 460 ? screen.width - 360 : screen.width - 80,
        height: 340,
        marginTop: 80,
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