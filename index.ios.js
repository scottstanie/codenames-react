/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Board from './app/board'
import MyScene from './app/myscene';


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
        this.setState({'cards' : json.results});
      }).done();
    }).done();
  }
  
  componentDidMount() {
    this.loadCards();
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'The Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />

      // <View style={styles.container}>
      //   <Board cards={this.state.cards} activeIndex={null} />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
