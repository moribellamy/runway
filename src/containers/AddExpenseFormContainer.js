// @flow

import React from 'react';
import { connect } from 'react-redux';
import {addExpense} from "../actions";
import type { State } from '../reducers';
import {Expense} from "../reducers/finance";
import AddExpenseForm from '../components/AddExpenseForm';

const mapStateToProps = (state: State) => ({
});

const mapDispatchToProps = dispatch => ({
  addExpense: (expense: Expense) => dispatch(addExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
