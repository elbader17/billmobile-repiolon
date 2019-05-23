export const presentInvoiceDate = invoiceDate => {
  return `${invoiceDate.getDate() + 1}/${invoiceDate.getMonth() + 1}/${invoiceDate.getFullYear()}`;
}