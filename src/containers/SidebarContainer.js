import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import {addLiquidAsset} from "../actions";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  assets: state.assets
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addAsset: () => {
    dispatch(addLiquidAsset('foo', 500));
  }
});

let SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
