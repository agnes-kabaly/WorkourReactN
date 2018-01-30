import React, {Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props);
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
                <Text>New Exercise information:</Text>
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
        height: 300,
    }
});