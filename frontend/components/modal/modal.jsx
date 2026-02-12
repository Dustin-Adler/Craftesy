import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UserLogin from '../session/sign_up_or_sign_in_container';
import ThankYouModal from '../thank_you/thank_you_modal';

function Modal({modal, closeModal}) {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'login':
      component = <UserLogin/>;
      break;
    case 'thank-you':
      component = <ThankYouModal/>;
      break
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child"  onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mSTP = state => {
  return {
    modal: state.ui.modal,
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);