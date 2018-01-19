import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Alert } from "react-native";
import { Header, Left, Body, Title, Right, Icon, Button, Text, Content, Container, Item, Label } from "native-base";


export default class ProfileScreen extends React.Component {
    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{paddingTop:6}}>PROFILE PAGE</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Text style={styles.text}>Welcome on your profile</Text>
                    <Button rounded danger
                        onPress={() => Alert.alert("It's ok.")}>
                        <Text>Profile ok</Text>
                    </Button>
                    <Text>there is no</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#e6b800',
    },
    text: {
        color: '#1c313a',
    },
    // not in his place
    button: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    }
});