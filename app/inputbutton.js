'use strict';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'apsl-react-native-button'

export default class InputButton extends Component {
	constructor(props) {
		super(props);
    // this.state = {isLoading: true, isGiver: false, isGuesser: false}
	}


  render() {
    // console.log('inputbutton render', this.state);
    let { isGiver, isGuesser } = this.props;
    console.log('inputbuttor render', this.props);
    let inputButton;
    if (isGuesser) {
                                      // onPress={() => _handleGameClick(navigator, rowData.id)}>
      inputButton = <Button style={styles.button} textStyle={styles.gameRowText} >
                      Guess
                    </Button>
    } else if (isGiver) {
                                      // onPress={() => _handleGameClick(navigator, rowData.id)}>
      inputButton = <Button style={styles.button} textStyle={styles.gameRowText} >
                      Give Clue
                    </Button>
    }

    // let { _handleGameClick } = this.props;
    return (
      <View style={styles.buttonWrap}>
        {inputButton}
      </View>

    )
	}
}

const styles = StyleSheet.create({
  gameRowText: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonWrap: {
    position: 'absolute',
    left: 2,
    right: 10,
    bottom: 10,
    margin: 10,
  },
  button: {
    width: 150,
    backgroundColor: 'red',
  }
})
