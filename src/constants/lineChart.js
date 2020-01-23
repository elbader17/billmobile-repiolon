import { COLORS } from "./colors";

export const dataChart = {
  labels: ['Jul','Ag','Sep','Oct','Nov','Dic'],
    datasets: [{
      data: [10, 30, 35, 60, 90, 20],
      strokeWidth: 2,
    }
  ],
};

export const dataConfig = {
  backgroundGradientFrom: COLORS.blueLight,
  backgroundGradientTo: COLORS.blueLight,
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};