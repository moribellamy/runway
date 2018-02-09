import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ assets, checking, setChecking, showRunwayTable, showRunwayChart, calculate }) => {
  return (
    <nav id="sidebar">
      <div className="container">
        <div className="card">
          <div className="card-header bg-success">Checking</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <input value={checking.amount} onChange={x => setChecking(x.target.value)} />
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <br />
        <button className="btn btn-info top-margin" onClick={showRunwayTable}>
          show runway table
        </button>
        <br />
        <button className="btn btn-info top-margin" onClick={showRunwayChart}>
          show chart
        </button>
        <br />
        <button className="btn btn-info top-margin" onClick={calculate}>
          calculate
        </button>
      </div>
      {JSON.stringify(assets)}
    </nav>
  );
};

export default Sidebar;
