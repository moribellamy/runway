// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../reducers';
import AddExpenseForm from '../components/AddExpenseForm';

const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(AddExpenseForm);
