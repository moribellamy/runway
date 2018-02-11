// @flow

import React from 'react';
import { LayoutState } from '../../reducers/layout';
import ReactModal from 'react-modal';
import AddExpenseForm from './AddExpenseForm';
import type { showType } from '../../reducers/layout';
import AddExpenseFormContainer from '../../containers/AddExpenseFormContainer';

type Args = { layout: LayoutState, appElement: string };

function modalContentFromLayout(show: showType) {
  switch (show) {
    case 'ADD_EXPENSE_MODAL':
      return <AddExpenseFormContainer />;
    default:
      return null;
  }
}

export const Modal = ({ layout }: Args) => {
  let content = modalContentFromLayout(layout.show);
  return <ReactModal ariaHideApp={false} isOpen={content !== null}>{content}</ReactModal>;
};

export default Modal;
