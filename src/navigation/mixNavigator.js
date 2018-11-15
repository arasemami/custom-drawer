
import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import screen1 from '../screens/screen1';
import screen2 from '../screens/screen2';
import screen3 from '../screens/screen3';

import AboutScreen from '../screens/aboutScreen';
import HomeScreen from '../screens/homeScreen';
import NotifScreen from '../screens/notificationScreen';


import DrawerScreen from './DrawerScreen';

const ChallengeExploreNavigator = StackNavigator({
    Main: {
      screen: HomeScreen,
    },
    Notification: {
      screen: NotifScreen,
      // path: 'join-challenge/:id'
    },
    About: {
      screen: AboutScreen,
    }
  })



  const NotificationNavigator = StackNavigator({
    Screen1: {
      screen: screen1,
    },
    Screen2: {
      screen: screen2, 
    },
    About: {
      screen: AboutScreen,
    }
  })






  const ProfileNavigator = StackNavigator({
    Screen1: {
      screen: screen1,
    },
    Screen2: {
      screen: screen2,
      // path: 'join-challenge/:id'
    },
    Screen3: {
      screen: screen3,
    },
    Home: {
      screen: HomeScreen,
    },
    Notif: {
      screen: NotifScreen,
    }
  })









const MainNavigator = TabNavigator(
    {
      Home: {
        screen: ChallengeExploreNavigator,
      },
      Notifications: {
        screen: NotificationNavigator,
      },
      Profile: {
        screen: ProfileNavigator,
      },
    });



    const Top = StackNavigator(
        {
          Global: {
            screen: MainNavigator,
          },
        },
        {
          mode: 'modal',
          headerMode: 'none',
        },
      )




export default Top