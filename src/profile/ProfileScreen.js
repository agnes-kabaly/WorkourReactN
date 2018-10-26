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
            dayNames: standardDataSource,
        }
    }

    componentDidMount = () => {
        //cc:
        //fetch('http://192.168.150.158:8080/getUserById?id=' + this.state.userId, {method: 'GET'})
        //home:
        fetch('http://192.168.0.152:8080/getUserById?id=' + this.state.userId, {method: 'GET'})
        //tap:
        //fetch('http://192.168.43.162:8080/getUserById?id=' + this.state.userId, {method: 'GET'})
        //herokuByImi:
        //fetch('http://enigmatic-mesa-76352.herokuapp.com/getUserById?id=' + this.state.userId, {method: 'GET'})
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);

                this.setState({
                    user: responseJson
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
                            onPress={() => this.props.navigation.openDrawer()}>
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
                        <Text>Name: {this.state.user.userName}</Text>
                        <Text>Email: {this.state.user.email}</Text>
                        <Text>Reg.: {this.state.user.regDate}</Text>
                        <Text>Your days:</Text>

                       <ListView
                           dataSource={this.state.dayNames}
                           renderRow={
                               (rowData) => <Text>{rowData.dayName}</Text>
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