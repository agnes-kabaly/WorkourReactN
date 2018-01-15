import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView
} from 'react-native';
import Logo from "../components/Logo";
import Form from "./Form";

export default class Login extends Component {
    render() {

        const {navigate} = this.props.navigation;

        return(
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <Logo/>
                    <Text style={styles.loginTitle}>LOGIN FORM</Text>
                        <Form type={"Login"}/>
                    <View style={styles.registerContent}>
                        <Text style={styles.registerText}>Don't have an account yet?</Text>
                        <TouchableOpacity onPress={() => navigate('Register')}>
                            <Text style={styles.registerButton}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6b800',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
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
    loginTitle: {
        color: '#1c313a',
        fontSize: 34,
        fontWeight: 'bold',
        alignItems: 'center',
        paddingLeft: 50,
    },
})