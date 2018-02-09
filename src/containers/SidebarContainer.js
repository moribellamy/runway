// @flow

import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import * as actions from '../actions';
import type { State } from '../reducers';

const mapStateToProps = (state: State, ownProps) => {
  return {
    ...ownProps,
    assets: state.finance.assets,
    checking: state.finance.checking
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
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
  }
});

let SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
