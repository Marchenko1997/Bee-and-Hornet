import { createContext, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import  ModalBackdrop  from '../shared/ModalBackdrop/ModalBackdrop.jsx';
import { ANIMATION } from '../shared/constants/index.js';
import Proptypes from 'prop-types';

export const ModalConext = createContext();
const modalRoot = document.querySelector('#modal-root');

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
   const handleSetModal = useCallback((modal = null) => {
     setModal(modal); // Сначала обновляем состояние, чтобы добавить модальное окно
   }, []);

  return (
    <ModalConext.Provider value={handleSetModal}>
      {children}
      {modal &&
        createPortal(
          <ModalBackdrop onClose={() => handleSetModal(null)}>
            {modal}
          </ModalBackdrop>,
          modalRoot
        )}
    </ModalConext.Provider>
  );
};

ModalProvider.propTypes = {
  children: Proptypes.node.isRequired,
}