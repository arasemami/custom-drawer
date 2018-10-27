import React , {Componet} from 'react';
import { View , Text, StyleSheet  } from 'react-native';


class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Text>Its Side Menu</Text>
            </View>
         );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})
 
export default SideMenu;