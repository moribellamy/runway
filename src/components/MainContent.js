import React from 'react';
import PropTypes from 'prop-types';
import RunwayChart from "./RunwayChart";
import RunwayChartContainer from "../containers/RunwayChartContainer";

const MainContent = ({ layout, data }) => {
  switch (layout.show) {
    case 'RUNWAY_TABLE':
      return (<div>{JSON.stringify(data)}</div>);
    default:
      return (<RunwayChartContainer/>)
  }
};

MainContent.propTypes = {
  layout: PropTypes.object.isRequired
};

export default MainContent;
