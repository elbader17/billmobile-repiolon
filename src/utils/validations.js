import { RE_DNI } from '../constants/regular_expressions';

export const validateDni = (dni) => {
  return RE_DNI.test(dni);
}