import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';

export default class Search extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.container}>
        <Text> Search </Text>
        <Button
          title = 'Publicacion'
          onPress = {() => { navigation.navigate('Publicacion'); }}
        />
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
