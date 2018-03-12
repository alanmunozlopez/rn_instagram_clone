import React, { Component } from 'react';
import {  View, Text, Button, StyleSheet } from 'react-native';

export default class Publicacion extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.container}>
        <Text> Publicacion </Text>
        <Button
          title = 'Comentarios'
          onPress = {() => { navigation.navigate('Comentarios'); }}
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