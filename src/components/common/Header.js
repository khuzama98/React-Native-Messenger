import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign'

class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Header
                placement="left"
                leftComponent={
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                        <Icon name="arrowleft" size={25} color='#fff' />
                    </TouchableOpacity>
                }
                centerComponent={
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Avatar
                            rounded
                            source={{
                                uri: this.props.data.photoURL
                            }}
                            containerStyle={{ marginTop: 5 }}
                        />
                        <Text style={{ color: '#fff', fontSize: 18, padding: 8 }} >{this.props.data.displayName}</Text>
                    </View>
                }
                // rightComponent={{ icon: 'home', color: '#fff' }}{ icon: 'arrow-back', color: '#fff' }
                containerStyle={{ backgroundColor: '#4267b2' }}
            />
        );
    }
}

export default withNavigation(Headers);
