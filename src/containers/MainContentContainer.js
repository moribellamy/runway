import React from 'react';
import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import {addLiquidAsset} from "../actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  layout: state.layout,
  data: state.finance.data
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

let MainContentContainer = connect(mapStateToProps, mapDispatchToProps)(MainContent);

export default MainContentContainer;
