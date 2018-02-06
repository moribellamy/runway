import layout from './layout';

describe('layout reducer', () => {
  it('should handle initial state', () => {
    expect(layout(undefined, {})).toEqual({});
  });

  it('should handle ADD_TODO', () => {
    expect(
      layout(
        {},
        {
          type: 'RESIZE_RUNWAY_CHART',
          width: 1,
          height: 2
        }
      )
    ).toEqual({
      runwayChartHeight: 2,
      runwayChartWidth: 1
    });
  });
});
