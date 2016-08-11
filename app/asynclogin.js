import React, { Component } from 'react';
import {
  AsyncStorage,
   StyleSheet,
   View,
   Text,
   TextInput,
   TouchableHighlight
} from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }


  _storeToken(token) {
    try {
      AsyncStorage.setItem('@TokenStore', token);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }


  _onSubmit = () => {
    fetchUrl = 'https://codewords-api.herokuapp.com/api/auth/login/'

    fetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => {
      response.json().then((respJson) => {
        console.log('respJson: ', respJson);
        if (respJson.key) {
          // console.log('respJson.key: ', respJson.key);
          this._storeToken(respJson.key);
          // Success!
          this.props.navigator.replace({ title: 'Home', index: 1 });
          return true;

        } else {
          // Bad in some way
          console.log(respJson);
          return false;
        }
      }).catch((err) => {console.log(err);}).done()
    }).done();
  }



  render() {

    return (
      <View>
        <Text>
          Login:
        </Text>
        <TextInput
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({email: text})}
          />
        <Text>
          Pasword:
        </Text>
        <TextInput
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry
          />
        <TouchableHighlight onPress={this._onSubmit} >
          <Text style={{fontSize: 20, textAlign: 'center'}}>Log in</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
