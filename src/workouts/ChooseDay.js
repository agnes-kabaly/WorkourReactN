import React from "react";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";


export default class ChooseDay extends React.Component {

    render() {

        const { navigate } = this.props.navigation;

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
                    <Title>Choose Day</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Item floatingLabel style={{ marginTop: 20 }}>
                        <Label>Choose Day with unless input</Label>
                        <Input />
                    </Item>
                    <Button rounded danger
                            style={{ marginTop: 20, alignSelf: "center" }}
                            onPress={() => navigate("Profile")}>
                        <Text>Goto Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}