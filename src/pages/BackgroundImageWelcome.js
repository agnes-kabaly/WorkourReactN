import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class BackgroundImage2 extends Component {
    render() {

        const {navigate} = this.props.navigation;

        const text = 'Welcome To My App';

        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={require('../assets/leaf.jpg')}/>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>{text}</Text>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => navigate('LoginFull')}>
                        <Text style={styles.enterButton}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageView: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
    },
    textView: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
        color: '#FFD700',
        fontFamily: 'serif',
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    enterButton: {
        padding: 8,
        fontSize: 16,
        color: '#c17900',
        backgroundColor: '#FFD700',
        borderRadius: 17,
        marginVertical: 26,
        paddingHorizontal: 26,
    },
});