// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../reducers';
import RunwayChart from '../components/RunwayChart';

const mapStateToProps = (state: State) => ({
  data: state.finance.points
});

export default connect(mapStateToProps)(RunwayChart);
