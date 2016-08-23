'use strict';
import React, { Component, PropTypes } from 'react';
import {
  AsyncStorage,
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
    this.state = { isLoading: true, cardData: [], gameRole: {isGiver: false, isGuesser: false}}
  }


  loadCards(gameId) {
    let fetchUrl = 'https://codewords-api.herokuapp.com/api/cards/?game=' + gameId + '&count=25';
    // let fetchUrl = 'http://localhost:8000/api/cards/?game=' + gameId + '&count=25';
    return fetch(fetchUrl)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        // Returns but a mere promise of results
        return responseJson.results;
      });
  }

  loadGameRole(gameId) {

    let fetchUrl = 'https://codewords-api.herokuapp.com/game_role/' + gameId;
    // let fetchUrl = 'http://localhost:8000/game_role/' + gameId;
    return AsyncStorage.getItem('@TokenStore').then((token) => {

      return fetch(fetchUrl, {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + token,
        }
      }).then((response) => {
          return response.json()
        })
        .then((responseJson) => {
          // console.log('loadgamerole', responseJson);
          // Returns but a mere promise of results
          return {
            isGiver: responseJson.is_giver,
            isGuesser: responseJson.is_guesser,
            isLoading: false,
          }
        });
    })
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

    let { gameId } = this.props;
    // console.log('gameid', gameId);
    let cardPromise = this.loadCards(gameId);
    let gameRolePromise = this.loadGameRole(gameId)

    // Resolve promises
    cardPromise.then((cardData) => {
      // console.log('card results', cardData);
      this.setState({cardData: cardData});
    });

    gameRolePromise.then((gameRole) => {
      console.log('game role results', gameRole);
      this.setState({gameRole: gameRole})
    })

  }


  render() {

    let { gameId, _getToken } = this.props;
    let {isGiver, isGuesser } = this.state.gameRole;
            // style={styles.boardWrapper}>
    // console.log('board wrapper: ', this.state.cardData);
     // <Board gameId={gameId} _getToken={this.props._getToken} cardData={ this.state.cardData } />
    return (
      <View style={styles.boardWrapper}>
        <Board style={styles.boardWrapper} isGiver={isGiver} cardData={ this.state.cardData } />
        <InputButton isGiver={isGiver}
                     isGuesser={isGuesser}
                     gameId={gameId}
                     _getToken={_getToken}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  boardWrapper: {
    flexDirection: 'column',
    // flexWrap: 'wrap',
    flex: 6,
    // backgroundColor: '#dce2e5',
    // backgroundColor: '#000000',
  }
})
