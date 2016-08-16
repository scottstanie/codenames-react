'use strict';

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Dimensions from 'Dimensions';

let baseWordStyle = {
  color: '#FFFFFF',
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 10,
};

let baseCardStyle = {
  flex: 1,
  height: 9,
  // backgroundColor: 'red',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center'
};

export default class Card extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {pressing: false}
  }

  _onPress = () => {
    this.props.onClick();
  }

  render() {
    const {
      word,
      color,
      chosen,
      active,
      onClick,
      width,
      isGuesser
    } = this.props;

    let borderMap = {
      active: 'green',
      chosen: 'orange'
    }
    let newCardStyle = {
      ...baseCardStyle,
      width: width,
      borderColor: (chosen ? 'orange' :
                    active ? 'green': 'black'),
      borderWidth: (active || chosen) ? 3 : 1,
      backgroundColor: (isGuesser || chosen) ? color : '#cdb54c',

    };

    // console.log("Card", chosen, newCardStyle.borderColor);
    // console.log("newCardStyle", newCardStyle);

    // WHY IS THIS FAILING??
    // let wordStyles = StyleSheet.create(baseWordStyle);
    // let cardStyles = StyleSheet.create(baseCardStyle);
    // console.log("CARD Dimensions. desired: ", width, ' actual: ', newCardStyle.width);
    return (
      <TouchableHighlight onPress={this._onPress} >

        <View style={ newCardStyle }>
          <Text style={ baseWordStyle } >
            {word}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

};


