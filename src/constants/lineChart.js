export const dataChart = {
  labels: ['Jun','Jul','Ago','Sept','Oct','Nov',],
    datasets: [{
      data: [1, 4, 3.5, 5, 3, 2, 1.5],
      strokeWidth: 2,
    }
  ],
};

export const dataConfig = {
  backgroundGradientFrom: 'rgba(0, 172, 230)',
  backgroundGradientTo: 'rgba(26, 94, 255)',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
};
