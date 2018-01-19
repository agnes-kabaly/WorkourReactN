import React from "react";
import {Container, Header, Title, Left, Button, Body, Content, Text} from "native-base";
import Logo from "../components/Logo";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header style={styles.headerContainer}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" size={38} style={styles.iconStyle}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{fontSize: 26}}>Workout Diary</Title>
                    </Body>
                </Header>
                <View style={styles.container}>
                    <Content>
                        <Logo/>
                        <Text style={styles.textStyle}>Some text.......</Text>
                        <Text style={styles.textStyle}>Welcome in your Workout Diary!.....</Text>
                        <Text style={styles.textStyle}>Choose something from the menu.....</Text>
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
    },
    iconStyle: {
        color: '#ffffff',
        padding: 3,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#36454f",
        alignItems:"center",
        paddingRight: 46,
        height: 66,
    }
});