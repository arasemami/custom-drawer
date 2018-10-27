import React, { Component } from 'react';
import { View, Text,Button, Image } from 'react-native';

class HomeScreen extends Component {

  onButtonPress = () => {
    this.props.navigation.openDrawer();

  }

  static navigationOption = {
    drawerIcon : (
        <Image  source={require('../assets/img/apple.png')} style={{width:24, height:24}} />
    )
  }
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
