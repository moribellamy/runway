// @flow

import React from 'react';
import MainContentContainer from '../containers/MainContentContainer';
import SidebarContainer from '../containers/SidebarContainer';
import './App.css';
import AddExpenseFormContainer from '../containers/AddExpenseFormContainer';
import ModalContainer from '../containers/ModalContainer';

const App = () => (
  <div id="app">
    <ModalContainer />
    <SidebarContainer />
    <MainContentContainer />
  </div>
);

export default App;
