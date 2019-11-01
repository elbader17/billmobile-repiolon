export const dataChart = {
  labels: ['E','F','M','A','M','J','J','A','S','O','N','D'],
    datasets: [{
      data: [10, 30, 35, 60, 90, 20, 15, 10, 20, 40, 30, 50],
      strokeWidth: 2,
    }
  ],
};

export const dataConfig = {
  backgroundGradientFrom: 'rgba(0, 125, 230)',
  backgroundGradientTo: 'rgba(0, 125, 230)',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};