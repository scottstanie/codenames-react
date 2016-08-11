import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dimensions from 'Dimensions';
import Card from './card'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {activeIndex: null}
  }

  loadCards() {
    let fetchUrl = 'https://codewords-api.herokuapp.com/api/cards/?game=43&count=25';
    fetch(fetchUrl, {method: 'GET'})
    .then((response) => {
      response.json().then((json) => {
        this.setState({'cards' : json.results});
      }).done();
    }).done();
  }


  componentDidMount() {
    try {
      // Get the auth token to check they are logged in
      const token = this._getToken();
      console.log(token);
    } catch (error) {
      console.log('Board check token error: ', error);
      this.props.navigator.push({ title: 'Login', index: 1 })
    }
    this.loadCards();
  }


  setCardActive = (idx) => {
    this.setState({activeIndex: idx})
  }

  _recalcSize = () => {
    var {height, width} = Dimensions.get('window');
    console.log('_REACALC_SIZE', width, height);
    return width
  }


  _handleOnLayout = () => {
    this.forceUpdate();
  }

  render () {

    const activeIndex = this.state.activeIndex;
    let width = this._recalcSize();
    // this._recalcSize();
    // const { onCardClick, activeIndex } = this.props;
    const cards = this.props.cards.map(
      (card, idx) =>
        <Card word={card.word.text}
              active={idx === activeIndex}
              width={width / 5}
              // onClick={() => this.props.setCardActive(idx)}
              onClick={() => this.setCardActive(idx)}
              key={idx} />
    );

    return (
      <View onLayout={this._handleOnLayout}
            style={styles.board}>
        {cards}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#dce2e5',
    // backgroundColor: '#000000',
  }
})
