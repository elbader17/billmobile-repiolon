export const CONDITION_IVA = [
  {
    label: 'Responsable Inscripto',
    value: 'ri',
  },
  {
    label: 'IVA Exento',
    value: 'ie',
  },
  {
    label: 'Monotributista',
    value: 'm',
  },
  {
    label: 'Responsable No Inscripto',
    value: 'rni',
  },
];

export const CONDITION_SALE = [
  {
    label: 'CONTADO',
    value: 'contado',
  },
  {
    label: 'DÉBITO',
    value: 'debito',
  },
  {
    label: 'CRÉDITO',
    value: 'credito',
  },
];

export const CUIT_REGEXP = /\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]/g;
