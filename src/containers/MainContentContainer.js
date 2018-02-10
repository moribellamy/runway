// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../reducers';
import MainContent from '../components/MainContent';

const mapStateToProps = (state: State, ownProps) => ({
  ...ownProps,
  layout: state.layout,
  data: state.finance.points
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
