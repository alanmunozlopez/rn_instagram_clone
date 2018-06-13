import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';
import { actionLogin } from '../../Store/ACTIONS';

class SignIn extends Component {
  signInDeUsuario = (values) => {
    this.props.login(values);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm
          login={this.signInDeUsuario}
        />
        <Button
          title="Go to Sign Up"
          onPress={() => { navigation.navigate('SignUp'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#90EE90',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (datos) => {
    dispatch(actionLogin(datos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
