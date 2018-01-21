import React from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";

export default class AddDays extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dayName: "",
        }
    }

    render () {
        return (
            <KeyboardAvoidingView>
                <View>
                    <Text>is it ok now</Text>
                    <TextInput placeholder="oké"/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}