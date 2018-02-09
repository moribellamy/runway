import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import {setChecking, show, calculate} from "../actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  assets: state.finance.assets
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setChecking: (amount) => {
    dispatch(setChecking(amount));
  },
  show: (content) => {
    dispatch(show(content));
  },
  calculate: () => {
    dispatch(calculate());
  }
});

let SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
