'use strict';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dimensions from 'Dimensions';
import Card from './card'
import Board from './board';
import InputButton from './inputbutton'

export default class BoardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { cardData: [] }
  }


  loadCards(gameId) {
    let fetchUrl = 'https://codewords-api.herokuapp.com/api/cards/?game=' + gameId + '&count=25';
    return fetch(fetchUrl)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        // Returns but a mere promise of results
        return responseJson.results;
      });
  }

  componentDidMount() {
    try {
      // Get the auth token to check they are logged in
      const token = this.props._getToken();
      // console.log(token);
    } catch (error) {
      console.log('BoardWrapper check token error: ', error);
      this.props.navigator.push({ title: 'Login', index: 1 })
    }
    console.log('gameid', this.props.gameId);
    let cardPromise = this.loadCards(this.props.gameId);
    // Resolve promise
    cardPromise.then((cardData) => {
      console.log('card results', cardData);
      this.setState({cardData: cardData});
    });
  }


  render() {

    let { gameId, _getToken } = this.props;
            // style={styles.boardWrapper}>
    console.log('board wrapper: ', this.state.cardData);
    return (
      <View >
        <Board cardData={ this.state.cardData } />
        <InputButton gameId={gameId} _getToken={_getToken}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  boardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#dce2e5',
    // backgroundColor: '#000000',
  }
})
