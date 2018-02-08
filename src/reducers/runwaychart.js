const runwaychart = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RUNWAY_CHART_DATA':
      return { ...state, data: action.data};
    default:
      return state;
  }
};

export default runwaychart;
