// @flow

import { combineReducers } from 'redux';
import layout from './layout';
import finance from './finance/index';

/**
 * The main reducer, per the react-redux development pattern.
 *
 * Documentation for each sub-reducer is available in the corresponding JS file.
 */
const reducers = {
  /**
   * Basic state on the UI/UX.
   */
  layout,
  /**
   * Any data related to the actual computation of runway.
   */
  finance
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
