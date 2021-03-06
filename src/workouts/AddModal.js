import React, {Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Alert, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workoutName: "",
            weight: "",
            workoutSet: "",
            rep: "",
        }
    }

    showAddModal = () => {
        this.refs.myModal.open();
    };

    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    };

    /*deleteNameValue = () => {
        this.setState({workoutName: ""});
    };*/

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
                <Text style={styles.modalText}>New Exercise:</Text>
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
                        onChangeText={(text) => this.setState({rep: text})}
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
                        onPress={() => {
                            if (this.state.workoutName.length == 0 ||
                                this.state.weight.length == 0 ||
                                this.state.workoutSet.length == 0 ||
                                this.state.rep.length == 0) {
                                Alert.alert("You must enter into every field.");
                                return;
                            } else {
                                const newKey = this.generateKey(24);
                                const newExercise = {
                                    key: newKey,
                                    workoutName: this.state.workoutName,
                                    weight: this.state.weight,
                                    workoutSet: this.state.workoutSet,
                                    rep: this.state.rep,
                                };
                                this.refs.myModal.close();
                                flatListData.push(newExercise);
                                this.props.parentFlatList.refreshFlatList(newKey);
                                //this.deleteNameValue();
                            }
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