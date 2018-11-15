import React from 'react'
import { StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator, createDrawerNavigator } from 'react-navigation';

import Icons from 'react-native-vector-icons/dist/FontAwesome'
import IconHeader from 'react-native-vector-icons/dist/Feather';

import Home1 from '../screens/home1';
import Home2 from '../screens/home2';
import Home3 from '../screens/home3';

import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';

import Main1 from '../screens/main1';
import Main2 from '../screens/main2';
import Main3 from '../screens/main3';


const defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      borderBottomWidth: 0,
      zIndex: 100,
      elevation: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    headerTintColor: '#fff',
  }


const HomeComponents = StackNavigator({
    Home1:{
        screen: Home1,
        navigationOptions: { ...defaultNavigationOptions }
    },
    Home2:{
        screen: Home2
    },
    Home3:{
        screen: Home3
    },
});


const MainComponents = StackNavigator({
    Main1:{
        screen: Main1,
        navigationOptions: ({ navigation }) => ({
            title: 'Schedules',  // Title to appear in status bar
            headerLeft: <IconHeader name="menu" size={25} onPress={ () => navigation.openDrawer() } />
          })
    },
    Main2:{
        screen: Main2
    },
    Main3:{
        screen: Main3
    },
} );



const Top = TabNavigator({
    Main:{
        screen: MainComponents
    },
    Home:{
        screen:HomeComponents
    }
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Home') {
        iconName = 'mountain'
      } else if (routeName === 'Notifications') {
        iconName = 'bell'
      } else if (routeName === 'Profile') {
        iconName = 'profile'
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icons name='home' size={25} color={tintColor} />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'black',
    showLabel: false,
  },
  swipeEnabled: true,
  animationEnabled: true,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
});



export default DrawerStack = createDrawerNavigator({
    Global:{
        screen: Top
    },
    Mains:{
        screen: MainComponents
    }
},{
    drawerPosition:'left',    // right
        drawerOpenRoute: "DrawerOpen",
        drawerCloseRoute: "DrawerClose",
        drawerToggleRoute: "DrawerToggle",
        contentOptions: {
            activeTintColor: 'rgb(234, 94, 32)'  } 
    

 
})



const StackTabs = StackNavigator({
MainScreeen:{
    screen: Top ,
    navigationOptions:{
        title:'wwww'
    }
},
DrawerMenu:{
    screen: DrawerStack
}
},
{
  mode: 'modal',
  headerMode: 'none',
});