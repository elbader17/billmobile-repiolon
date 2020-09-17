
export const limitBilling = (category) => {
  switch(category) {
    case 'A':
      return 209000;
    case 'B':
      return 314000;
    case 'C':
      return 418000;
    case 'D':
      return 627000;
    case 'E':
      return 835000;
    case 'F':
      return 1044000;
    case 'G':
      return 1253000;
    case 'H':
      return 1740000;
    case 'I':
      return 2043000;
    case 'J':
      return 2349000;
    case 'K':
      return 2610000;
    default:
      return 210000;
  }
}

export const presentInvoiceType = (type) => {
  switch(type) {
    case '11':
      return 'Factura C';
    case '12':
      return 'Nota de Débito C';
    case '13':
      return 'Nota de Crédito C';
    case '15':
      return 'Recibo C';
    default:
      return 'Comprobante C';
  }
}

export const presentInvoiceTypeShort = (type) => {
  switch(type) {
    case '11':
      return 'FC';
    case '12':
      return 'ND';
    case '13':
      return 'NC';
    case '15':
      return 'RC';
    default:
      return 'FC';
  }
}
