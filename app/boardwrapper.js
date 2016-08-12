import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dimensions from 'Dimensions';
import Card from './card'
import Board from './board';

export default class BoardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { cardData: [] }
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
    let cardPromise = this.loadCards(this.props.gameId);
    console.log('card results', cardPromise);
    // Resolve promise
    cardPromise.then((cardData) => {
      this.setState({cardData: cardData});
    });
  }

  render() {

    let { cardData, gameId } = this.props;
            // style={styles.boardWrapper}>
    return (
      <View >
        <Board cardData={ cardData[gameId] } />
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
