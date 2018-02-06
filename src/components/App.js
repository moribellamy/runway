import React from 'react';
import Footer from './Footer';
import RunwayChart from '../containers/RunwayChart';
import { ResponsiveContainer } from 'recharts';
import './App.css';

const App = () => (
  <div className="app">
    <div className="row">
      <div className="column left">
        <Footer />
      </div>
      <div className="column right">
        <RunwayChart />
      </div>
    </div>
  </div>
);

export default App;
