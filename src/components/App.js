import React from 'react';
import MainContentContainer from '../containers/MainContentContainer';
import './App.css';
import SidebarContainer from '../containers/SidebarContainer';
import MainContent from './MainContent';

const App = () => (
  <div id="app">
    <SidebarContainer/>
    <MainContentContainer />
  </div>
);

export default App;
