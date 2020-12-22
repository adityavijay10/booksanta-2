import React from 'react';
import {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";
import Settings from "../screens/Settings";
import MyDonations from '../screens/MyDonations'
import NotificationScreen from '../screens/NotificationsScreen';


export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings:{
        screen:Settings
    },
    MyDonations:{
        screen: MyDonations
    },
    Notification:{
        screen: NotificationScreen
    },
    
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:"Home"
}
)