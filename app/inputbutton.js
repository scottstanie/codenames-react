'use strict';
import React, { Component, PropTypes } from 'react';
import {
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'apsl-react-native-button'

export default class InputButton extends Component {
	constructor(props) {
		super(props);
    this.state = {clue: '', cardCount: '', guess: ''}
	}


  render() {
    // console.log('inputbutton render', this.state);
    let { isGiver, isGuesser } = this.props;
    console.log('inputbuttor render', this.props);
    let inputButton;
    if (isGuesser) {
                                      // onPress={() => _handleGameClick(navigator, rowData.id)}>
      inputButton = <Button style={styles.button} textStyle={styles.buttonText} >
                      Guess
                    </Button>
    } else if (isGiver) {
                                      // onPress={() => _handleGameClick(navigator, rowData.id)}>
      inputButton = <View style={styles.giveWrap}>
                      <View>
                        <TextInput
                          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
                          onChangeText={(text) => this.setState({clue: text})}
                          />
                        <Picker selectedValue={this.state.cardCount}
                                  onValueChange={(count) => this.setState({cardCount: count})}>
                          <Picker.Item label="zero" value="0" />
                          <Picker.Item label="one" value="1" />
                          <Picker.Item label="two" value="2" />
                          <Picker.Item label="three" value="3" />
                          <Picker.Item label="four" value="4" />
                          <Picker.Item label="five" value="5" />
                        </Picker>
                      </View>

                      <Button style={styles.button} textStyle={styles.buttonText} >
                        Give Clue
                      </Button>
                      </View>
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
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  giveWrap: {
    flexDirection: 'row',
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
