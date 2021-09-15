import { OPEN_MODAL, CLOSE_MODAL, OPEN_REV_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case OPEN_REV_MODAL:
      return action.revModal
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalReducer;