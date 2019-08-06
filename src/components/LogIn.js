import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { login } from '../config/firebase'
import * as Facebook from 'expo-facebook';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  loginWithFacebook = async () => {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync('339702926972442', {
      permissions: ['public_profile'],
    })


    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const res = await response.json();
      console.log('res==>', res)
      try {
        const user = await login(token);
        console.log('user ===>', user);
        this.props.navigation.navigate('Messages')
      } catch (e) {
        console.log('e ===>', e)
      }
    } else {
      console.log('no success!')
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={{ fontSize: 25, fontWeight: '600', paddingVertical: 20 }} > MESSENGER LOGIN </Text>
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          style={{ paddingHorizontal: 20 }}
          onPress={() => this.loginWithFacebook()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogIn;
