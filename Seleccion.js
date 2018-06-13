import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { authentication } from './Store/Servicios/Firebase';
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { actionEstablecerSesion, actionCerrarSesion } from './Store/ACTIONS';


class Seleccion extends Component {
  componentDidMount() {
    this.props.autenticacion();
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <RutasAutenticadas /> */}
        { this.props.usuario ? <RutasAutenticadas /> : <RutasNoAutenticadas /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  usuario: state.reducerSesion,
});

const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    authentication.onAuthStateChanged((usuario) => {
      if (usuario) {
        console.log(usuario.toJSON());
        dispatch(actionEstablecerSesion(usuario));
        // const displayName = user.displayName;
        // const email = user.email;
        // const emailVerified = user.emailVerified;
        // const photoURL = user.photoURL;
        // const isAnonymous = user.isAnonymous;
        // const uid = user.uid;
        // const providerData = user.providerData;
      } else {
        console.log('No hay usuario, no existe sesion');
        dispatch(actionCerrarSesion());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
