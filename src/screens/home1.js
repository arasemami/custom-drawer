import React,{Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';


class Home1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    static navigationOptions= () => ({
        title:'# Home 1'
    })
    render() { 
        return ( 
            <View style={{flex:1, backgroundColor:'#333'}}>
                <Text> Home   1</Text>
            </View>
         );
    }
}
 
export default Home1;