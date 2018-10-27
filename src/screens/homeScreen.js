import React, { Component } from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../header';

class HomeScreen extends Component {

  onButtonPress = () => {
    this.props.navigation.openDrawer();

  }

  static navigationOptions = {
    drawerIcon : (
      <Icon name="home" size={24} color="#222"  />
    ),
    title: 'Home',
    
  }
  
  render() {
    return (
      <View style={{flex:1}}>
          <Header navigation={this.props.navigation} title="Home"  />

          <View style={styles.container}>
            <Text style={{color:'#888', fontSize:30}}>Home Screen</Text>
          </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#34495E'

  }
})




export default  HomeScreen;
