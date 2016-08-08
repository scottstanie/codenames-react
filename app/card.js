import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Dimensions from 'Dimensions';

export default class Card extends Component {
  // static propTypes = {
    // onClick: PropTypes.func.isRequired,
    // className: PropTypes.string,
  // };

  constructor(props) {
    super(props);
    this.state = {pressing: false}
  }

  // _onPressIn = () => {
  //   this.setState({pressing: true});
  // }

  // _onPressOut = () => {
  //   this.setState({pressing: false});
  // }

  _onPress = () => {
    this.props.onClick();
  }

  render() {
    const {word, active, onClick} = this.props;
    // console.log('card: ' + word + ' active? ' + active);
    // var {height, width} = Dimensions.get('window');
    // console.log("Dimensions: " + height + ' ' + width);
    return (
      <TouchableHighlight style={styles.touchable}
                          onPress={this._onPress} >
   
        <View style={active ? styles.activeCard : styles.card } >
          <Text style={styles.word} >
            {word}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

};

const styles = StyleSheet.create({
  word: {
    color: '#FFFFFF',
    textAlign: 'center',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    width: 350/5,
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    // height: 200,
    // width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeCard: {
    flex: 1,
    width: 350/5,
    backgroundColor: 'grey',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 5,
    // height: 200,
    // width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchable: {
    // borderRadius: 1
  },
});