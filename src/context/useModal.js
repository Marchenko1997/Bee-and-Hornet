import { useContext } from 'react';
import { ModalConext } from './ModalProvider.jsx';

export const useModal = () => useContext(ModalConext);
