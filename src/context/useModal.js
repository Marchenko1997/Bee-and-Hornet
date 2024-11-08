import { useContext } from 'react';
import { ModalConext } from './ModalProvider';

export const useModal = () => {
  const context = useContext(ModalConext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context.closeModal;
};
