import * as actions from './index';

describe('actions', () => {
  it('resize should fire a resize event.', () => {
    expect(actions.resizeRunwayChart(1, 2)).toEqual({
      type: 'RESIZE_RUNWAY_CHART',
      width: 1,
      height: 2
    });
  });
});
