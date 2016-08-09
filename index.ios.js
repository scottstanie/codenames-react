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
  TouchableHighlight,
  View
} from 'react-native';

import Board from './app/board';
import MyScene from './app/myscene';
import About from './app/about.js';
import MyGames from './app/mygames.js';


class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = { 'cards': [] }
  }

  loadCards() {
    let fetchUrl = 'http://codewords-api.herokuapp.com/api/cards/?game=43&count=25';
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

  renderScene = (route, navigator) => {
    console.log(this.state);
    if (route.index === 0) {
      // navigator.push(navigator.props.initialRouteStack[1]);
      return (
        <TouchableHighlight onPress={() => {
          navigator.push({title: 'Board', index: 1 });
        }}>
          <Text>Go to board!</Text>
        </TouchableHighlight>
      )
    } else if (route.title == 'Board') {
      return (
        <View style={styles.container}>
          <Board cards={this.state.cards} activeIndex={null} />
        </View>
      )
    } else {
      return (
        <TouchableHighlight onPress={() => {
          navigator.pop();
        }}>
          <Text>Go back!</Text>
        </TouchableHighlight>
      )
    }
  }


  render() {
    const routes = [
      {title: 'Board', index: 0},
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
        style={{ padding: 50 }}
        navigationBar={
         <Navigator.NavigationBar
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
              {
                if (route.index === 0) {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                      <Text>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },
             RightButton: (route, navigator, index, navState) =>
               { return (<Text>Done</Text>); },
             Title: (route, navigator, index, navState) =>
               { return (<Text>Codenames Home</Text>); },
           }}
           style={{backgroundColor: 'gray'}}
     />
  }
      />


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
