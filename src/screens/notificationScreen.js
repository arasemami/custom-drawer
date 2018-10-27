import React, { Component } from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Header from '../header';

class NotificationScreen extends Component {

  onButtonPress = () => {
    this.props.navigation.openDrawer();

  }

  static navigationOptions = {
    drawerIcon : (
      <Icon name="notifications-active" size={24} color="#222"  />
    )
  }
  
  render() {
    return (
      <View style={{flex:1}}>
            <Header navigation={this.props.navigation} title="Notification"  />
            
            <View style={styles.container}>
                <Text style={{color:'#888', fontSize:30}}>Notification Screen</Text>
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




export default  NotificationScreen;
