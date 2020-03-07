
export const presentInvoiceDate = (date) => {
  console.log(date);
  const dateF = new Date(date)
  return `${dateF.getDate()}/${dateF.getMonth()+1}/${dateF.getFullYear()}`;
}

export const rankMaxDateBill = (concept) => {
  const date = new Date();
  if (concept == 'services' || concept == 'prodserv') {
    const days10 = (24*60*60*1000) * 10;
    date.setTime(date.getTime() + days10);
  }
  else {
    const days5 = (24*60*60*1000) * 5;
    date.setTime(date.getTime() + days5);
  }
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

export const rankMinDateBill = (concept) => {
  const date = new Date();
  if (concept == 'services' || concept == 'prodserv') {
    const days10 = (24*60*60*1000) * 10;
    date.setTime(date.getTime() - days10);
  }
  else {
    const days5 = (24*60*60*1000) * 5;
    date.setTime(date.getTime() - days5);
  }
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}