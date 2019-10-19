
export const presentInvoiceDate = date => {
  const dateFormat = new Date(date)
  return `${dateFormat.getDate()}/${dateFormat.getMonth() + 1}/${dateFormat.getFullYear()}`;
}