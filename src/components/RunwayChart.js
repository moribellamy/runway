// @flow

import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Point } from '../reducers/finance';

type Args = { data: Array<Point> };

const RunwayChart = ({ data }: Args) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {/*<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />*/}
        <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RunwayChart;
