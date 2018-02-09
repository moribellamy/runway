// @flow
// TODO: later.js and UI elements therein!

import moment from 'moment';
import type { Action } from '../../actions';

function initData(): Array<Point> {
  let now = moment()
    .startOf('month')
    .startOf('day');
  let end = now.clone().add(100, 'years');
  let data: Array<Point> = [];
  while (now < end) {
    data.push(new Point(now, 0));
    now = now.add(1, 'month');
  }
  return data;
}

/**
 * A single member of the timeseries we plot to the user.
 */
class Point {
  name: string; // X axis
  amount: number; // Y axis
  timestamp: moment;

  constructor(timestamp:moment, amount: number) {
    this.timestamp = timestamp;
    this.name = timestamp.format('MMMM Do YYYY');
    this.amount = amount;
  }
}

class Asset {
  name: string;
  amount: number;
  interest: number;

  constructor(name: string, amount: number, interest: number) {
    this.name = name;
    this.amount = amount;
    this.interest = interest;
  }
}

export class FinanceState {
  points: Array<Point>;
  checking: Asset;
  assets: Array<Asset>;
  expenses: Array<Expense>;

  constructor(
    points: Array<Point>,
    checking: Asset,
    assets: Array<Asset>,
    expenses: Array<Expense>
  ) {
    this.points = points;
    this.checking = checking;
    this.assets = assets;
    this.expenses = expenses;
  }
}

type Unit = 'year' | 'month' | 'day' | 'week';

class Expense {
  amount: number;
  period: number;
  unit: Unit;

  /**
   * @param amount The amount (in currency) of the expense.
   * @param period How many times this expense occurs in one <unit>.
   * @param unit A moment.js unit of time, like 'day' or 'week'.
   */
  constructor(amount: number, period: number, unit: Unit) {
    this.amount = amount;
    this.period = period;
    this.unit = unit;
  }
}

const initialState = new FinanceState(initData(), new Asset('checking', 0, 0), [], []);

function calculate(
  oldPoints: Array<Point>,
  givenChecking: Asset,
  givenAssets: Array<Asset>,
  givenExpenses: Array<Expense>
): Array<Point> {

  for (let i = 1; i < oldPoints.length; i++) {
    let last: Point = oldPoints[i - 1];
    let curr: Point = oldPoints[i];
  }

  oldPoints[0].amount = givenChecking.amount;
  return oldPoints;
}

const finance = (state: FinanceState = initialState, action: Action): FinanceState => {
  switch (action.type) {
    case 'CALCULATE':
      return new FinanceState(
        calculate(state.points, state.checking, state.assets, state.expenses),
        state.checking,
        state.assets,
        state.expenses
      );
    case 'SET_CHECKING':
      return new FinanceState(
        state.points,
        new Asset('checking', action.amount, 0),
        state.assets,
        state.expenses
      );
    default:
      return state;
  }
};

export default finance;
