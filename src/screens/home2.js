import React,{Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';


class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    static navigationOptions= () => ({
        title:'# Home 2'
    })
    render() { 
        return ( 
            <View style={{flex:1, backgroundColor:'#444'}}>
                <Text> Home   2</Text>
            </View>
         );
    }
}
 
export default Home2;