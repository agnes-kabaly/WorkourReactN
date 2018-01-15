import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class ProfileScreen extends React.Component {
    render() {
            return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome on {this.props.navigation.state.params.name}'s profile</Text>
                    <Button
                        title = "Show My name"
                        onPress={() =>
                            alert(this.props.navigation.state.params.name)
                        }
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