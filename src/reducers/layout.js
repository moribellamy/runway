const layout = (state = {}, action) => {
  switch (action.type) {
    case 'RESIZE_RUNWAY_CHART':
      return { ...state, runwayChartWidth: action.width, runwayChartHeight: action.height };
    default:
      return state;
  }
};

export default layout;
