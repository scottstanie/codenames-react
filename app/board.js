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
    // <View onLayout={(event) => {
    // var {x, y, width, height} = event.nativeEvent.layout;
    // }} />
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
    
    return (
      <View style={styles.board}>
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
