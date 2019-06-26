import { COLORS } from '../constants/colors';

export const messageEmail = {
    message: "Ingrese un email Valido",
    description: "Ejemplo: billmobil@mobil.com",
    floating: true,
    position: 'top',
    autoHide: false,
    icon: { icon: "auto", position: "left" },
    type: 'info',
};
  
export const messagePass = {
    message: "Mínimo de 8 Caracteres conteniendo",
    description: "Número/s, Mayúscula/s, Minúscula/s y CE",
    autoHide: false,
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'info',
    position: {top: 60},
};
  
export const messageConfirmPass = {
    message: "Confirmar Contraseña",
    description: "Las contraseñas deben coincidir",
    autoHide: false,
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'info',
    position: {top: 120},
};

export const messageErrorRegister = {
    message: "Error al Registrar",
    description: "La cuenta de email ya existe",
    floating: true,
    backgroundColor: COLORS.red,
    icon: { icon: "auto", position: "left" },
    type: 'danger',
    duration: 2850
};

export const messageErrorSignIn = {
    message: "Error al Ingresar",
    description: "Volver a intentar",
    floating: true,
    backgroundColor: COLORS.red,
    icon: { icon: "auto", position: "left" },
    type: 'danger',
    duration: 2850
};

export const messageErrorSignInData = {
    message: "Error al Ingresar",
    description: "Email o password Incorrectos",
    floating: true,
    backgroundColor: COLORS.red,
    icon: { icon: "auto", position: "left" },
    type: 'danger',
    duration: 2850
};

export const messageErrorSignInConfirm = {
    message: "Cuenta no confirmada",
    description: "Ingrese el código de 6 dígitos",
    floating: true,
    position: {bottom: 70},
    icon: { icon: "auto", position: "left" },
    type: 'warning',
    duration: 2850
};

export const messageErrorSignInExist = {
    message: "Error al Ingresar",
    description: "El usuario no existe",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'danger',
    backgroundColor: COLORS.red,
    duration: 2850
};

export const messageAddItemInvoice = {
    message: "Producto/Servicio Temporal",
    description: "Se creará solo para esta Factura",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'warning',
    position: {top: 250},
    duration: 3450
};

export const messageLogOut = {
    message: "Cerrar Sesión",
    description: "No Implementado",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'info',
    duration: 2450,
    position: {top: 50}
};

export const messageOptions = {
    message: "Opciones",
    description: "No Implementado",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'info',
    duration: 2450,
    position: {top: 50}
};


