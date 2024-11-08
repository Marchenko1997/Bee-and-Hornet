import { createContext, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalBackdrop from '../shared/ModalBackdrop/ModalBackdrop.jsx';
import Proptypes from 'prop-types';


export const ModalConext = createContext(); 
const modalRoot = document.querySelector('#modal-root');

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const handleSetModal = useCallback((content = null) => {
    setModalContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setModalContent(null);
  }, []);

  return (
    <ModalConext.Provider value={{ setModal: handleSetModal, closeModal }}>
      {children}
      {modalContent &&
        createPortal(
          <ModalBackdrop onClose={closeModal}>{modalContent}</ModalBackdrop>,
          modalRoot
        )}
    </ModalConext.Provider>
  );
};

ModalProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
