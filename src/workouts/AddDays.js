import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    AsyncStorage
} from 'react-native';
import {
    Container,
    Content,
    Header,
    Right,
    Title,
    Input,
    Item,
    Label,
    Button,
    Text,
    Footer,
    FooterTab
} from "native-base";
import Icon from 'react-native-vector-icons/Entypo';

export default class AddDays extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dayName: "",
            errors: "",
        }
    }

    async onSavePressed() {
        try {
            let response = await fetch('http://192.168.150.158:8080/addNewDay', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dayName: this.state.dayName,
                })
            });

            let res = await response.text();

            if (response.status >= 200 && response.status < 300) {
                console.log("save day success: " + res);
                Alert.alert("Day Saved!", res);
            } else {
                errors = res;
                throw errors;
            }
        } catch(errors) {
            console.log("catch errors: " + errors);
            Alert.alert("Oops...", errors);
        }
    }

    render () {

        const { navigate } = this.props.navigation;

        return (
            <Container>
                <Header style={styles.headerContainer}>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" size={38} style={styles.iconStyle} />
                    </Button>
                    <Title style={{fontSize: 26}}>ADD DAY</Title>
                    <Right />
                </Header>
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
                        <Text style={styles.addTitle}> - ADD DAY - </Text>
                        <TextInput style={styles.inputBox}
                                   underlineColorAndroid="rgba(0,0,0,0)"
                                   placeholder="Day Name"
                                   placeholderTextColor="#ffffff"
                                   selectionColor="#ffffff"
                                   value={this.state.dayName}
                                   onChangeText={(dayName) => this.setState({dayName})}
                        />
                        <Button rounded
                                style={styles.addButton}
                                onPress={() => navigate("Profile")}>
                            <Text>Add exercises</Text>
                        </Button>
                    </KeyboardAvoidingView>
                </View>
                <Footer>
                    <FooterTab style={styles.footerStyle}>
                        <TouchableOpacity style={styles.button} onPress={this.onSavePressed().bind(this)}>
                            <Text style={styles.buttonText}>Save New Day</Text>
                        </TouchableOpacity>
                    </FooterTab>
                </Footer>
            </Container>

        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#e6b800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addTitle: {
        color: '#1c313a',
        fontSize: 34,
        fontWeight: 'bold',
    },
    inputBox: {
        width: 300,
        height: 40,
        backgroundColor: '#455a64',
        borderRadius: 16,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#ffffff',
        marginVertical: 10,
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical:10  ,
    },
    buttonText: {
        fontSize: 16,
        fontWeight:'500',
        color: '#ffffff',
        textAlign: 'center',
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
    addButton: {
        backgroundColor: '#1c313a',
        alignSelf: "center"
    },
    footerStyle: {
        backgroundColor: '#DAA520',
        justifyContent: 'center',
        alignItems: 'center',
    }
});