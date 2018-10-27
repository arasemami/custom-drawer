import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator, DrawerItems}  from 'react-navigation';

// https://www.youtube.com/watch?v=bJmsmrRtMyw

import HomeScreen from './src/screens/homeScreen';
import SettingScreen from './src/screens/SettingScreen';


class App extends Component {
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
  Seetings :{
    screen : SettingScreen
  }
},{
  drawerPosition:'left',
  contentComponent: customDrawerComponent,
  drawerOpenRoute:'DrawerOpen',


})


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#555'
  }
})
 
export default App;