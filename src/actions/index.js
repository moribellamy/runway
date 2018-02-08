export const resizeRunwayChart = (width, height) => ({
  type: 'RESIZE_RUNWAY_CHART',
  width,
  height
});

export const setRunwayChartData = data => ({
  type: 'SET_RUNWAY_CHART_DATA',
  data
});

export const addLiquidAsset = (name, amount) => ({
  type: 'ADD_LIQUID_ASSET',
  name,
  amount
});
