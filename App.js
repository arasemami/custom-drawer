import React, { Component } from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import { DrawerNavigator, DrawerItems}  from 'react-navigation';

import HomeScreen from './src/screens/homeScreen';
import SettingScreen from './src/screens/SettingScreen';
import NotificationScreen from './src/screens/notificationScreen';
import AboutScreen from './src/screens/aboutScreen';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }



  render() { 
    return ( 

          <MyApp />
      
     );
  }
}

const customDrawerComponent = (props)  => (

  <View style={styles.container}>
   <DrawerItems {...props} />

  </View>
)


const MyApp = DrawerNavigator({
  Home:{
    screen : HomeScreen
  },
  Settings:{
    screen : SettingScreen
  },
  Notification:{
    screen : NotificationScreen
  },
  About:{
    screen : AboutScreen
  }
},{
  drawerPosition:'right',    // right
  contentComponent: customDrawerComponent,
  drawerOpenRoute: "DrawerOpen",
  drawerCloseRoute: "DrawerClose",
  drawerToggleRoute: "DrawerToggle",
  contentOptions: {
    activeTintColor: 'rgb(234, 94, 32)'

}


})


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#fcfcfc'
  }
})
 
export default App;