import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator}  from 'react-navigation';



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
      <Text>Item One</Text>
      <Text>Item One</Text>
      <Text>Item One</Text>
      <Text>Item One</Text>

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
  drawerPosition:'right',
  contentComponent: customDrawerComponent,
  drawerOpenRoute:'DrawerOpen',


})


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#333'
  }
})
 
export default App;