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
    this.state = { activeIndex: null }
  }

  _handleOnLayout = () => {
    this.forceUpdate();
  }

  _recalcSize = () => {
    var {height, width} = Dimensions.get('window');
    return width
  }

  setCardActive = (idx) => {
    this.setState({activeIndex: idx})
  }


  render() {
    let width = this._recalcSize();
    let cardWidth = width / 5;
    let cardData = this.props.cardData;
    let activeIndex = this.state.activeIndex;
    console.log("board.js- cardData = ", cardData)

    const cards = cardData.map(
      (card, idx) =>
        <Card word={card.word.text}
              active={idx === activeIndex}
              width={cardWidth}
              // onClick={() => this.props.setCardActive(idx)}
              onClick={() => this.setCardActive(idx)}
              key={idx} />
    );

    return (
      <View onLayout={this._handleOnLayout} style={styles.board}>
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
