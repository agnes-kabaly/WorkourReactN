import React, { Component } from "react";
import EditProfile from "./EditProfile";
import ShowCalendar from "../calendar/ShowCalendar";
import ChooseDay from "../workouts/ChooseDay";
import { TabNavigator } from "react-navigation";
import { Footer, FooterTab, Text, Button } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from "./ProfileScreen";

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
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("EditProfile")}
                        >
                            <Icon name="pencil" />
                            <Text>Edit Profile</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("ShowCalendar")}
                        >
                            <Icon name="calendar-check-o" />
                            <Text>Show Calendar</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("ChooseDay")}
                        >
                            <Icon name="calendar"/>
                            <Text>Choose Day</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        }
    }
);