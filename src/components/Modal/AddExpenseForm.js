// @flow

import React from 'react';
import { StyledText, Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import { Expense } from '../../reducers/finance';
import later from 'later';
import _ from 'lodash';

type Args = {
  addExpense: Expense => void
};

function errorValidator({ name, amount, schedule, interest, interestSchedule }) {
  function validateScheduleString(str) {
    let errMsg = 'Must be a valid schedule string.';
    try {
      let parsed = later.parse.text(str);
      if (parsed.error !== -1) {
        return errMsg;
      }
      let schedule = later.schedule(parsed);
      if (schedule.isValid()) {
        return undefined;
      }
    } catch (e) {}
    return errMsg;
  }

  return {
    name: _.trim(name) === '' ? 'Must be given.' : undefined,
    amount:
      _.trim(amount) === ''
        ? 'Must be given.'
        : isNaN(amount) ? 'Amount must be numeric.' : undefined,
    schedule: validateScheduleString(schedule),
    interest:
      _.trim(interest) === ''
        ? 'Must be given.'
        : isNaN(interest) ? 'Amount must be numeric.' : undefined,
    interestSchedule: validateScheduleString(interestSchedule)
  };
}

// TODO this is ugly but leaving it out causes the form elements to jump around.
function successValidator(values, errors) {
  let retval = {};
  Object.keys(errors).forEach(key => {
    retval[key] = errors[key] === undefined ? '' : undefined;
  });
  return retval;
}

function AddExpenseForm({ addExpense }: Args) {
  return (
    <div>
      <Form
        validateError={errorValidator}
        validateSuccess={successValidator}
        onSubmit={({ name, amount, schedule, interest, interestSchedule }) => {
          let expense = new Expense(name, amount, schedule, interest, interestSchedule);
          addExpense(expense);
        }}
        onSubmitFailure={(errors, formApi, onSubmitError) => {
          console.log({ errors, onSubmitError });
        }}
      >
        {formApi => (
          <form onSubmit={formApi.submitForm} id="addExpenseForm">
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <StyledText field="name" id="name" className="form-control form-control-warning" />
              </div>
              <label htmlFor="amount">Amount</label>
              <StyledText field="amount" id="amount" className="form-control" />
              <label htmlFor="schedule">Schedule</label>
              <StyledText field="schedule" id="schedule" className="form-control" />
              <label htmlFor="interest">Interest</label>
              <StyledText field="interest" id="interest" className="form-control" />
              <label htmlFor="interestSchedule">Interest Schedule</label>
              <StyledText field="interestSchedule" id="interestSchedule" className="form-control" />
            </div>
            <button type="submit" className="mb-4 btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Form>
    </div>
  );
}

export default AddExpenseForm;
