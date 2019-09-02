import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { createChatRoom } from '../../config/firebase'

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = async (data) => {
    console.log('props ==>', this.props)
    try {
      const res = await createChatRoom(data.uid)
      console.log('after click ==>', res)
      const obj = { roomId: res.roomId, data }
      this.props.navigation.navigate('Chat', obj)
    }
    catch (e) {
      console.log(e)
    }
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.handleClick(item)} >
      <ListItem
        title={item.displayName}
        subtitle='Chat!'
        containerStyle={{ paddingVertical: 10 }}
        leftAvatar={{ source: { uri: item.photoURL } }}
      />
    </TouchableOpacity>
  )

  render() {

    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.data}
        renderItem={this.renderItem}
        contentContainerStyle={{ paddingBottom: 13 }}
      />
    );
  }
}

export default withNavigation(FriendList);
