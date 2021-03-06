import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { authentication } from '../../Store/Servicios/Firebase';

export default class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <Button
          title="Publicacion"
          onPress={() => { navigation.navigate('Publicacion'); }}
        />
        <Button
          title="Salir"
          onPress={() => { authentication.signOut(); }}
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
});
