import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { authentication } from '../../../Store/Servicios/Firebase';

const fieldNombre = (props) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={
          !!(props.input.name === 'password' || props.input.name === 'confirmacion')
        }
        onBlur={props.input.onBlur}
      />
      <View style={styles.line} />
      {props.meta.touched && props.meta.error && <Text style={styles.errors}> {props.meta.error} </Text> }
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = 'requerido!';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'deben ser al menos 5 caracteres';
  } else if (values.nombre.length > 10) {
    errors.nombre = 'debe ser menor de 10 caracteres';
  }

  if (!values.correo) {
    errors.correo = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'correo invalido';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'deben ser al menos 5 caracteres';
  } else if (values.password.length > 15) {
    errors.password = 'debe ser menor de 15 caracteres';
  }

  if (!values.confirmacion) {
    errors.confirmacion = 'requerido';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'el password no coincide';
  }
  return errors;
};

const SignUpForm = (props) => {
  return (
    <View>
      <Field
        name="nombre"
        component={fieldNombre}
        ph="nombre"
      />
      <Field
        name="correo"
        component={fieldNombre}
        ph="correo"
      />
      <Field
        name="password"
        component={fieldNombre}
        ph="******"
      />
      <Field
        name="confirmacion"
        component={fieldNombre}
        ph="******"
      />
      <Button
        title="Registrar"
        onPress={props.handleSubmit(props.registro,
          // console.log(values);
          // authentication.createUserWithEmailAndPassword(values.correo, values.password)
          // .then((success) => {
          //   console.log(success);
          // })
          // .catch((error) => {
          //   // Handle Errors here.
          //   let errorCode = error.code;
          //   let errorMessage = error.message;
          //   console.log(errorCode);
          //   console.log(errorMessage);
          //   // ...
          // });
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  line: {
    backgroundColor: '#DCDCDC',
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
});

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
