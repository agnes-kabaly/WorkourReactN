import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    Text,
    Image,
    AsyncStorage,
    FlatList,
    TouchableHighlight
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
    Footer,
    FooterTab
} from "native-base";
import Icon from 'react-native-vector-icons/Entypo';
import AddModal from "./AddModal";
import flatListData from '../data/flatListData';
import FlatListItem from './FlatListItem';

export default class AddDays extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dayName: "",
            errors: "",
            deletedRowKey: null,
            newExercises: [],
        };
        this._onPressAdd = this._onPressAdd.bind(this);
    }

    _onPressAdd() {
        this.refs.addModal.showAddModal();
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

    renderSeparator = () => {
        return(
            <View
                style={styles.separatorStyle}
            />
        );
    };

    refreshFlatList = (deletedKey) => {
        console.log(flatListData.valueOf().length);
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
    };

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
                        <TouchableOpacity onPress={this._onPressAdd}
                                          underlayColor="rgba(0, 0, 0, 0)"
                                          activeOpacity={(this.props.activeOpacity) ? this.props.activeOpacity : 0.5}>
                            <Image
                                style={{width: 60, height: 60}}
                                source={require('../assets/plus3.png')}
                            >
                            </Image>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>

                <AddModal ref={'addModal'}>

                </AddModal>

                <View style={styles.flatContainer}>
                    <FlatList
                        data={flatListData}
                        ItemSeparatorComponent={this.renderSeparator}
                        renderItem={({item, index}) => {
                            //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                            return(
                                <FlatListItem item={item} index={index} parentFlatList={this}>

                                </FlatListItem>);
                        }}
                    >
                    </FlatList>
                </View>

                <Footer>
                    <FooterTab style={styles.footerStyle}>
                        <TouchableOpacity style={styles.button} onPress={this.onSavePressed.bind(this)}>
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
        height: 40,
        width: 300,
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
    footerStyle: {
        backgroundColor: '#DAA520',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatContainer: {
        flex: 2,
        paddingHorizontal: 15,
        backgroundColor: '#e6b800',
    },
    separatorStyle: {
        height: 7,
        width: "86%",
        backgroundColor: '#e6b800',
        marginLeft: "14%",
    },
});