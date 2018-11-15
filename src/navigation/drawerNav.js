
import React,{ Component} from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import  {View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

 
import screen1 from '../screens/screen1';
import screen2 from '../screens/screen2';
import screen3 from '../screens/screen3';




 const StackScreen1 = StackNavigator({

    screen1 :{
        screen: screen1,
        navigationOptions: () => ({
            title:'#Screen1'
        })
    }
})

const StackScreen2 = StackNavigator({

    screen2 :{
        screen: screen2,
        navigationOptions: () => ({
            title:'#Screen2'
        })
    }
})

const StackScreen3 = StackNavigator({

    screen3 :{
        screen: screen3,
        navigationOptions: () => ({
            title:'#Screen3'
        })
    }
})

const customDrawerComponent = (props)  => (

  <View style={styles.container}>
      <ImageBackground source={require('./../assets/img/bg.jpg')} style={styles.imageContainer}>
          <View style={styles.AvatarContainer}>
            <Image source={require('./../assets/img/avatar.png')}    style={styles.avatarSize} />
          </View>
      </ImageBackground>
      

  </View>
)

export default Drawer = DrawerNavigator({

    screen1 :{
        screen: StackScreen1 
    },
    screen2 :{
        screen: StackScreen2 
    },
    screen3 :{
        screen: StackScreen3 
    } 

},{
    drawerPosition:'left',    // right
    contentComponent: customDrawerComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
        activeTintColor: 'rgb(234, 94, 32)'  }

 
}) 









const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#fcfcfc'
  },
  imageContainer:{
    backgroundColor:'#444',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',

  },
  avatarSize:{
    
    height:80,
    width: 80,
   
  },
  AvatarContainer:{
    height:110,
    width: 110,
    backgroundColor:'#fff',
    borderRadius:100,
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
    borderWidth:3,
    borderColor:'#333'

  }
})