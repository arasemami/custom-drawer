
import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import screen1 from '../screens/screen1';
import screen2 from '../screens/screen2';
import screen3 from '../screens/screen3';


export default Tabs = TabNavigator({

    screen1 :{
        screen: screen1,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) =>{
                    return (
                        <Icon name="home" size={24} color={tintColor}  />
                    
                    )
            }
        })
    },
    screen2 :{
        screen: screen2,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) =>{
                    return (
                        <Icon name="search" size={24} color={tintColor}  />
                    
                    )
            },
            title:'Search'
        })
    },
    screen3 :{
        screen: screen3,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) =>{
                    return (
                        <Icon name="music" size={24} color={tintColor}  />
                    
                    )
            }
        })
    } 

},{
    tabBarOptions:{
        showIcon:true  // this item for Android must be true ios is defualt true
    }
}) 