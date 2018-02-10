// @flow
// Eww. Lots of boilerplate here. At least it's typesafe...

import { Expense } from '../reducers/finance';

export type SetChecking = { type: 'SET_CHECKING', amount: number };
export function setChecking(amount: number): SetChecking {
  return { type: 'SET_CHECKING', amount };
}

export type ShowRunwayChart = { type: 'SHOW_RUNWAY_CHART' };
export function showRunwayChart(): ShowRunwayChart {
  return { type: 'SHOW_RUNWAY_CHART' };
}

export type ShowRunwayTable = { type: 'SHOW_RUNWAY_TABLE' };
export function showRunwayTable(): ShowRunwayTable {
  return { type: 'SHOW_RUNWAY_TABLE' };
}

export type Calculate = { type: 'CALCULATE' };
export function calculate(): Calculate {
  return { type: 'CALCULATE' };
}

export type AddExpense = {
  type: 'ADD_EXPENSE',
  expense: Expense
};
export function addExpense(expense: Expense): AddExpense {
  return { type: 'ADD_EXPENSE', expense };
}

export type Action = SetChecking | ShowRunwayChart | ShowRunwayTable | Calculate | AddExpense;
