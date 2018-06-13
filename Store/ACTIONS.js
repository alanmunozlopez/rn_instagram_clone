import CONSTANTS from './CONSTANTS';

export const actionRegistro = values => ({
  type: CONSTANTS.REGISTRO,
  datos: values,
});

export const actionLogin = datos => ({
  type: CONSTANTS.LOGIN,
  datos,
});

export const actionEstablecerSesion = usuario => ({
  type: CONSTANTS.ESTABLECER_SESION,
  usuario,
});

export const actionCerrarSesion = datos => ({
  type: CONSTANTS.CERRAR_SESION,
});
