// @flow

import React from 'react';
import { connect } from 'react-redux';
import {addExpense, showRunwayChart} from "../actions";
import type { State } from '../reducers';
import {Expense} from "../reducers/finance";
import AddExpenseForm from '../components/Modal/AddExpenseForm';

const mapStateToProps = (state: State) => ({
});

const mapDispatchToProps = dispatch => ({
  addExpense: (expense: Expense) => {
    dispatch(addExpense(expense));
    dispatch(showRunwayChart());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
