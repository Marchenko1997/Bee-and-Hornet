import { useCallback, useEffect, useState } from 'react';
import css from './ModalBackdrop.module.css';
import clsx from 'clsx';
import { ANIMATION } from '../../shared/constants/index.js';

const ModalBackdrop = ({ children, onClose }) => {
  const [active, setActive] = useState(false);

  const dinamicStyle = clsx(css.backdrop, active && css.active);

  const handleCloseModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        setActive(false);
        setTimeout(() => {
          onClose();
        }, ANIMATION.DURATION); 
      }
    },
    [onClose]
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setActive(true);
    }, 0); 

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <div className={dinamicStyle} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalBackdrop;
