import React,{Component} from 'react';
import {View, Text ,StyleSheet, Button} from 'react-native';
import IconHeader from 'react-native-vector-icons/dist/Feather';


class Main1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    static navigationOptions= () => ({
        title:'# Main 1',
        drawerIcon: ({ tintColor }) => (
            <IconHeader name="menu" size={24} color="#333"  />
          ),
       
    })
    render() { 
        const { navigate } = this.props.navigation;

        return ( 
            <View style={{flex:1, backgroundColor:'#999'}}>
                <Text> Main   1</Text>
                <Button title="Click 2" onPress={() => navigate('Main2')} />
               
            </View>
         );
    }
}
 
export default Main1;