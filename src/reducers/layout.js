const layout = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_RUNWAY_TABLE':
      return { ...state, show: 'RUNWAY_TABLE' };
    case 'SHOW_RUNWAY_CHART':
      return { ...state, show: 'RUNWAY_CHART' };
    default:
      return state;
  }
};

export default layout;
