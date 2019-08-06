import React, { Component } from 'react'
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList,Image,Icon,TouchableOpacity } from 'react-native';
// import {} from 'expo'
import {  SearchBar,List, ListItem} from 'react-native-elements';
// import img1 from '../assets/img1.jpg'
// import img2 from '../assets/img2.jpg'
// import img3 from '../assets/img3.png'
// import img4 from '../assets/img4.jpg'
// import img5 from '../assets/img5.jpg'
// import img6 from '../assets/img6.jpg'
// import img7 from '../assets/img7.jpg'
// import img8 from '../assets/img8.jpg'

// import { Ionicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { Searchbar } from 'react-native-paper';
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


export default class Home extends Component {
  constructor(){
    super()
    this.state={
      list:[
        {
          name: 'Amy Farha',
          avatar_url: '../assets/img1.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },{
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },{
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },{
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },{
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },{
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },{
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },{
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },{
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },{
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },
     
      ]
    }
  }
    

  renderImages(){
    return(
     <View>

     </View>
    )
  }
    render() {

return (
            <View>



   
 </View>     
   )
    }
  }

const styles = StyleSheet.create({
    container: {
    
    },
    inputDiv:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      margin:5,


    },
    scrolView:{
      marginTop:10,
      height:80,
   
    
      // flex:1

      

    },
    imgDiv:{

    },
    imgView:{
      flex:1,
      

    },
    imgScroll:{
      height:55,
      width:55,
      borderRadius:100,
      borderWidth:2,
      borderColor:'blue',
      margin:5,
     

    },
    imgs:{
      height:55,
      width:55,
      borderRadius:100,
      borderWidth:2,
      borderColor:'blue',
      margin:10,
      marginLeft:20,
    

    },
    nameView:{
      flex:3,
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'flex-start',
      padding:10,

    },
    listView:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',



    },
    SearchBar:{
      backgroundColor:'#e3e5e8',
      borderRadius:30, 
      alignSelf:'center',
      width:320,
      height:43,
      marginTop:20,

      

    },

    searchView:{
      flex:1,
     


    },
    flatView:{
      marginTop:10,
    }
  });



   
 {/* <SearchBar
  lightTheme
 round={true}
  icon={{ type: 'font-awesome', name: 'search' }}
  placeholder='Type Here...'
  containerStyle={{backgroundColor:'transparent',borderWidth:0,}}
  inputStyle={{backgroundColor:'#dedcdc',}}
  labelStyle={{backgroundColor:'#dedcdc',}}
  leftIconContainerStyle={{backgroundColor:'#dedcdc',}}
  rightIconContainerStyle={{backgroundColor:'#dedcdc',}}
  />  */}
  
  {/* <View style={styles.inputDiv}>
    <Ionicons name="md-search" size={40} style={{flex:1,}}  />
    <Ionicons name="md-checkmark-circle" size={40} color="green"  style={{flex:1,}} />
      <TextInput
            onChangeText={(text) => this.setState({text})}
            style={{height: 40, borderColor: 'gray', borderWidth: 1,width:100,flex:4,}}
            value={this.state.text}
            />

    </View>  */}
      


