import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, ScrollView, FlatList, Image, Icon } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FriendList from './common/FriendList'
import { getAllUsers, auth, db } from '../config/firebase'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Friends extends Component {
    state = {
        user: auth.currentUser,
        search: '',
        stories: [],
        data: [
            {
                name: 'Micheal Jackson',
                uri: 'https://www.eharmony.com/blog/wp-content/uploads/2010/04/eHarmony-Blog-profile-picture.jpg'
            },
            {
                name: 'Johnson Rock',
                uri: 'https://images.squarespace-cdn.com/content/v1/54f74f23e4b0952b4e0011c0/1523925790909-QY5DRS81KGTEQA44XESF/ke17ZwdGBToddI8pDm48kMtiXMEMZ8ID8MVhA-T_Qc9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIfy9uRsqnknGrsPwiW8VdnsJxMq6FvgYbxptNsO-6IOIKMshLAGzx4R3EDFOm1kBS/chris+hanna+bb.jpg'
            },
            {
                name: 'Chris Jack',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRME58hUtgB1AF_9fujUB70OSFgaCHfpQawsicsQJkCpyA2Nyhl'
            },
            {
                name: 'Amanda Martin',
                uri: 'https://s3.amazonaws.com/aspph-wp-production/app/uploads/2016/09/Headshot_1_Jess-sexton-e1473780388822.jpg'
            },
            {
                name: 'Chris Moris',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBsWbkWwUIKIVQyvPvxOrycIMk5GjVXx3u5IacKDcm3Otf2OJ'
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
            },
            {
                name: 'Christy Thomas',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOHBYH5MlqZjhBsNIZTm66VE7nCfsyuat9wUEi8wIgzlbVJ2E'
            }
        ]
    };


    getAllStories = async () => {

        db.collection('stories').onSnapshot(snapshot => {
            const stories = [];
            snapshot.forEach(doc => {
                // console.log(doc.data())
                stories.push({ data: doc.data(), id: doc.id })
            })
            this.setState({ stories: stories })
        })

    }
    async componentDidMount() {
        try {
            const res = await getAllUsers()
            console.log('res==>', res)
            this.setState({ data: res })
            await this.getAllStories()
        }
        catch (e) {
            console.log(e)
        }
    }

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search, stories, user } = this.state;
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

                <ScrollView

                    horizontal={true}
                    style={styles.contentContainer}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={styles.scrolView}
                >

                    {/* <View style={styles.imgScrolView}>

                        <IconButton
                            icon="add"
                            color={Colors.black}
                            size={30}
                            onPress={() => console.log('Pressed')}
                        />
                    </View> */}
                    <TouchableOpacity style={{ margin: 7, alignItems: 'center' }} onPress={() => this.props.navigation.navigate('AddStory', { user: user })}>
                        <EvilIcons name='plus' size={70} />
                        <Text  >Your story</Text>
                    </TouchableOpacity>

                    {!!stories &&
                        stories.map((item, key) => {
                            var str = item.data.displayName;
                            var res = str.slice(0, str.indexOf(' '));
                            var displayName = res;
                            return (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Story', { item: item })} key={key} style={{ margin: 7, textAlign: 'center' }}>
                                    <Image source={{ uri: item.data.coverUri }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                                    <Text >{displayName}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }

                    {/* <View style={{ flex: 1, flexDirection: 'column', }}>

                        <Image
                            source={{ uri: 'https://www.eharmony.com/blog/wp-content/uploads/2010/04/eHarmony-Blog-profile-picture.jpg' }}
                            style={styles.imgScroll}
                        />
                        <Text>
                            shary
                        </Text>
                    </View>

                    <Image
                        source={{ uri: 'https://images.squarespace-cdn.com/content/v1/54f74f23e4b0952b4e0011c0/1523925790909-QY5DRS81KGTEQA44XESF/ke17ZwdGBToddI8pDm48kMtiXMEMZ8ID8MVhA-T_Qc9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIfy9uRsqnknGrsPwiW8VdnsJxMq6FvgYbxptNsO-6IOIKMshLAGzx4R3EDFOm1kBS/chris+hanna+bb.jpg' }}
                        style={styles.imgScroll}
                    />
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRME58hUtgB1AF_9fujUB70OSFgaCHfpQawsicsQJkCpyA2Nyhl' }}
                        style={styles.imgScroll}
                    />
                    <Image
                        source={{ uri: 'https://s3.amazonaws.com/aspph-wp-production/app/uploads/2016/09/Headshot_1_Jess-sexton-e1473780388822.jpg' }}
                        style={styles.imgScroll}
                    />
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBsWbkWwUIKIVQyvPvxOrycIMk5GjVXx3u5IacKDcm3Otf2OJ' }}
                        style={styles.imgScroll}
                    /> */}

                </ScrollView>


                <FriendList data={this.state.data} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {

    },
    inputDiv: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,


    },
    scrolView: {
        // marginTop: 10,
        // height: 80,
        paddingVertical: 10

        // flex:1



    },
    imgDiv: {

    },
    imgView: {
        flex: 1,


    },
    imgScroll: {
        height: 55,
        width: 55,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'lightblue',
        margin: 10,


    },
    imgs: {
        height: 55,
        width: 55,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10,
        marginLeft: 20,


    },
    nameView: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 10,

    },
    listView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',



    },
    SearchBar: {
        backgroundColor: '#f2f2f2',
        borderRadius: 30,
        alignSelf: 'center',
        width: 320,
        height: 43,
        marginTop: 14,



    },

    searchView: {
        flex: 1,



    },
    flatView: {
        marginTop: 10,
    },
    imgScrolView: {
        height: 55,
        width: 55,
        borderRadius: 100,
        backgroundColor: '#edebe6',
        margin: 10,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'space-around'


    },
});
