import React from "react";
import { Container, Content, Header, Right, Title, Label, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, View, ListView, TouchableOpacity, Dimensions } from "react-native";

var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var screen = Dimensions.get('window');

export default class ChooseDay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: "",
            userId: 1,
            dayNames: standardDataSource,
        }
    }

    componentDidMount = () => {
        //tap:
        //fetch('http://192.168.1.22:8080/getUserById?id=' + this.state.userId, {method: 'GET'})
        //cc:
        fetch('http://192.168.150.158:8080/getUserById?id=' + this.state.userId, {method: 'GET'})
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);

                this.setState({
                    user: responseJson,
                });

                this.setState({dayNames: standardDataSource.cloneWithRows(this.state.user.days)});
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
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" size={38} style={styles.iconStyle} />
                        </Button>
                    <Title style={{fontSize: 26}}>CHOOSE DAY</Title>
                    <Right />
                </Header>
                <View style={styles.container}>
                    <Content padder>
                        <Button rounded
                                style={styles.button}
                                onPress={() => navigate("Profile")}>
                            <Text>Goto Profile</Text>
                        </Button>

                        <ListView
                            style={{paddingBottom: 6}}
                            dataSource={this.state.dayNames}
                            renderRow={
                                (rowData) =>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: rowData.color,
                                            justifyContent: 'center',
                                            width: screen.width - 30,
                                            borderRadius: 10,
                                            borderWidth: 2,
                                            height: 60,
                                            marginTop: 6,
                                        }}
                                        onPress={() => this.props.navigation.navigate("Day", {workoutDay: rowData})}
                                    >
                                        <Text style={styles.dayNameText}>{rowData.dayName}</Text>
                                    </TouchableOpacity>
                            }
                        >
                        </ListView>

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
    },
    dayNameText: {
        padding: 8,
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '800',
    }
});