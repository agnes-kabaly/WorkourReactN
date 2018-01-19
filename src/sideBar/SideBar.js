import React from 'react';
import { StyleSheet, Image } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

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
                        resizeMode="cover"
                    />
                    <List style={{backgroundColor: '#455a64'}}>

                        <ListItem style={styles.itemDesign} onPress={() => this.props.navigation.navigate("Home")}>
                            <Icon name='home' size={32} style={{width:32}}/>
                            <Text style={styles.textStyle}>Home</Text>
                        </ListItem>

                        <ListItem style={styles.itemDesign} onPress={() => this.props.navigation.navigate("Profile")}>
                            <Icon name='user-circle-o' size={32} style={{width:32}}/>
                            <Text style={styles.textStyle}>Profile</Text>
                        </ListItem>

                        <ListItem style={styles.itemDesign} onPress={() => this.props.navigation.navigate("AddDays")}>
                            <Icon name='calendar-plus-o' size={32} style={{width:32}}/>
                            <Text style={styles.textStyle}>Add Days</Text>
                        </ListItem>

                        <ListItem style={styles.itemDesign} onPress={() => this.props.navigation.navigate("ChooseDay")}>
                            <Icon name='calendar' size={32} style={{width:32}}/>
                            <Text style={styles.textStyle}>Choose Day</Text>
                        </ListItem>

                        <ListItem style={styles.itemDesign} onPress={() => this.props.navigation.navigate("ShowCalendar")}>
                            <Icon name='calendar-check-o' size={32} style={{width:32}}/>
                            <Text style={styles.textStyle}>Show Calendar</Text>
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
        flex: 1,
        width: 160,
        height: 160,
        alignSelf: 'center',
        position: 'absolute',
    },
    itemDesign: {
        backgroundColor: '#455a64',
        height: 60,
    },
    textStyle: {
        flex: 1,
        color: '#ffffff',
        textAlign: 'left',
        paddingLeft: 26,
        fontSize: 18,
    }
});