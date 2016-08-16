import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'apsl-react-native-button'

export default class MyGames extends Component {
	constructor(props) {
		super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{id: 1, current_turn: 'red_give'}]),
    };
	}

  componentDidMount() {
    try {
      // Get the auth token to check they are logged in
      const token = this.props._getToken();
      console.log(token);
    } catch (error) {
      console.log('mygames check token error: ', error);
      this.props.navigator.push({ title: 'Login', index: 1 })
    }
    this._fetchGames();
  }

  _fetchGames = () => {
    fetchUrl = 'https://codewords-api.herokuapp.com/api/games/'

    fetch(fetchUrl)
      .then((response) => {
        return response.json()
      }).then((responseJson) => {
        console.log('mygames fetch: ', responseJson.results);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.results)
        })
      }).catch((err) => {
        console.log(err);
      });
  }


  render() {
    let { _handleGameClick } = this.props;
    return (
      <ListView style={{flexDirection: 'row', flex: 1}}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                  <Button style={styles.gameRow} textStyle={styles.gameRowText}
                                      onPress={() => _handleGameClick(this.props.navigator, rowData.id)}>
                    {rowData.id}, {rowData.current_turn}
                  </Button>
                } />

    )
	}
}

const styles = StyleSheet.create({
  gameRowText: {
    fontSize: 20,
    textAlign: 'center',
  },
  gameRow: {
    margin: 10,
    width: 150,
    backgroundColor: 'red',
  }
})
