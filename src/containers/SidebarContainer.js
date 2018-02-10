// @flow

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import type { State } from '../reducers';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state: State) => {
  return {
    assets: state.finance.assets,
    checking: state.finance.checking
  };
};

const mapDispatchToProps = (dispatch) => ({
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
  addExpense: (
    name: string,
    amount: number,
    schedule: string,
    interest: number,
    interestSchedule: string
  ) => {
    dispatch(actions.addExpense(name, amount, schedule, interest, interestSchedule));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
