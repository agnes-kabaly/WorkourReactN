import React from 'react';
import { Image } from "react-native";
import { Container, Content, Text, List, ListItem, Left, Right, Body, Button } from "native-base";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const routes = ["Home", "Profile", "AddDays", "ChooseDay", "ShowCalendar"];

export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor: '#e6b800'}}>
                    <Image
                        style={styles.backgroundImage}
                        source={require('../assets/one0.jpg')}
                    />
                    <Image
                        style={styles.logoPicture}
                        source={require('../assets/myW.png')}
                    />
                    <List style={{backgroundColor: '#455a64'}}>
                        <ListItem style={{backgroundColor: '#455a64', height: 70}}>
                            <Left>
                                <Icon name='home' size={32} padding={10}/>
                            </Left>
                            <Body>
                                <Button
                                    transparent
                                    onPress={() => this.props.navigation.navigate("Home")}>
                                    <Text style={{color: '#ffffff', fontWeight:'bold'}}>Home</Text>
                                </Button>
                            </Body>
                            <Right>

                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Icon name='user' size={26}/>
                            </Left>
                            <Body>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("Profile")}>
                                <Text>Profile</Text>
                            </Button>
                            </Body>
                            <Right>

                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Icon name='calendar-plus-o' size={26}/>
                            </Left>
                            <Body>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("AddDays")}>
                                <Text>Add Days</Text>
                            </Button>
                            </Body>
                            <Right>

                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Icon name='calendar' size={26}/>
                            </Left>
                            <Body>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("ChooseDay")}>
                                <Text>Choose Day</Text>
                            </Button>
                            </Body>
                            <Right>

                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Icon name='calendar-check-o' size={26}/>
                            </Left>
                            <Body>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("ShowCalendar")}>
                                <Text>Show Calendar</Text>
                            </Button>
                            </Body>
                            <Right>

                            </Right>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        height:150,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    logoPicture: {
        width: 80,
        height: 80,
        paddingHorizontal: 130,
        paddingVertical: 10,
       // alignSelf: 'stretch',
        position: 'absolute',
    },
});