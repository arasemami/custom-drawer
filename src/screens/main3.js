import React,{Component} from 'react';
import {View, Text ,StyleSheet, Button} from 'react-native';


class Main3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    static navigationOptions= () => ({
        title:'# Main 3'
    })
    render() { 
        return ( 
            <View style={{flex:1, backgroundColor:'#ddd'}}>
                <Text> Main   3</Text>
                
            </View>
         );
    }
}
 
export default Main3;