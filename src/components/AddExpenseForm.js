// @flow

import React from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';

const statusOptions = [
  {
    label: 'Single',
    value: 'single'
  },
  {
    label: 'In a Relationship',
    value: 'relationship'
  },
  {
    label: "It's Complicated",
    value: 'complicated'
  }
];

function AddExpenseForm() {
  return (
    <div>
      <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="form2">
            <label htmlFor="firstName">First name</label>
            <Text field="firstName" id="firstName" />
            <label htmlFor="lastName">Last name</label>
            <Text field="lastName" id="lastName" />
            <RadioGroup field="gender">
              {group => (
                <div>
                  <label htmlFor="male" className="mr-2">
                    Male
                  </label>
                  <Radio group={group} value="male" id="male" className="mr-3 d-inline-block" />
                  <label htmlFor="female" className="mr-2">
                    Female
                  </label>
                  <Radio group={group} value="female" id="female" className="d-inline-block" />
                </div>
              )}
            </RadioGroup>
            <label htmlFor="bio">Bio</label>
            <TextArea field="bio" id="bio" />
            <label htmlFor="authorize" className="mr-2">
              Authorize
            </label>
            <Checkbox field="authorize" id="authorize" className="d-inline-block" />
            <label htmlFor="status" className="d-block">
              Relationship status
            </label>
            <Select field="status" id="status" options={statusOptions} />
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
