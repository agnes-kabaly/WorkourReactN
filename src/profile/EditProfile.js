import React from "react";
import { Container, Content, Header, Right, Title, Input, Item, Label, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, View } from "react-native";


export default class EditProfile extends React.Component {
    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container>
                <Header style={styles.headerContainer}>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="menu" size={38} style={styles.iconStyle} />
                        </Button>
                    <Title style={{fontSize: 26}}>EDIT PROFILE</Title>
                    <Right />
                </Header>
                <View style={styles.container}>
                    <Content padder>
                        <Item floatingLabel style={{ marginTop: 20 }}>
                            <Label>Edit Profile try with unless input</Label>
                            <Input />
                        </Item>
                        <Button rounded
                                style={styles.button}
                                onPress={() => navigate("ProfileScreen")}>
                            <Text>Goto Profile</Text>
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