/* @flow */

type Unit = 'year' | 'month' | 'day' | 'week';

class Expense {
  amount: Number;
  period: Number;
  unit: Unit;

  /**
   * @param amount The amount (in currency) of the expense.
   * @param period How many times this expense occurs in one <unit>.
   * @param unit A moment.js unit of time, like 'day' or 'week'.
   */
  constructor(amount: Number, period: Number, unit: Unit) {
    this.amount = amount;
    this.period = period;
    this.unit = unit;
  }
}

export default Expense;
