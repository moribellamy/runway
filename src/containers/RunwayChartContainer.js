import React from 'react';
import { connect } from 'react-redux';
import RunwayChart from '../components/RunwayChart';

const mapStateToProps = state => ({
  data: state.runwaychart.data
});

let RunwayChartContainer = connect(mapStateToProps, null)(RunwayChart);

export default RunwayChartContainer;
