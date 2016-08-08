import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Card from './card'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {activeIndex: null}
  }

  setCardActive = (idx) => {
    this.setState({activeIndex: idx})
  }

  render () {
    // console.log(this.props);
    console.log('board state:');
    console.log(this.state.activeIndex);
    const activeIndex = this.state.activeIndex;
    // const { onCardClick, activeIndex } = this.props;
    const cards = this.props.cards.map(
      (card, idx) =>
        <Card word={card.word.text}
              active={idx === activeIndex}
              // onClick={() => this.props.setCardActive(idx)}
              onClick={() => this.setCardActive(idx)}
              key={idx} />
    );
    // console.log('in board. cards; ');
    // console.log(cards[0]);
    return (
      <View style={styles.board}>
        {cards}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  board: {
    // backgroundColor: '#dce2e5',
    // backgroundColor: '#000000',
  }
})
