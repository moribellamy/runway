// @flow

import React from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import { Expense } from '../reducers/finance';
import later from 'later';

type Args = {
  addExpense: Expense => void
};

function errorValidator({name, amount, schedule, interest, interestSchedule}) {
  let retval = {};

  if (name && name.trim() === '') retval.name = 'A name is required.';
  if (isNaN(amount)) retval.amount = 'Amount must be numeric';
  let x = schedule && later.parse.text(schedule);
  if (isNaN(interest)) retval.interest = 'Interest must be numeric';
  let y = interestSchedule && later.parse.text(interestSchedule);
  let z = 3;

  return retval;
}

function AddExpenseForm({ addExpense }: Args) {
  // const decimalRegex = /\d+.\d+|[.]\d+|\d+/;
  const decimalRegex = '[0-9]+[.][0-9]+|[.][0-9]+|[0-9]+';
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
              <label htmlFor="amount">Amount</label>
              <Text field="amount" id="amount" className="form-control" pattern={decimalRegex} />
              <label htmlFor="schedule">Schedule</label>
              <Text field="schedule" id="schedule" className="form-control" />
              <label htmlFor="interest">Interest</label>
              <Text
                field="interest"
                id="interest"
                className="form-control"
                pattern={decimalRegex}
              />
              <label htmlFor="interestSchedule">Interest Schedule</label>
              <Text field="interestSchedule" id="interestSchedule" className="form-control" />
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
