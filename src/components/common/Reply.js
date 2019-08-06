import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flex: 0.7,justifyContent:'flex-end'}} >
                <Text style={{ borderRadius: 10 , backgroundColor: 'lightgrey', padding: 20, marginHorizontal: 10, marginVertical: 20 }} > {this.props.message} </Text>
            </View>
        );
    }
}

export default Reply;
