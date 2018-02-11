// @flow

import React from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import { Expense } from '../reducers/finance';
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

function AddExpenseForm({ addExpense }: Args) {
  function maybeError(formApi, fieldName) {
    let msg = formApi.errors[fieldName];
    if (!_.isEmpty(msg)) {
      return <small className="form-text text-muted">{msg}</small>;
    }
    return <div />;
  }

  return (
    <div>
      <Form
        validateError={errorValidator}
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
              <label htmlFor="name">Name</label>
              <Text field="name" id="name" className="form-control" />
              {maybeError(formApi, 'name')}
              <label htmlFor="amount">Amount</label>
              <Text field="amount" id="amount" className="form-control" />
              {maybeError(formApi, 'amount')}
              <label htmlFor="schedule">Schedule</label>
              <Text field="schedule" id="schedule" className="form-control" />
              {maybeError(formApi, 'schedule')}
              <label htmlFor="interest">Interest</label>
              <Text
                field="interest"
                id="interest"
                className="form-control"
              />
              {maybeError(formApi, 'interest')}
              <label htmlFor="interestSchedule">Interest Schedule</label>
              <Text field="interestSchedule" id="interestSchedule" className="form-control" />
              {maybeError(formApi, 'interestSchedule')}
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
