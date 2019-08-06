import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Recieved extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flex: 0.7 }} >
                <Text style={{borderRadius:10 ,backgroundColor: '#4267b2',marginHorizontal:10, marginVertical:20,color: 'white', padding: 20 }} > {this.props.message} </Text>
            </View>
        );
    }
}

export default Recieved;
