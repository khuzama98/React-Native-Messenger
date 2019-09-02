import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator, createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import * as Routes from './src/components/index';
import Icon from 'react-native-vector-icons/FontAwesome5'

const AuthNavigator = createStackNavigator({
  Login: {
    screen: Routes.Login
  }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const TabNavigator = createBottomTabNavigator({
  Messages: {
    screen: Routes.Friends,
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <Icon name="facebook-messenger" size={25} color={tintColor} />
      )
    },
  },
  Profile: {
    screen: Routes.Home,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <Icon name="user" size={25} color={tintColor} />
      )
    },
  }
})

const chatNavigation = createStackNavigator({
  Home: {
    screen: TabNavigator
  },
  Chat: {
    screen: Routes.ChatWith
  },
  Story: {
    screen: Routes.Story
  },
  AddStory: {
    screen: Routes.AddStory
  }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })

const MainNavigator = createSwitchNavigator({
  Auth: {
    screen: AuthNavigator
  },
  App: {
    screen: chatNavigation
  }
});

export default createAppContainer(MainNavigator);
