import React, { Component } from 'react';
import {  View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';

class SignUp extends Component {
  render() {
    console.log(this.props.numero);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Sign Up </Text>
        <SignUpForm />
        <TextInput
          placeholder = 'correo@correo.com'
        />
        <Button
          title = 'Back to Sign In'
          onPress = {() => { navigation.goBack(); }}
        />
        <Button 
          title = 'Aumentar'
          onPress = { this.props.aumentar }
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
      backgroundColor: '#fff',
    },
  })

const mapStateToProps = (state) => ({
  numero: state.reducerPrueba
});

const mapDispatchToProps = (dispatch) => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
