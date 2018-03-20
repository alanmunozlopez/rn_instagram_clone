import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './Sagas/Sagas';

const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};

// f(g(h(...args)))
// ultimoMiddleWare(MiMiddleWare(...args))

// const miMiddleWare = store => next => (action) => {
//   console.log('Se ejecuta el middleware');
//   next(action);
// };

// const ultimoMiddleWare = store => next => (action) => {
//   console.log('ultimo MiddleWare');
//   next(action);
// };

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerPrueba,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);

export default store;
