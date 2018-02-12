import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import { TriangleColorPicker, toHsv, fromHsv } from 'react-native-color-picker';

var screen = Dimensions.get('window');

export default class ColorPickerModal extends Component {

    constructor(...args) {
        super(...args)
        this.state = { color: toHsv('green') }
        this.onColorChange = this.onColorChange.bind(this)
    }

    onColorChange(color) {
        this.setState({ color })
        console.log(color)
        console.log(fromHsv( color ) )
    }

    showColorPickerModal = () => {
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
                    //Alert.alert("Meghívódik ha a modal bezárt.");
                }}
            >
                <View style={{flex: 1, padding: 15, backgroundColor: '#212021', alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>Choose a Color for your Day</Text>
                    <TriangleColorPicker
                        oldColor='purple'
                        color={this.state.color}
                        onColorChange={this.onColorChange}
                        //onColorSelected={color => Alert.alert(`Color selected: ${color}`)}
                        //onOldColorSelected={color => Alert.alert(`Old color selected: ${color}`)}
                        style={{flex: 1, height: 200, width: 200}}
                    />
                </View>
                <Button style={styles.buttonText}
                        containerStyle={{
                            padding: 8,
                            marginLeft: 70,
                            marginRight: 70,
                            height: 40,
                            borderRadius: 6,
                            backgroundColor: 'mediumseagreen',
                        }}
                        onPress={() => {
                            this.props.color = this.state.color,
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
        shadowRadius: 10,
        width: screen.width - 80,
        height: 340,
        marginBottom: 400,
        backgroundColor: '#212021',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
});