import React from "react";
import { Container, Content, Header, Right, Title, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, View } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class ShowCalendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: "",
            userId: 1,
            calendars: [],
            newDaysObject: {},
        }
    }

    createCalendars(myResponseJ) {
        for (var respInd in myResponseJ.calendars) {
            this.state.calendars[respInd] = myResponseJ.calendars[respInd];
        }

        this.generateNewDaysObject();
    }

    handleDateMaking(status) {
        switch (status) {
            case 'COMPLETED':
                return 'white';
                break;
            case 'ABORTED':
                return 'red';
                break;
            case 'IMPROVED':
                return 'green';
                break;
            case 'DESCENDED':
                return '#00BFFF';
            default:
                return 'black';
        }
    };

    generateNewDaysObject() {
        this.state.calendars.forEach((day) => {
            this.setState({
                newDaysObject: {
                    ...this.state.newDaysObject,
                    [day.date]: {
                        customStyles: {
                            container:  {
                                backgroundColor: day.color,
                            },
                            text: {
                                fontWeight: 'bold',
                                color: this.handleDateMaking(day.state)
                            }
                        }
                    }
                }
            })
        })
    }

    componentDidMount = () => {
        //home:
        fetch('http://192.168.0.152:8080/getUserById?id=' + this.state.userId, {method: 'GET'})
        //tap:
        //fetch('http://192.168.43.162:8080/getUserById?id=' + this.state.userId, {method: 'GET'})
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    user: responseJson,
                });

                this.createCalendars(responseJson);

                //this.generateNewDaysObject();

            })
            .catch((error) => {
                console.error(error);
            });
    };

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
                            markingType={'custom'}
                            markedDates={this.state.newDaysObject}
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
        marginBottom: 30,
    }
});