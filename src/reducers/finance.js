// @flow
// TODO: later.js and UI elements therein!

import moment from 'moment';
import type { Action } from '../actions';
import later from 'later';

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
export class Point {
  name: string; // X axis
  amount: number; // Y axis
  timestamp: moment;

  constructor(timestamp: moment, amount: number) {
    this.timestamp = timestamp;
    this.name = timestamp.format('MMMM Do YYYY');
    this.amount = amount;
  }
}

export class Asset {
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

export class Expense {
  name: string;
  amount: number;
  schedule: string;
  interest: number;
  interestSchedule: string;
  computed: any;  // XXX

  /**
   * @param name Human friendly name, e.g. "rent" or "groceries".
   * @param amount The amount (in currency) of the expense.
   * @param schedule A later.js schedule for how often the expense occurs.
   * @param interest A multiplier representing periodic change, e.g. 1.03 = 3%.
   * @param interestSchedule How often interest compounds, in later.js.
   */
  constructor(
    name: string,
    amount: number,
    schedule: string,
    interest: number,
    interestSchedule: string
  ) {
    this.name = name;
    this.amount = amount;
    this.schedule = schedule;
    this.interest = interest;
    this.interestSchedule = interestSchedule;

    // let parsed = later.parse.text(schedule);
    // let computed = later.schedule(parsed);
    // console.log(computed.next(100000));
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
    case 'ADD_EXPENSE':
      return new FinanceState(state.points, state.checking, state.assets, [
        ...state.expenses,
        new Expense(
          action.expense.name,
          action.expense.amount,
          action.expense.schedule,
          action.expense.interest,
          action.expense.interestSchedule
        )
      ]);
    default:
      return state;
  }
};

export default finance;
