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

  _fetchGames = () => {
    fetchUrl = 'https://codewords-api.herokuapp.com/api/games/user/'
    // var csrftoken = this.getCSRFToken(home_url);
    fetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
        // 'X-CSRFToken': csrftoken,
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
		<ListView>
			<View>
				<Text>My Games</Text>
			</View>
		</ListView>
	}
}
