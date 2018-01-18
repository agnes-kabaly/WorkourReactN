import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Alert } from "react-native";
import { Icon, Button } from "native-base";

export default class ProfileScreen extends React.Component {
    render() {
            return (
            <View style={styles.container}>
                <View>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </View>
                <Text style={styles.text}>Welcome on your profile</Text>
                    <Button
                        title = "Profile ok. :)"
                        onPress={() => Alert.alert("It's ok.")}
                    ></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6b800',
    },
    text: {
        color: '#1c313a',
    },
    // not in his place
    button: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    }
});