export const presentInvoiceDate = (date) => {
  const dateF = new Date(date)
  return `${dateF.getDate()}/${dateF.getMonth()+1}/${dateF.getFullYear()}`;
}