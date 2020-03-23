
export const invoiceDateString = (date) => {
  const dateF = date ? new Date(date) : new Date();
  return `${dateF.getDate()}/${dateF.getMonth()+1}/${dateF.getFullYear()}`;
}

export const presentInvoiceDate = (date) => {
  const day = date.slice(8,10);
  const month = date.slice(5,7);
  const year = date.slice(0,4);
  return day+"/"+month+"/"+year;
}

export const rankMaxDateBill = (concept) => {
  const date = new Date();
  if (concept === 'Servicios' || concept == 'Productos y Servicios') {
    const days10 = (24*60*60*1000) * 10;
    date.setTime(date.getTime() + days10);
  }
  else {
    const days5 = (24*60*60*1000) * 5;
    date.setTime(date.getTime() + days5);
  }
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}

export const rankMinDateBill = (concept) => {
  const date = new Date();
  if (concept == 'Servicios' || concept == 'Productos y Servicios') {
    const days10 = (24*60*60*1000) * 10;
    date.setTime(date.getTime() - days10);
  }
  else {
    const days5 = (24*60*60*1000) * 5;
    date.setTime(date.getTime() - days5);
  }
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}