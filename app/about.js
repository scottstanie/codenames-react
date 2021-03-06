import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View, ScrollView
} from 'react-native';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ScrollView>

        <Text style={{fontSize: 16}}>Overview of Codenames</Text>
        <Text>
        Codenames is a game of deduction and word association!
        There are two teams of spies: the Red Team and the Blue Team.
        Each organization is trying to contact its agents out in the field, which is a grid of 25 tiles.
        Each tile represents a person: a blue agent, a red agent, an innocent civilian, or an assassin.
        Your goal is to contact all the agents of your own color before the other team does.
        But be careful - if you find the assassin, you lose!
        HOW TO PLAY
        The board is set up with 25 tiles, each with a unique word on it.

        Players are divided into two teams, each with a Giver and a Receiver.

        The Giver is the spymaster for their team; they know which tiles are blue agents, which are red agents, which are civilians (tan tiles), and which one is the assassin (the black tile).
        The Receiver is the field operative.
        They don’t know anything about the tiles except the word written on them, but they are the one who can actually contact people in the field.
        Teams take turns trying to find their agents
        First, the spymaster gives a clue to their field operative.

        Each clue consists of ONE WORD and ONE NUMBER.

        The word thematically links together some of the cards on the field.

        The number indicates how many cards are thematically linked.

        Note that the clue given cannot be a word, or any variation of a word, which is active on the field
        Then the field operative guesses which cards he or she thinks the spymaster was referring to.

        They guess cards one at a time.

        If the card is an agent on their team, then they can make another guess!

        If the card is the assassin, they are killed and their team loses.
        If the card is an enemy spy or an innocent civilian, then their turn immediately ends.
        They may not make any further guesses, and the enemy spymaster gives their next clue
        There is a maximum number of guesses that can be made each turn: it is one MORE than the number specified by the spymaster.
        For example, if the given clue is “Fox 3,” the field agent may make up to FOUR guesses.
        A field agent is not required to make that many guesses, of course!
        At any time they can choose to simply pass, knowing that the next clue they are given might offer more insight
        </Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#dce2e5',
    // backgroundColor: '#000000',
  }
})
