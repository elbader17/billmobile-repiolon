/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-else-return */
/* eslint-disable eqeqeq */
//import { CUIT_REGEXP } from '../constants/fiscal_identity';

export const validateCuit = (cuit) => {
  let acumulado = 0;
  const digitos = cuit.split('');
  const digito	= digitos.pop();
  console.log(digito);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < digitos.length; i++) {
    acumulado += digitos[9 - i] * (2 + (i % 6));
  }
  let verif = 11 - (acumulado % 11);
  if (verif == 11) {
    verif = 0;
  }
  if(digito==verif) {
    return (true);
  }else{
    return (false);
  }
};
