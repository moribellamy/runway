// @flow

import React from 'react';
import type { Action } from '../actions';

// TODO: DRY with actions.js SHOW_*.
export type showType = 'RUNWAY_TABLE' | 'RUNWAY_CHART' | 'ADD_EXPENSE_MODAL';

export class LayoutState {
  show: showType;

  constructor(show: showType) {
    this.show = show;
  }
}

const initialState = new LayoutState('RUNWAY_CHART');

const layout = (state: LayoutState = initialState, action: Action): LayoutState => {
  switch (action.type) {
    case 'SHOW_RUNWAY_TABLE':
      return new LayoutState('RUNWAY_TABLE');
    case 'SHOW_RUNWAY_CHART':
      return new LayoutState('RUNWAY_CHART');
    case 'SHOW_ADD_EXPENSE_MODAL':
      return new LayoutState('ADD_EXPENSE_MODAL');
    default:
      return state;
  }
};

export default layout;
