import moment from 'moment';

const initData = () => {
  let now = moment()
    .startOf('month')
    .startOf('day');
  let end = now.clone().add(100, 'years');
  let data = [];
  while (now < end) {
    data.push({
      name: now.format('MMMM Do YYYY'),
      amount: 42
    });
    now = now.add(1, 'month');
  }
  return data;
};

const initialState = {
  /**
   * The list of all the data we have crunched so that we can show it to the user. This
   * is the very same list we will pass in to the "data" property of our Recharts component.
   * The format is a list of dicts, each dict having:
   * - "name" which corresponds to the X-axis.
   * - "amount" which corresponds to the Y axis.
   */
  data: initData(),
  /**
   * Things the user owns.
   */
  assets: {
    /**
     * The user's "checking" account. Without loss of generality, this can be thought of their
     * store of liquid value.
     */
    checking: { amount: 0 }
  },
  /**
   * Obligations of the user.
   */
  expenses: {
    // This is a map from numeric IDs to Expense objects.
  }
};

const finance = (state = initialState, action) => {
  switch (action.type) {
    case 'CALCULATE':
      let data = Object.assign({}, state.data);
      data[0].amount += 1;
      return { ...state, data };
    case 'SET_CHECKING':
      return { ...state, checking: {name: action.name, amount: action.amount }};
    case 'SET_EXPENSE':
      return { ...state };
    default:
      return state;
  }
};

export default finance;
