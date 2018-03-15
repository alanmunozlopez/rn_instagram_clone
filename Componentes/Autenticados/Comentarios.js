import React, { Component } from 'react';
import {  View, Text, Button, StyleSheet, } from 'react-native';

export default class Comentarios extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.container}>
        <Text> Comentarios </Text>
        <Button
          title = 'Autor'
          onPress= {() => { navigation.navigate('Autor'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})