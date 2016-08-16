import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dimensions from 'Dimensions';
import Card from './card'
import InputButton from './inputbutton'

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
    let { isGiver, cardData } = this.props;
    let activeIndex = this.state.activeIndex;
    // console.log("board.js- cardData = ", cardData)
    console.log("board.js- isgiver = ", isGiver)

    const cards = cardData.map(
      (card, idx) =>
        <Card word={card.word.text}
              active={idx === activeIndex}
              width={cardWidth}
              color={card.color}
              chosen={card.chosen}
              isGiver={isGiver}
              // onClick={() => this.props.setCardActive(idx)}
              onClick={() => this.setCardActive(idx)}
              key={idx} />
    );

        // <InputButton gameId={this.props.gameId} _getToken={this.props._getToken}/>
    return (
      <View>
        <View onLayout={this._handleOnLayout} style={styles.board}>
          {cards}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 5
    // backgroundColor: '#dce2e5',
    // backgroundColor: '#000000',
  }
})
