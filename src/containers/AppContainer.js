// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../reducers';
import App from '../components/App';

const mapStateToProps = (state: State) => ({
  data: state.layout
});

export default connect(mapStateToProps)(App);
