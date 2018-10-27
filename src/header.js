import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerNavigator, DrawerItems}  from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Feather';

// https://www.youtube.com/watch?v=bJmsmrRtMyw

// import HomeScreen from './screens/homeScreen';
// import SettingScreen from './screens/SettingScreen';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  onButtonPress = () => {
    this.props.navigation.openDrawer('DrawerOpen');

  }

  render() { 
 
    return ( 

     <View style={styles.container}>
        {/* <Button title="Menu" onPress = { this.onButtonPress } style={{height:20, width: 10}} /> */}

        <View style={styles.titleContainer}>
            <Text style={{color:'#fff', fontSize:16}}>{this.props.title}</Text>
        </View>

        <TouchableOpacity onPress = { this.onButtonPress }  style={styles.menuContainer}>
            <Icon name="menu" size={24} color="#fff"  />
        </TouchableOpacity>
     </View>
         

      
     );
  }
}
 

const styles = StyleSheet.create({

  container:{
    height:50,
    backgroundColor:'#E74C3C',
    flexDirection: 'row',

  },
  menuContainer:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',


  },
  titleContainer:{
    paddingLeft:20,
    alignItems:'flex-start',
    justifyContent:'center',
    flex:5
  }
})
 
export default Header;