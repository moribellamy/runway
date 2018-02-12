// @flow

import React from 'react';
import type { Asset } from '../reducers/finance';
import './Sidebar.css';
import { showAddExpenseModal } from '../actions';
import { Expense } from '../reducers/finance';

type ArgTypes = {
  assets: Array<Asset>,
  expenses: Array<Expense>,
  checking: Asset,
  setChecking: any => void,
  showRunwayTable: () => void,
  showRunwayChart: () => void,
  calculate: () => void,
  showAddExpenseModal: () => void
};

function Sidebar({
  assets,
  expenses,
  checking,
  setChecking,
  showRunwayTable,
  showRunwayChart,
  calculate,
  showAddExpenseModal
}: ArgTypes) {
  let expCounter = 0;
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
        {expenses.map(expense => (
          <div className="card top-margin" key={'expense-' + expCounter++}>
            <div className="card-header bg-danger">{expense.name}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{expense.amount}</li>
            </ul>
          </div>
        ))}
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
        <br />
        <button className="btn btn-info top-margin" onClick={showAddExpenseModal}>
          show modal
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
