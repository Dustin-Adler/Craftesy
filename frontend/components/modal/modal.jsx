import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UserLogin from '../session/sign_up_or_sign_in_container';
import ThankYouModal from '../thank_you/thank_you_modal';
import { appendOrRemoveScrollBarReplacement } from '../../helpers/scrollbar_calculator';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
      if (prevProps.modal !== this.props.modal) {
          setTimeout(() => { appendOrRemoveScrollBarReplacement(!!this.props.modal) }, 0);
      }
  }

  getComponent() {
    let component;
    switch (this.props.modal) {
      case 'login':
        component = <UserLogin/>;
        break;
      case 'thank-you':
        component = <ThankYouModal/>;
        break;
      default:
        component = null;
    }
    return component;
  }


  render() {
    const { modal, closeModal } = this.props;
    const component = this.getComponent();
  if (!modal) return null;
    return(
      <div
        className="modal-background"
        onClick={() => {
            closeModal();
          }}>
        <div 
          className="modal-child"
          onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);
