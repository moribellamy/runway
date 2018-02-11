// @flow

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import type { State } from '../reducers';
import Sidebar from '../components/Sidebar';
import { Expense } from '../reducers/finance';

const mapStateToProps = (state: State) => {
  return {
    assets: state.finance.assets,
    checking: state.finance.checking,
    expenses: state.finance.expenses
  };
};

const mapDispatchToProps = dispatch => ({
  setChecking: amount => {
    dispatch(actions.setChecking(amount));
  },
  showRunwayChart: () => {
    dispatch(actions.showRunwayChart());
  },
  showRunwayTable: () => {
    dispatch(actions.showRunwayTable());
  },
  calculate: () => {
    dispatch(actions.calculate());
  },
  addExpense: (expense: Expense) => {
    dispatch(actions.addExpense(expense));
  },
  showAddExpenseModal: () => {
    dispatch(actions.showAddExpenseModal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
