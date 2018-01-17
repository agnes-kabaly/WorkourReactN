import React, {Component} from "react";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../sideBar/SideBar";
import { DrawerNavigator } from "react-navigation";
import ProfileScreen from "../profile/ProfileScreen";
import AddDays from "../workouts/AddDays";
import ChooseDays from "../workouts/ChooseDays";
import ShowCalendar from "../calendar/ShowCalendar";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Profile: { screen: ProfileScreen },
        AddDays: { screen: AddDays },
        ChooseDay: { screen: ChooseDays },
        ShowCalendar: { screen: ShowCalendar }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default HomeScreenRouter;