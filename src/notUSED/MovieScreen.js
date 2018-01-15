import React, { Component } from 'react';
import { ActivityIndicator, AppRegistry, ListView , Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    static navigationOptions = {
        title: 'Welcome!',
    };

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                }, function() {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                />
                <Text>{(Platform.Version)}</Text>
                <Button
                    title = "Go to the Profile"
                    onPress={() =>
                        navigate('Profile', {name: 'Ági'})
                    }
                ></Button>
                <Button
                    title = "Go to the Home"
                    onPress={() =>
                        navigate('Home')
                    }
                ></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            android: {
                backgroundColor: 'blue',
            },
        }),
    },
});

AppRegistry.registerComponent('AwesomeProject', () => App);