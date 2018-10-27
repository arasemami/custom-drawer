import React, { Component } from 'react';
import { View, Text,Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class HomeScreen extends Component {

  onButtonPress = () => {
    this.props.navigation.openDrawer();

  }

  static navigationOptions = {
    drawerIcon : (
      <Icon name="home" size={24} color="#222"  />
    )
  },
  
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button title="Tab Navigation" onPress = { this.onButtonPress } />
      </View>
    );
  }
}

export default  HomeScreen;
