export const RE_DNI =  /^\d{8}(?:[-\s]\d{4})?$/;
export const CODE_CONFIRM =  /^\d{6}(?:[-\s]\d{4})?$/;
export const NUMBER = /^[0-9]+([,][0-9]+)?$/;
export const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
export const PASSWORD_REGEXP = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");