/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Card from 'app/card'
import Board from './app/board'


// .get(formatUrl('/api/cards/?game=43&count=25'))


class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = { 'cards': [] }
  }

  loadCards() {
    let fetchUrl = 'http://localhost:8000/api/cards/?game=43&count=25';
    fetch(fetchUrl, {method: 'GET'})
    .then((response) => {
      response.json().then((json) => {
        // console.log('then: json: ' + json.results)
        this.setState({'cards' : json.results});
        // console.log('this state: ' + json.results)

      }).done();
    }).done();
  }
  
  componentDidMount(){
    let cards = this.loadCards();
    // this.setState({'cards': cards})
  }

  render() {
    // console.log('index render state: ');
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <Board cards={this.state.cards} activeIndex={null} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dce2e5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#D2BFA2',
    flex: 1,
    height: 20,
    textAlign: 'center',
    alignItems: 'center'
  },
  active: {
    color: 'green',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
