import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Logo extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image
                    style={{width: 250, height: 250}}
                    source={require('../assets/myW.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});