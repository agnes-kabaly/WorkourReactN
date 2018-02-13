import React, { Component } from "react";
import EditProfile from "./EditProfile";
import ShowCalendar from "../calendar/ShowCalendar";
import ChooseDay from "../chooseDay/ChooseDay";
import { TabNavigator } from "react-navigation";
import { Footer, FooterTab, Text, Button } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from "./ProfileScreen";
import { StyleSheet } from "react-native";

export default ProfileTabNavigator = TabNavigator(
    {
        ProfileScreen: { screen: ProfileScreen},
        EditProfile: { screen: EditProfile },
        ShowCalendar: { screen: ShowCalendar },
        ChooseDay: { screen: ChooseDay },
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button style={styles.buttonStyle}
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("EditProfile")}
                        >
                            <Icon name="pencil" size={19} />
                            <Text style={styles.textStyle}>Edit Profile</Text>
                        </Button>
                        <Button style={styles.buttonStyle}
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("ShowCalendar")}
                        >
                            <Icon name="calendar-check-o" size={19} />
                            <Text style={styles.textStyle}>Calendar</Text>
                        </Button>
                        <Button style={styles.buttonStyle}
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("ChooseDay")}
                        >
                            <Icon name="calendar" size={19} />
                            <Text style={styles.textStyle}>Choose Day</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        }
    }
);

const styles = StyleSheet.create({
    textStyle: {
        color: "#000000",
        fontWeight: 'bold'
    },
    buttonStyle: {
        backgroundColor: '#DAA520'
    }

});