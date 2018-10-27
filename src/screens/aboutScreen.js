import React, { Component } from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Header from '../header';

class AboutScreen extends Component {

  onButtonPress = () => {
    this.props.navigation.openDrawer();

  }

  static navigationOptions = {
    drawerIcon : (
      <Icon name="information" size={24} color="#222"  />
    )
  }
  
  render() {
    return (
      <View style={{flex:1}}>
          <Header navigation={this.props.navigation} title="About us"  />
          <View style={styles.container}>
            <Text style={{color:'#888', fontSize:30}}>About Screen</Text>
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




export default  AboutScreen;
