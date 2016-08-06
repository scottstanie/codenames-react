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
  }

  render () {
    // console.log(this.props);
    // console.log('board props');
    const activeIndex = this.props.activeIndex;
    // const { onCardClick, activeIndex } = this.props;
    const cards = this.props.cards.map(
      (card, idx) =>
        <Card word={card.word.text}
              active={idx === activeIndex}
              // onClick={() => this.props.setCardActive(idx)}
              key={idx} />
    );
    console.log('in board. cards; ');
    console.log(cards[0]);
    return (
      <View>
        {cards}
      </View>
    );
  }
};
