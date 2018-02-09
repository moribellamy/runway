// @flow

import moment from 'moment';
import Expense from './Expense';
import type { Action } from '../../actions';

function initData(): Array<Point> {
  let now = moment()
    .startOf('month')
    .startOf('day');
  let end = now.clone().add(100, 'years');
  let data: Array<Point> = [];
  while (now < end) {
    data.push(new Point(now.format('MMMM Do YYYY'), 42));
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

  constructor(name: string, amount: number) {
    this.name = name;
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

const initialState = new FinanceState(initData(), new Asset('checking', 0, 0), [], []);

const finance = (state: FinanceState = initialState, action: Action): FinanceState => {
  switch (action.type) {
    case 'CALCULATE':
      let points = [...state.points];
      points[0].amount += 1;
      return new FinanceState(points, state.checking, state.assets, state.expenses);
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
