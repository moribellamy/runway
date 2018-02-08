import React from 'react';
import RunwayChartContainer from '../containers/RunwayChartContainer';
import './App.css';
import SidebarContainer from "../containers/SidebarContainer";

const sidebarStyles = {
  sidebar: {
    width: '15%'
  }
};

const App = () => (
  <div className="app">
    <SidebarContainer/>
    <RunwayChartContainer />
  </div>
);

export default App;
