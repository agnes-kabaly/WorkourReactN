import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class ProfileScreen extends React.Component {
    render() {
            return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome on your profile</Text>
                    <Button
                        title = "Profile ok. :)"
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
    }
});