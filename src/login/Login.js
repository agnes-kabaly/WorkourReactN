import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage,
} from 'react-native';
import Logo from "../components/Logo";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
                <View style={styles.container}>
                    <Logo/>
                    <Text style={styles.headerTitle}> - LOGIN - </Text>
                    <View>
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid="transparent"
                                   placeholder="Email"
                                   placeholderTextColor="#ffffff"
                                   selectionColor="#ffffff"
                                   keyboardType="email-address"
                                   onChangeText={ (email) => this.setState({email})}
                                   //value={this.state.email}
                        />
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid="transparent"
                                   placeholder="Password"
                                   secureTextEntry={true}
                                   placeholderTextColor = "#ffffff"
                                   selectionColor="#ffffff"
                                   onChangeText={ (password) => this.setState({password})}
                                   //value={this.state.password}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.login}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerContent}>
                        <Text style={styles.registerText}>Don't have an account yet?</Text>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Register')}>
                            <Text style={styles.registerButton}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }

    login = () => {
        if(this.state.password === '123' && this.state.email === 'vm@vm.com') {
            //this.props.navigation.navigate('Profile', {name: 'Ági'});
            this.props.navigation.navigate('HomeScreen');
        }
        else {
            alert("The email or password you entered is incorrect.")
        }
    }

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#e6b800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
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
});