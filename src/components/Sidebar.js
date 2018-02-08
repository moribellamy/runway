import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ assets, addAsset }) => {
  return (
    <nav id="sidebar">
      <div className="container">
        <div className="card">
          <div className="card-header bg-success">Featured</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
      <button className="btn" onClick={addAsset}>
        doit
      </button>
      {JSON.stringify(assets)}
    </nav>
  );
};

Sidebar.propTypes = {
  assets: PropTypes.array.isRequired,
  addAsset: PropTypes.func.isRequired
};

export default Sidebar;
