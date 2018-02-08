const assets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIQUID_ASSET':
      return [ ...state, {name: action.name, amount: action.amount }];
    default:
      return state;
  }
};

export default assets;
