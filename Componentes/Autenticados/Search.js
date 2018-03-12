import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export default class Search extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text> Search </Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
