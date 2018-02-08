import { combineReducers } from 'redux';
import layout from './layout';
import runwaychart from './runwaychart';
import assets from './assets'

const reducer = combineReducers({
  layout,
  runwaychart,
  assets
});

export default reducer;
