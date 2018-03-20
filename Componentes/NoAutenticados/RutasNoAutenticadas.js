import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp.js';

const RutasNoAutenticadas = StackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
},
{
  headerMode: 'none',
},
);

export { RutasNoAutenticadas };
