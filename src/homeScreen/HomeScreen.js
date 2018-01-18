import React from "react";
import {Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text} from "native-base";
import Logo from "../components/Logo";
import { StyleSheet, View } from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Workout Diary</Title>
                    </Body>
                </Header>
                <View style={styles.container}>
                    <Content>
                        <Logo/>
                        <Text style={styles.textStyle}>Some text.......</Text>
                        <Text style={styles.textStyle}>Welcome in your Workout Diary!.....</Text>
                        <Text style={styles.textStyle}>Choose something from the hamburger menu.......</Text>
                        <Text style={styles.textStyle}>Your name will be here, from the SQL</Text>
                        <Text style={styles.textStyle}>Your registration date will be here too...</Text>
                        <Text style={styles.textStyle}>...with some unless statistics...</Text>
                    </Content>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6b800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 18,
    }
});