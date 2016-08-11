import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';

export default class MyGames extends Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    try {
      // Get the auth token to check they are logged in
      const token = this.props._getToken();
      console.log(token);
    } catch (error) {
      console.log('mygames check token error: ', error);
      this.props.navigator.push({ title: 'Login', index: 1 })
    }
    // this.loadCards();
  }

  _fetchGames = () => {
    fetchUrl = 'https://codewords-api.herokuapp.com/api/games/user/'

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
        console.log(respJson);
        console.log(respJson.key);
        // this._storeToken(respJson.key);
      }).catch((err) => {console.log(err);}).done();
    }).done();
  }

	render() {
    return (
  		// <ListView>
  			<View>
  				<Text>My Games</Text>
  			</View>
  		// </ListView>
    )
	}
}
