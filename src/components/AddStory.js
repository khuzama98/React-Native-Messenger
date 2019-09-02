import React from 'react';
import { Text, View, TouchableOpacity, Image, Alert, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
// import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { ImagePicker, Permissions, Constants } from 'expo';
import { auth, addStory, storage, db } from '../config/firebase'


import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';




export default class AddStory extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        image: null,
        user: auth.currentUser,
        isAddingStory: false,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
        this.getPermissionAsync();
    }


    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    _snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.setState({ image: photo.uri })
        }
    };

    _addStory = async () => {
        const { image, user } = this.state;
        this.setState({ isAddingStory: true })
        console.log(image)
        let a = await addStory(user, image)
            .then(() => {
                console.log('Done!')
                let storyName = image.split(/[\\/]/g).pop().split('.')[0];
                storage.ref('stories').child(storyName).getDownloadURL().then(uri => {
                    console.log('story uri', uri)
                    db.collection('stories').add({ uri: uri, coverUri: user.photoURL, uid: user.uid, displayName: user.displayName, createdAt: Date.now() }).then(snap => {
                        this.setState({ isAddingStory: true })
                        Alert.alert('Story seccessfully added!')
                        this.props.navigation.goBack()
                    }).catch(err => Alert.alert(err))
                })
            }).catch(err => {
                Alert.alert(err);
            })

    }


    render() {
        const { hasCameraPermission, image, isAddingStory } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                image
                    ?
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: "space-between", backgroundColor: '#000', }}>
                        <View style={{ margin: 12, alignSelf: 'flex-start' }}>
                            <TouchableOpacity onPress={() => this.setState({ image: null })}>
                                <Ionicons name='ios-arrow-back' size={40} color='white' />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ImageBackground source={{ uri: image }} style={{ width: '100%', height: 300 }}>
                                <View style={styles.container}>
                                    {isAddingStory && <ActivityIndicator size='large' color="#fff" />}
                                </View>
                            </ImageBackground>
                            {/* <Image source={{ uri: image }} style={{ width: '100%', height: 300 }} /> */}
                        </View>
                        <View style={{ margin: 12, alignSelf: 'flex-end' }}>
                            <TouchableOpacity onPress={this._addStory}>
                                <Ionicons name='ios-arrow-dropright-circle' size={70} color='white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <Camera style={{ flex: 1 }} ref={ref => { this.camera = ref }} type={this.state.type}>

                            <View style={{ flex: 1, flexDirection: 'column', margin: 20, justifyContent: 'space-between', }}>

                                <View style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                                        <Entypo name='cross' color='white' size={35} />
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity>
                                        <Ionicons name='ios-moon' color='white' size={35} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <MaterialIcons name='hdr-on' color='white' size={35} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionicons name='md-flash-off' color='white' size={35} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionicons name='ios-timer' color='white' size={35} />
                                    </TouchableOpacity> */}
                                </View>

                                <View style={{ backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', }}>

                                    <TouchableOpacity onPress={this._pickImage}>
                                        <Ionicons name='ios-photos' color='white' size={35} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={this._snap}>
                                        <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/foodies-battle.appspot.com/o/profilePics%2Ficons8-camera.png?alt=media&token=ebb0a533-ed77-48db-ba98-c09b89087bd0' }} />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                type:
                                                    this.state.type === Camera.Constants.Type.back
                                                        ? Camera.Constants.Type.front
                                                        : Camera.Constants.Type.back,
                                            });
                                        }}>
                                        <Ionicons name='ios-reverse-camera' size={40} color='white' />
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </Camera >
                    </View >
            );
        }
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})