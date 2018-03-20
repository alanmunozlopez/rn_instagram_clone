import { takeEvery, call } from 'redux-saga/effects';
import { authentication, database } from '../Servicios/Firebase';

const registroEnFirebase = values =>
  authentication
    .createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => success.toJSON());

const registroEnBaseDeDatos = ({ uid, email, nombre }) =>
  database.ref(`usuarios/${uid}`).set({
    nombre,
    email,
  });

function* generadoraRegistro(values) {
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

export default function* funcionPrimaria() {
  yield takeEvery('REGISTRO', generadoraRegistro);
  // yield ES6: pausar ejecucion y regresar un valor.
  console.log('Desde nuestra funcion generadora');
}
