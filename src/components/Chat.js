import React, { Component } from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
// import { IconButton, Colors } from 'react-native-paper';

export default class Chat extends Component {
    render() {
        return (
    <View  style={styles.iconsView}>

            </View>      
//        <IconButton
//             icon="photo-camera"
//             color={Colors.red500}
//             size={20}
//             onPress={() => console.log('Pressed')}
//             />

//           <IconButton
//             icon="image"
//             color={Colors.blue500}
//             size={30}
//             onPress={() => console.log('Pressed')}
//             />

// <IconButton
//             icon="mic"
//             color={Colors.blue500}
//             size={30}
//             onPress={() => console.log('Pressed')}
//             />



// <IconButton
//             icon="insert-emoticon"
//             color={Colors.blue500}
//             size={30}
//             onPress={() => console.log('Pressed')}
//             />



// <IconButton
//             icon="thumb-up"
//             color={Colors.blue500}
//             size={30}
//             onPress={() => console.log('Pressed')}
//             />        

    // </View>
        )
    }
}


const styles = StyleSheet.create({

    iconsView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end'


    }
})
