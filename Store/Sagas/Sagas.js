import { takeEvery, call } from 'redux-saga/effects';
import { authentication, database } from '../Servicios/Firebase';
import CONSTANTS from '../CONSTANTS';

const registroEnFirebase = values =>
  authentication
    .createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => success.toJSON());

const registroEnBaseDeDatos = ({ uid, email, nombre }) =>
  database.ref(`usuarios/${uid}`).set({
    nombre,
    email,
  });

function* sagaRegistro(values) {
  try {
    const registro = yield call(registroEnFirebase, values.datos);
    console.log('done register');
    console.log(registro);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;
    // uid, email, name
    yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

const loginEnFireBase = ({correo, password}) =>
  authentication
    .signInWithEmailAndPassword(correo, password)
    .then(success => success.toJSON());

function* sagaLogin(values) {
  try {
    const resultado = yield call(loginEnFireBase, values.datos);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery(CONSTANTS.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTS.LOGIN, sagaLogin);
  // yield ES6: pausar ejecucion y regresar un valor.
  console.log('Desde nuestra funcion generadora');
}
