import React, {Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

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

    render() {
        return(
            <Modal
                ref={"myModal"}
                style={styles.modalStyle}
                position='center'
                backdrop={true}
                onClosed={() => {
                    Alert.alert("Meghívódik ha a modal bezárt.");
                }}
            >
                <Text style={styles.modalText}>New Exercise:</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Name"
                        value={this.state.workoutName}
                        onChangeText={ (text) => this.setState({workoutName: text})}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Weight"
                        value={this.state.weight}
                        onChangeText={ (text) => this.setState({weight: text})}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Set"
                        value={this.state.workoutSet}
                        onChangeText={ (text) => this.setState({workoutSet: text})}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Repeat"
                        value={this.state.rep}
                        onChangeText={ (text) => this.setState({rep: text})}
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
        width: screen.width - 80,
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