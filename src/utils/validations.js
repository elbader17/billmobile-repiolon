import { RE_DNI } from '../constants/regular_expressions';

export const validateDni = (dni) => {
  return RE_DNI.test(dni);
}

//Condiciones Necesarias para crear un Invoice
export const validateData = (fiscalIdentityName, cantItems) => {
  return ((fiscalIdentityName!="") && (cantItems!= 0));
}