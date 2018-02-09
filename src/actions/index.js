/**
 * Setter method for amount in checking account.
 */
export const setChecking = amount => ({
  type: 'SET_CHECKING',
  amount
});

/**
 * Changes the UI to show certain content.
 */
export const show = content => ({
  type: `SHOW_${content}`
});

/**
 * Recalculates the timeseries displayed to the user, based on the current state.
 */
export const calculate = () => ({
  type: 'CALCULATE'
});

/**
 * Keep track of another expense from the user.
 *
 * @param id Numeric value for which expense to set. -1 means create a new one.
 * @param amount How many dollars the expense is.
 * @param period A number for how often the expense occurs
 * @param unit A unit to go with <period>. For example, period=2 and unit='month' means twice
 * a month. Use string units that correspond to moment.js.
 */
export const setExpense = (id, amount, period, unit) => ({
  type: 'SET_EXPENSE',
  id,
  amount,
  period,
  unit
});
