import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';

export default class BackgroundImageWithChild extends Component {
    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Image source={require('../../leaf.jpg')} style={styles.backgroundImage}>
                    <Text style={styles.text}>some textecske, elavult</Text>
                </Image>

                <View style={styles.loginForm}>
                    <Text style={styles.text}>some textecske, elavult</Text>
                </View>

                <Button
                    title="Go to the Profil"
                    onPress={() =>
                        navigate('Profile', {name: 'Ági'})
                    }
                ></Button>

            </View>
        )
    }
}

class MyButton extends React.Component {
    render() {
        return (
            <View>
                <BackgroundImage/>
                <Text>{this.props.label}</Text>
                <BackgroundImage/>
            </View>
        )
    }
}

class TextOnBackgroundImage extends Component {
    render() {
        return (
            <BackgroundImage>
                <Text style={styles.text}>Welcome To My App</Text>
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        fontSize: 30
    },
    loginForm: {
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});