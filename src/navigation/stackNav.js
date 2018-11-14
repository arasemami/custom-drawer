import { StackNavigator } from 'react-navigation';

import screen1 from '../screens/screen1';
import screen2 from '../screens/screen2';
import screen3 from '../screens/screen3';


export default StackHome = StackNavigator({

    screen1 :{
        screen: screen1,
        navigationOptions: () => ({
            title:'#Screen1'
        })
    },
    screen2 :{
        screen: screen2,
        navigationOptions: () => ({
            title:'#Screen2'
        })
    },
    screen3 :{
        screen: screen3,
        navigationOptions: () => ({
            title:'#Screen3'
        })
    } 
},{
    initialRouteName:'screen3'
})

