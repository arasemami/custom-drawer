import React, { Component } from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Header from '../header';

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
      <View style={{flex:1}}>
        <Header navigation={this.props.navigation} title="Setting" />

        <View style={styles.container}>
            <Text style={{color:'#888', fontSize:30}}>Setting Screen</Text>
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
        backgroundColor:'#333'

    }
})