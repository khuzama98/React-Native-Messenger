import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Image, Icon } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FriendList from './common/FriendList'


export default class Friends extends Component {
    state = {
        search: '',
        data:[
            {
                name:'Micheal Jackson',
                uri:'https://www.eharmony.com/blog/wp-content/uploads/2010/04/eHarmony-Blog-profile-picture.jpg'
            },
            {
                name:'Johnson Rock',
                uri:'https://images.squarespace-cdn.com/content/v1/54f74f23e4b0952b4e0011c0/1523925790909-QY5DRS81KGTEQA44XESF/ke17ZwdGBToddI8pDm48kMtiXMEMZ8ID8MVhA-T_Qc9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIfy9uRsqnknGrsPwiW8VdnsJxMq6FvgYbxptNsO-6IOIKMshLAGzx4R3EDFOm1kBS/chris+hanna+bb.jpg'
            },
            {
                name:'Chris Jack',
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRME58hUtgB1AF_9fujUB70OSFgaCHfpQawsicsQJkCpyA2Nyhl'
            },
            {
                name:'Amanda Martin',
                uri:'https://s3.amazonaws.com/aspph-wp-production/app/uploads/2016/09/Headshot_1_Jess-sexton-e1473780388822.jpg'
            },
            {
                name:'Chris Moris',
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBsWbkWwUIKIVQyvPvxOrycIMk5GjVXx3u5IacKDcm3Otf2OJ'
            },
            {
                name:'Christy Thomas',
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            }
        ]
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            <View>
                <Text style={{ paddingHorizontal: 20, paddingTop: 40, fontSize: 30 }}>
                    Chats
                </Text>
                <SearchBar
                    placeholder="Search Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme
                    containerStyle={{ backgroundColor: 'white' }}
                />
                <FriendList data={this.state.data} />
            </View>
        )
    }
}
