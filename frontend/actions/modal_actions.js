export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_REV_MODAL = 'OPEN_REV_MODAL'

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const openRevModal = revModal => {
  return {
    type: OPEN_REV_MODAL,
    revModal
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

