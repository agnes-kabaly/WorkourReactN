import React, {Component} from "react";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../sideBar/SideBar";
import { DrawerNavigator } from "react-navigation";
import ProfileTabNavigator from "../profile/index";
import AddDays from "../workouts/AddDays";
import ChooseDay from "../chooseDay/index";
import ShowCalendar from "../calendar/ShowCalendar";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Profile: { screen: ProfileTabNavigator },
        AddDays: { screen: AddDays },
        ChooseDay: { screen: ChooseDay },
        ShowCalendar: { screen: ShowCalendar }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default HomeScreenRouter;