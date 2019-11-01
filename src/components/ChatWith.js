import React, { Component } from 'react'
import * as firebase from 'firebase'
import 'firebase/firestore';
import { View, KeyboardAvoidingView, FlatList, TouchableOpacity, Text } from 'react-native';
import Header from './common/Header'
import Reply from './common/Reply'
import Recieve from './common/Recieved'
import { Input, Button as ElementButton } from 'react-native-elements';
import { sendMessageToDb } from '../config/firebase'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const db = firebase.firestore();


export default class ChatWith extends Component {

    state = {
        data: {},
        roomId: '',
        messages: [],
        text: ''
    }

    componentDidMount() {
        this.setState({ data: this.props.navigation.state.params.data, roomId: this.props.navigation.state.params.roomId }, () => this.getAllMessages())

    }

    getAllMessages = async () => {
        const roomId = this.state.roomId

        db.collection('chatrooms').doc(roomId).collection('messages')
            .orderBy('timestamp')
            .onSnapshot(snap => {
                const messages = [];

                snap.forEach(item => {
                    messages.push({ data: item.data(), id: snap.id })
                })

                this.setState({ messages })
            })
    }

    sendMessages = () => {
        const roomId = this.state.roomId;
        console.log('roomid ==>', roomId)
        console.log('messag3==>', this.state.text)
        sendMessageToDb(roomId, this.state.text)
        this.setState({ text: '' })
    }

    handleChange = e => {
        console.log(e)
        const value = e;
        this.setState({ text: value })
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => {
        console.log('item ==>', item)
        if (item.data.userId === firebase.auth().currentUser.uid) {
            return <Reply message={item.data.message} />
        }
        else {
            return <Recieve message={item.data.message} />
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-between' }} >
                <Header data={this.state.data} />
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding"  >
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.messages}
                        renderItem={this.renderItem}
                        contentContainerStyle={{}}
                    />
                    <View style={{ flexDirection: 'row', paddingVertical: 5 }} >
                        {/* <TouchableOpacity style={{ marginTop: 'auto', marginBottom: 'auto', margin: 4 }}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>::</Text>
                        </TouchableOpacity> */}
                        <View style={{ flexDirection: 'row', paddingLeft: 5 }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cam')} style={{ marginTop: 'auto', marginBottom: 'auto', margin: 4 }}>
                                <FontAwesome name='camera' size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 'auto', marginBottom: 'auto', margin: 4 }}>
                                <Ionicons name='md-images' size={27} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 'auto', marginBottom: 'auto', margin: 4 }}>
                                <FontAwesome name='file-audio-o' size={20} />
                            </TouchableOpacity>
                        </View>
                        <Input containerStyle={{ width: '60%' }} value={this.state.text} onChangeText={(e) => this.handleChange(e)} placeholder='Type Message' />
                        <TouchableOpacity onPress={() => this.sendMessages()} style={{ marginTop: 'auto', marginBottom: 'auto', margin: 4 }} >
                            <Ionicons name='md-send' size={27} />
                        </TouchableOpacity>
                        {/* <ElementButton title='SEND' buttonStyle={{ backgroundColor: '#4267b2' }} onPress={() => this.sendMessages()} /> */}
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}