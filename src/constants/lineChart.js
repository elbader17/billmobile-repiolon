import { COLORS } from "./colors";

export const presentDataDay = (date, invoices) => {
  const day = date.getDate();
  const month = date.getMonth() +1;
  const year = date.getFullYear();
  const listProcessed = invoices.filter(invoice => invoice.attributes.state === 'processed' && parseInt(invoice.attributes.invoice_date.slice(0,4)) == parseInt(year) && parseInt(invoice.attributes.invoice_date.slice(5,7)) == parseInt(month) && parseInt(invoice.attributes.invoice_date.slice(8,10)) == parseInt(day));
    if (listProcessed.length === 0 || invoices.length === 0 ) {
      return ({
        labels: ['','1/3', day.toString() +'/'+ month.toString(), '3/3', ''],
          datasets: [{
            data: [0, 0, 0, 0],
            strokeWidth: 2,
          }
        ],
      })
    }
    else {
      var count = 0;
      listProcessed.map(invoice => {
        console.log(invoice.attributes.total);
        count = count + invoice.attributes.total 
      });
      return ({
        labels: ['','1/3', day.toString() +'/'+ month.toString(), '3/3', ''],
          datasets: [{
            data: [0, 0, count, 0, 0],
            strokeWidth: 2,
          }
        ],
      })
    }
}

export const presentDataYear = (date, invoices) => {
  const year = date.getFullYear();
  const labelss = ['E', 'F','M','A','M','J','J','A','S','O','N', 'D'];
  const listProcessed = invoices.filter(invoice => invoice.attributes.state === 'processed' && parseInt(invoice.attributes.invoice_date.slice(0,4)) == parseInt(year));
    if (listProcessed.length === 0 || invoices.length === 0 ) {
      return ({
        labels: labelss,
          datasets: [{
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            strokeWidth: 2,
          }
        ],
      })
    }
    else {
      var data=[0,0,0,0,0,0,0,0,0,0,0]
      listProcessed.map(invoice => {
        const m = parseInt(invoice.attributes.invoice_date.slice(5,7))
        data[m-1] = data[m-1] + parseFloat(invoice.attributes.total)
      });
      return ({
        labels: labelss,
          datasets: [{
            data: data,
            strokeWidth: 2,
          }
        ],
      })
    }
}

export const presentDataMonth = (date, invoices) => {
  const day = parseInt(date.getDate());
  const month = parseInt(date.getMonth()+1);
  const year = parseInt(date.getFullYear());

  const labelss = ['1ª Semana', '2ª Semana','3ª Semana','4ª Semana'];
  const listProcessed = invoices.filter(invoice => invoice.attributes.state === 'processed' && parseInt(invoice.attributes.invoice_date.slice(0,4)) === year && parseInt(invoice.attributes.invoice_date.slice(5,7)) == month);
    if (listProcessed.length === 0 || invoices.length === 0 ) {
      return ({
        labels: labelss,
          datasets: [{
            data: [0, 0, 0, 0],
            strokeWidth: 2,
          }
        ],
      })
    }
    else {
      var data=[0,0,0,0]
      listProcessed.map(invoice => {
        const total = parseInt(invoice.attributes.total);
        const d = parseInt(invoice.attributes.invoice_date.slice(8,10));
        if (d <= 7)
          data[0] = data[0] + total;
        else if (d>7 && d<=14) data[1] = data[1] + total;
          else if (d>14 && d<=21) data[2] = data[2] + total;
            else data[3] = data[3] + total;
      });
      console.log(data)
      return ({
        labels: labelss,
          datasets: [{
            data: data,
            strokeWidth: 2,
          }
        ],
      })
    }
}

export const dataConfig = {
  backgroundGradientFrom: COLORS.white,
  backgroundGradientTo: COLORS.blueLight,
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 26, 51, ${opacity})`,
};

export const DMY = [
  {
    label: 'Día',
    value: 'day',
  },
  {
    label: 'Mes',
    value: 'month',
  },
  {
    label: 'Año',
    value: 'year',
  }
];