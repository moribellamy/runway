// @flow

import React from 'react';
import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import type { State } from '../reducers';

const mapStateToProps = (state: State, ownProps) => ({
  ...ownProps,
  layout: state.layout,
  data: state.finance.points
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

let MainContentContainer = connect(mapStateToProps, mapDispatchToProps)(MainContent);

export default MainContentContainer;
