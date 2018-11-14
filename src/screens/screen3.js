import React , { Component } from 'react';
import {View , Text, Button } from 'react-native';


class Screen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={{flex:1}}>
                <Text>Screen 3</Text>

                <Button 
                title="Go to Screen 1"
                onPress={() => this.props.navigation.navigate('screen1')}
                />


            </View>
         );
    }
}
 
export default Screen3;