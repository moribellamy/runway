// @flow

import type { Action } from '../actions';

type showType = 'RUNWAY_TABLE' | 'RUNWAY_CHART';

export class LayoutState {
  show: showType;

  constructor(show: showType) {
    this.show = show;
  }
}

const initialState = new LayoutState('RUNWAY_TABLE');

const layout = (state: LayoutState = initialState, action: Action): LayoutState => {
  switch (action.type) {
    case 'SHOW_RUNWAY_TABLE':
      return new LayoutState('RUNWAY_TABLE');
    case 'SHOW_RUNWAY_CHART':
      return new LayoutState('RUNWAY_CHART');
    default:
      return state;
  }
};

export default layout;
