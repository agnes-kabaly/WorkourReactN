import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Logo from "../components/Logo";
import Form from "./Form";

export default class Register extends Component {
    render() {

        const {navigate} = this.props.navigation;

        return(
            <View style={styles.container}>
                <Logo/>
                <Text style={styles.registerTitle}>REGISTER FORM</Text>
                <Form type={"Register"}/>
                <View style={styles.registerContent}>
                    <Text style={styles.registerText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigate('Login')}>
                        <Text style={styles.registerButton}> Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('LoginFull')}>
                        <Text style={styles.registerButton}> LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcc00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerContent: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    registerText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
    },
    registerButton: {
        fontSize: 16,
        fontWeight:'500',
    },
    registerTitle: {
        color: '#1c313a',
        fontSize: 34,
        fontWeight: 'bold',
    },
});