import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

export default class SettingScreen extends Component {

  onButtonPress = () => {
    this.props.navigation.openDrawer();

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