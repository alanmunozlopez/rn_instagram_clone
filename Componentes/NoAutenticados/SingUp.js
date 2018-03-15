import React, { Component } from 'react';
import {  View, Text, Button, StyleSheet } from 'react-native';

export default class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Sign Up </Text>
        <Button
          title = 'Back to Sign In'
          onPress = {() => { navigation.goBack(); }}
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