import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Card extends Component {
  // static propTypes = {
    // onClick: PropTypes.func.isRequired,
    // className: PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    const {word, active, onClick} = this.props;
    console.log('card: ' + word);
    return (
      <View onClick={onClick}>
        <Text>{word}</Text>
      </View>
    )
  }

};
