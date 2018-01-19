import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Header, Title, Right, Button, Text, Content, Container } from "native-base";
import Icon from 'react-native-vector-icons/Entypo';

export default class ProfileScreen extends React.Component {
    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container>
                <Header style={styles.headerContainer}>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" size={38} style={styles.iconStyle} />
                        </Button>
                    <Title style={{fontSize: 26}}>PROFILE</Title>
                    <Right />
                </Header>
                <View style={styles.container}>
                    <Content padder>
                        <Text style={styles.text}>Welcome on your profile</Text>
                        <Button rounded
                            style={styles.button}
                            onPress={() => Alert.alert("It's ok.")}>
                            <Text>Profile ok</Text>
                        </Button>
                    </Content>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6b800',
    },
    text: {
        color: '#1c313a',
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
        height: 66,
    },
    button: {
        backgroundColor: '#1c313a',
        marginTop: 20,
        alignSelf: "center"
    }
});