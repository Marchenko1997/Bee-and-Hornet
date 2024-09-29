

import { useState } from 'react';
import css from './ThanksForOrder.module.css';
import sprite from '../../../public/icons/sprite.svg';
import PropTypes from 'prop-types';

const ThanksForOrder = ({ handleClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClickClose = () => {
    setIsOpen(false);
    if (typeof handleClose === 'function') {
      handleClose();
    }
  };

  const handleClickBackdrop = () => {
    setIsOpen(false);
    if (typeof handleClose === 'function') {
      handleClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div>
          <div
            className={css.modalBackdrop}
            onClick={handleClickBackdrop}
          ></div>
          <div className={css.modalContainer}>
            <div className={css.closeBtn}>
              <button onClick={handleClickClose}>
                <svg className={css.closeIcon}>
                  <use xlinkHref={`${sprite}#cross-close`} />
                </svg>
              </button>
            </div>
            <div className={css.mainContent}>
              <div className={css.thanksContainer}>
                <h2 className={css.modalTitle}>Дякуємо!</h2>
                <p className={css.modalText}>
                  Ваше замовлення прийняте.
                  <br className={css.mobileBreak} /> Ми зв’яжемося з вами
                  <br /> найближчим часом для уточнення деталей.
                </p>
              </div>
              <div className={css.contacts}>
                <hr className={css.horizontalLine} />
                <ul className={css.contactsList}>
                  <li>
                    <a
                      className={css.contactsDetails}
                      href="mailto:marchenkohalyna888@gmail.com"
                    >
                      marchenkohalyna888@gmail.com
                    </a>
                  </li>
                  <li>
                    <a className={css.contactsDetails} href="tel:+380508844571">
                      +38 050 884 45 71
                    </a>
                  </li>
                  <div className={css.contactsIcons}>
                    <li>
                      <a href="https://t.me/Gmail_samel" target="_blank">
                        <svg width={32} height={32} className={css.icon}>
                          <use xlinkHref={`${sprite}#telegram`}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/bdzhola_ta_shershen"
                        target="_blank"
                      >
                        <svg width={32} height={32} className={css.icon}>
                          <use xlinkHref={`${sprite}#instagram`}></use>
                        </svg>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ThanksForOrder.propTypes = {
  handleClose: PropTypes.func,
};

export default ThanksForOrder;
