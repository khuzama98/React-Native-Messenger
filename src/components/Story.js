import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity, TextInput, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';



export default class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: this.props.navigation.getParam('item')
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.goBack()
        }
            , 11000);
    }

    render() {
        const { story } = this.state;
        return (

            <ImageBackground source={{ uri: story.data.uri }} style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', padding: '5.5%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>{story.data.displayName}</Text>
                            <Text>{moment(story.data.createdAt).fromNow()}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                                <Entypo name='cross' color='#fff' size={35} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View></View>

                    <View style={{ alignSelf: 'flex-start' }}><ActivityIndicator size='large' color='#fff' /></View>
                </View>
            </ImageBackground>




        );
    }
}