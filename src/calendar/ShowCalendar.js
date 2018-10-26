import React from "react";
import { Container, Content, Header, Right, Title, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, View } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class ShowCalendar extends React.Component {
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
                    <Title style={{fontSize: 26}}>CALENDAR</Title>
                    <Right />
                </Header>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Calendar
                            markedDates={{
                                '2018-10-28':{selected: true, selectedColor: 'green'},
                            }}

                        />

                    </View>
                    <View style={styles.buttonView}>
                        <Button rounded
                                style={styles.button}
                                onPress={() => navigate("ProfileScreen")}>
                            <Text>Goto Profile</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonView: {
        justifyContent: 'center',
        //backgroundColor: '#e6b800',
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
        alignSelf: "center",
        marginBottom: 40,
    }
});