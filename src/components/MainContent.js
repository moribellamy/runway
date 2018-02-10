// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { LayoutState } from '../reducers/layout';
import { Point } from '../reducers/finance';
import RunwayChartContainer from '../containers/RunwayChartContainer';

type Args = { layout: LayoutState, data: Array<Point> };

const MainContent = ({ layout, data }: Args) => {
  switch (layout.show) {
    case 'RUNWAY_TABLE':
      return <div>{JSON.stringify(data)}</div>;
    default:
      return <RunwayChartContainer />;
  }
};

MainContent.propTypes = {
  layout: PropTypes.object.isRequired
};

export default MainContent;
