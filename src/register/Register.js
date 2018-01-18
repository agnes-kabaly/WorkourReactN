import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage,
    Button,
} from 'react-native';
import Logo from '../components/Logo';

export default class RegisterFull extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            errors: [],
        }
    }

    async onRegisterPressed(){
        try {
            let response = await fetch('http://192.168.150.158:8080/regUser', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                })
            });

            let res = await response.text();

            if(response.status >= 200 && response.status < 300) {
                console.log("res success is: " + res);
            } else {
                errors = res;
                throw errors;
            }

        } catch(errors) {
            console.log("catch errors: " + errors);
        }

    }

    render() {

        const {navigate} = this.props.navigation;

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
                <View style={styles.container}>
                    <Logo/>
                    <Text style={styles.registerTitle}> - REGISTER - </Text>
                    <View>
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid='rgba(0,0,0,0)'
                                   placeholder="Name"
                                   placeholderTextColor = "#ffffff"
                                   selectionColor="#ffffff"
                                   onChangeText={(username) => this.setState({username})}
                        />
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid='rgba(0,0,0,0)'
                                   placeholder="Email"
                                   placeholderTextColor = "#ffffff"
                                   selectionColor="#ffffff"
                                   keyboardType="email-address"
                                   onChangeText={ (email) => this.setState({email})}
                        />
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid='rgba(0,0,0,0)'
                                   placeholder="Password"
                                   secureTextEntry={true}
                                   placeholderTextColor = "#ffffff"
                                   selectionColor="#ffffff"
                                   onChangeText={ (password) => this.setState({password})}
                        />
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid='rgba(0,0,0,0)'
                                   placeholder="Confirm Password"
                                   secureTextEntry={true}
                                   placeholderTextColor = "#ffffff"
                                   selectionColor="#ffffff"
                                   onChangeText={ (password_confirmation) => this.setState({password_confirmation})}
                        />
                        <TouchableOpacity style={styles.button} onPress={this.onRegisterPressed.bind(this)}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerContent}>
                        <Text style={styles.registerText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigate('Login')}>
                            <Text style={styles.loginButton}> Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffcc00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerTitle: {
        color: '#1c313a',
        fontSize: 34,
        fontWeight: 'bold',
    },
    inputBox: {
        width: 300,
        height: 40,
        backgroundColor: '#455a64',
        borderRadius: 16,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#ffffff',
        marginVertical: 10,
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical:10  ,
    },
    buttonText: {
        fontSize: 16,
        fontWeight:'500',
        color: '#ffffff',
        textAlign: 'center',
    },
    registerContent: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 18,
        flexDirection: 'row',
    },
    registerText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
    },
    loginButton: {
        fontSize: 16,
        fontWeight:'500',
    },
});