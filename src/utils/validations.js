import { 
  RE_DNI, 
  EMAIL_REGEXP, 
  PASSWORD_REGEXP, 
  NUMBER
} from '../constants/regular_expressions';

export const validateDni = (dni) => {
  return RE_DNI.test(dni);
}

export const validatePass = (password) => {
  return PASSWORD_REGEXP.test(password);
}

export const validateEmail = (email) => {
  return EMAIL_REGEXP.test(email);
}

export const validateConfirmPass = (pass, confirmPass) => {
  return pass === confirmPass;
}

export const validateName = (name) => {
  return name!='';
}

export const validatePrice = (price) => {
  return NUMBER.test(price) && price!='';
}

//Condiciones Necesarias para Registrarse
export const validateDataSignUp = (pass, confirmPass, email, name) => {
  const bool = (validatePass(pass) && validateConfirmPass(pass,confirmPass) && validateEmail(email) && validateName(name));
  return bool;
}

//Condiciones Necesarias para Agregar un nuevo Item
export const validateAddItem = (name, price) => {
  return (validateName(name) && validatePrice(price));
}

//Condiciones Necesarias para crear un Invoice
export const validateData = (fiscalIdentityName, cantItems) => {
  return ((fiscalIdentityName!="") && (cantItems!= 0));
}
