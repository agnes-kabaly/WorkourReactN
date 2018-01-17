import React from "react";
import {Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text} from "native-base";
import Logo from "../components/Logo";
import HomeScreenRouter from "./index.js";

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
                <Content>
                    <Logo/>
                    <Text>Some text.......</Text>
                    <Text>Some text.......</Text>
                    <Text>Some text.......</Text>
                </Content>
            </Container>
        )
    }
}
