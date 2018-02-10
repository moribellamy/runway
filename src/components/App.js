// @flow

import React from 'react';
import MainContentContainer from '../containers/MainContentContainer';
import SidebarContainer from '../containers/SidebarContainer';
import './App.css';
import AddExpenseFormContainer from "../containers/AddExpenseFormContainer";

const App = () => (
  <div id="app">
    <SidebarContainer />
    {/*<MainContentContainer />*/}
    <AddExpenseFormContainer />
  </div>
);

export default App;
