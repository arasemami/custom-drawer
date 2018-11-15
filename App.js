// import React, { Component } from 'react';
// import {View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';
// import { DrawerNavigator, DrawerItems}  from 'react-navigation';

// import HomeScreen from './src/screens/homeScreen';
// import SettingScreen from './src/screens/SettingScreen';
// import NotificationScreen from './src/screens/notificationScreen';
// import AboutScreen from './src/screens/aboutScreen';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }

//   render() { 
//     return ( 

//           <MyApp />
      
//      );
//   }
// }

// const customDrawerComponent = (props)  => (

//   <View style={styles.container}>
//       <ImageBackground source={require('./src/assets/img/bg.jpg')} style={styles.imageContainer}>
//           <View style={styles.AvatarContainer}>
//             <Image source={require('./src/assets/img/avatar.png')}    style={styles.avatarSize} />
//           </View>
//       </ImageBackground>
//       <DrawerItems {...props} />

//   </View>
// )


// const MyApp = DrawerNavigator({
//   Home:{
//     screen : HomeScreen
//   },
//   Settings:{
//     screen : SettingScreen
//   },
//   Notification:{
//     screen : NotificationScreen
//   },
//   About:{
//     screen : AboutScreen
//   }
// },{
//   drawerPosition:'right',    // right
//   contentComponent: customDrawerComponent,
//   drawerOpenRoute: "DrawerOpen",
//   drawerCloseRoute: "DrawerClose",
//   drawerToggleRoute: "DrawerToggle",
//   contentOptions: {
//     activeTintColor: 'rgb(234, 94, 32)'

// }


// })


// const styles = StyleSheet.create({

//   container:{
//     flex:1,
//     backgroundColor:'#fcfcfc'
//   },
//   imageContainer:{
//     backgroundColor:'#444',
//     height: 150,
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   avatarSize:{
    
//     height:80,
//     width: 80,
   
//   },
//   AvatarContainer:{
//     height:110,
//     width: 110,
//     backgroundColor:'#fff',
//     borderRadius:100,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding:30,
//     borderWidth:3,
//     borderColor:'#333'

//   }
// })
 
// export default App;


import React, { Component} from 'react';
import StackHome from './src/navigation/stackNav';
import Drawer from './src/navigation/drawerNav';
import Tabs from './src/navigation/tabNav';
import Navi from './src/navigation/mixNavigator';
import AppNav from './src/navigation/App';


 export default class App extends Component {
   render (){

    return(
      <AppNav />
    )
   }
 }