import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ assets, addAsset, setChecking, show, calculate}) => {
  return (
    <nav id="sidebar">
      <div className="container">
        <div className="card">
          <div className="card-header bg-success">Checking</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <input value={assets.checking.amount} onChange={x => setChecking(x.target.value)} />
              </li>
          </ul>
        </div>
      </div>
      <div className="container">
      <button className="btn btn-info top-margin" onClick={addAsset}>
        add asset
      </button><br/>
      <button className="btn btn-info top-margin" onClick={() => show('RUNWAY_TABLE')}>
        show runway table
      </button><br/>
      <button className="btn btn-info top-margin" onClick={() => show('RUNWAY_CHART')}>
        show chart
      </button><br/>
        <button className="btn btn-info top-margin" onClick={calculate}>
          calculate
        </button>
      </div>
      {JSON.stringify(assets)}
    </nav>
  );
};

Sidebar.propTypes = {
  assets: PropTypes.array.isRequired,
  addAsset: PropTypes.func.isRequired
};

export default Sidebar;
