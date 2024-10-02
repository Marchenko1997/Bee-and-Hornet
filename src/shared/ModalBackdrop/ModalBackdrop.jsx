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
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setActive(true);
      clearTimeout(id);
    }, ANIMATION.DURATION);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
      document.body.removeAttribute('style');
    };
  }, [handleCloseModal]);

  return (
    <div className={dinamicStyle} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalBackdrop;
