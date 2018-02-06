import React from 'react';
import { View, StyleSheet, Alert, Image, ListView } from 'react-native';
import { Header, Title, Right, Button, Text, Content, Container } from "native-base";
import Icon from 'react-native-vector-icons/Entypo';

var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: "",
            userId: 1,
            days: "",
            dayNames: standardDataSource,
        }
    }

    componentDidMount = () => {
        //fetch('http://192.168.0.152:8080/getUserById?id=' + this.state.userId, {method: 'GET'})
        fetch('http://192.168.1.22:8080/getUserById?id=' + this.state.userId, {method: 'GET'})
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState({
                    user: responseJson
                });

                this.setState({days: this.state.user.days});
                this.setState({dayNames: standardDataSource.cloneWithRows(this.state.user.days)});
            })
            .catch((error) => {
                console.error(error);
            });
    };

    _renderDays() {
        let dayNameText = [];
        let countDays = 0;
        for (var dayIndex = 0; dayIndex < this.state.days.length; dayIndex++) {
            countDays++;
            let eachDayName = this.state.days[dayIndex].dayName;
            dayNameText.push(
                <Text key={countDays}>{eachDayName}</Text>);
        }
        return dayNameText;
    }

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
                        <Text style={styles.text}>Welcome on your profile.</Text>

                        <Image
                            source={require("../assets/profile.png")}
                        />
                        <Text>Choose profile picture. - will.</Text>
                        <Button rounded
                            style={styles.button}
                            onPress={() => Alert.alert("It's ok.")}>
                            <Text>Profile ok</Text>
                        </Button>
                        <Text>{this.state.user.userName}</Text>
                        <Text>{this.state.user.email}</Text>
                        <Text>{this.state.user.regDate}</Text>
                        <View>
                            {this._renderDays()}
                        </View>

                       <ListView
                            dataSource={this.state.dayNames}
                            renderRow={
                                (rowData) => <Text>Name: {rowData.dayName}</Text>
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