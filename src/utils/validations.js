import { RE_DNI } from '../constants/regular_expressions';
import { NUMBER } from '../constants/regular_expressions';

export const validateDni = (dni) => {
  return RE_DNI.test(dni);
}

//Condiciones Necesarias para Agregar un nuevo Item
export const validateAddItem = (product, service, price) => {
  if((product!="" || service!="") && (price!="" || NUMBER.test(price)))
    return true;
  else
    return false;
}

//Condiciones Necesarias para crear un Invoice
export const validateData = (fiscalIdentityName, cantItems) => {
  return ((fiscalIdentityName!="") && (cantItems!= 0));
}
