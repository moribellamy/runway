// @flow

import React from 'react';
import { connect } from 'react-redux';
import RunwayChart from '../components/RunwayChart';
import type { State } from '../reducers';

const mapStateToProps = (state: State) => ({
  data: state.finance.points
});

let RunwayChartContainer = connect(mapStateToProps)(RunwayChart);

export default RunwayChartContainer;
