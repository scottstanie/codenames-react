/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Board from './app/board';
import MyScene from './app/myscene';
import About from './app/about.js';
import Login from './app/asynclogin.js';
import MyGames from './app/mygames.js';


class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = { 'cards': [] }
  }


  _pushScene(navigator, title, index) {
    navigator.push({ title: title, index: index });
  }

  renderScene = (route, navigator) => {
    // console.log(this.state);
    switch (route.title) {
      case 'Home':

      return (
        <View>
          <TouchableHighlight onPress={() => this._pushScene(navigator, 'Board', 1)}
                              style={styles.menuItem}>
            <Text style={styles.menuText}>Board</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this._pushScene(navigator, 'Login', 1)}
                              style={styles.menuItem}>
            <Text style={styles.menuText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this._pushScene(navigator, 'My Games', 1)}
                              style={styles.menuItem}>
            <Text style={styles.menuText}>My Games</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this._pushScene(navigator, 'About', 1)}
                              style={styles.menuItem}>
            <Text style={styles.menuText}>About</Text>
          </TouchableHighlight>
        </View>
      )

    case 'Board':
      return (
        <View style={styles.container}>
          <Board navigator={navigator}
                 cards={this.state.cards}
                 activeIndex={null}
                 _getToken={this._getToken} />
        </View>
      )
    case 'Login':
      return (
        <View style={styles.container}>
          <Login navigator={navigator} />
        </View>
      )
    case 'About':
      return (
        <View style={styles.container}>
          <About navigator={navigator} />
        </View>
      )
    case 'My Games':
      return (
        <View style={styles.container}>
          <MyGames navigator={navigator}
                   _getToken={this._getToken} />
        </View>
      )
    default:
      return (
        <TouchableHighlight onPress={() => {
          navigator.pop();
        }}>
          <Text>Go back!</Text>
        </TouchableHighlight>
      )
    }
  }

  _getToken() {
    // Used in several components to check the login auth token
    try {
      const value = AsyncStorage.getItem('@TokenStore');
      if (value !== null) {
        // We have data!!
        value.then((result) => {
          console.log('getToken result: ', result);
          return result;
        });
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  }


  render() {

    return (
      <Navigator
        initialRoute={{title: 'Home', index: 0}}
        renderScene={this.renderScene}
        style={{ paddingTop: 80 }}
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
  menuText: {
    fontSize: 20,
    textAlign: 'center',
  },
  menuItem: {
    borderWidth: 1,
    borderRadius: 3,
  },
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

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
