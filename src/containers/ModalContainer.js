// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../reducers';
import Modal from '../components/Modal/index';

const mapStateToProps = (state: State) => ({
  layout: state.layout
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
