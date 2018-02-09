import { combineReducers } from 'redux';
import layout from './layout';
import finance from './finance/index';

/**
 * The main reducer, per the react-redux development pattern.
 *
 * Documentation for each sub-reducer is available in the corresponding JS file.
 */
const reducer = combineReducers({
  /**
   * Basic state on the UI/UX.
   */
  layout,
  /**
   * Any data related to the actual computation of runway.
   */
  finance
});

export default reducer;
