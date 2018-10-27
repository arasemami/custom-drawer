import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

export default class SettingScreen extends Component {

  onButtonPress = () => {
    this.props.navigation.openDrawer();

  }

  static navigationOptions = {
    drawerIcon : (
      <Icon name="setting" size={24} color="#222"  />
    )
  }

  render() {
    return (
      <View>
        <Text>Setting Screen</Text>
        <Button title="Menu" onPress = { this.onButtonPress } />
      </View>
    );
  }
}