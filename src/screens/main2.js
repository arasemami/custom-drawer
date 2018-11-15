import React,{Component} from 'react';
import {View, Text ,StyleSheet, Button} from 'react-native';


class Main2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    static navigationOptions= () => ({
        title:'# Main 2'
    })
    render() { 
        const { navigate } = this.props.navigation;
        return ( 
            <View style={{flex:1, backgroundColor:'#eee'}}>
                <Text> Main   2</Text>
                <Button title="Click 3" onPress={() => navigate('Home1')} />
            </View>
         );
    }
}
 
export default Main2;