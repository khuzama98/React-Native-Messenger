import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (data) => {
    console.log('props ==>',this.props)
      this.props.navigation.navigate('Chat',data)
  }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.handleClick(item)} >
        <ListItem
            title={item.name}
            subtitle='Chat!'
            containerStyle={{ paddingVertical: 10 }}
            leftAvatar={{ source: { uri: item.uri } }}
        />
        </TouchableOpacity>
    )

  render() {

    return (
        <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.data}
            renderItem={this.renderItem}
            contentContainerStyle={{ paddingBottom: 13}}
        />
    );
  }
}

export default withNavigation(FriendList);
