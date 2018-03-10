import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';


const SignIn = (props) => {
  console.log(props);
  // props.navigation.navigate(SignUp);
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text> Componente SignIn </Text>
      <Button
        title = 'Navegar a SignUp'
        onPress = {() => { navigation.navigate('SignUp') }}
      />
    </View>
  );
};
const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text> Componente SignUp </Text>
      <Button
        title = 'Volver a SignIn'
        onPress = {() => { navigation.goBack() }}
      />
    </View>
  );
} 
  

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
