'use strict';
import React, { Component, PropTypes } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'apsl-react-native-button'

export default class InputButton extends Component {
	constructor(props) {
		super(props);
    this.state = {isLoading: true, isGiver: false, isGuesser: false}
	}

  componentDidMount() {

    let fetchUrl = 'https://codewords-api.herokuapp.com/game_role/' + this.props.gameId;
    AsyncStorage.getItem('@TokenStore').then((token) => {
      console.log('fetchGameRole', token)
      fetch(fetchUrl, {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + token,
        }
      }).then((response) => {
          return response.json()
        })
        .then((responseJson) => {
          console.log('fetchgamerolw', responseJson);
          // Returns but a mere promise of results
          this.setState({
            isGiver: responseJson.is_giver,
            isGuesser: responseJson.is_guesser,
            isLoading: false,
          })
        });
    })
  }


  render() {
    console.log('inputbutton render', this.state);
    let inputButton;
    if (this.state.isGuesser) {
                                      // onPress={() => _handleGameClick(this.props.navigator, rowData.id)}>
      inputButton = <Button style={styles.gameRow} textStyle={styles.gameRowText} >
                      Guess
                    </Button>
    } else if (this.state.isGiver) {
                                      // onPress={() => _handleGameClick(this.props.navigator, rowData.id)}>
      inputButton = <Button style={styles.gameRow} textStyle={styles.gameRowText} >
                      Guess
                    </Button>
    }

    // let { _handleGameClick } = this.props;
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {inputButton}
      </View>

    )
	}
}

const styles = StyleSheet.create({
  gameRowText: {
    fontSize: 20,
    textAlign: 'center',
  },
  gameRow: {
    margin: 10,
    width: 150,
    backgroundColor: 'red',
  }
})
