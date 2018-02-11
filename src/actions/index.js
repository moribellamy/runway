// @flow
// Eww. Lots of boilerplate here. At least it's typesafe...
// For more info on each action, see the JSDoc of the corresponding reducer.

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

export type ShowAddExpenseModal = { type: 'SHOW_ADD_EXPENSE_MODAL' };
export function showAddExpenseModal(): ShowAddExpenseModal {
  return { type: 'SHOW_ADD_EXPENSE_MODAL' };
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

export type Action =
  | SetChecking
  | ShowRunwayChart
  | ShowRunwayTable
  | Calculate
  | AddExpense
  | ShowAddExpenseModal;
