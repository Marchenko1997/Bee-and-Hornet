
import { Field, ErrorMessage } from 'formik';
import css from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={css.contactInfo}>
      <h3 className={css.contactInfoTitle}>Контактні дані:</h3>
      <div className={css.inputWrapper}>
        <label className={css.inputlabel}>
          Ім'я
          <Field
            className={css.inputContactInfo}
            type="text"
            name="firstName"
            placeholder="Ім'я"
          />
          <ErrorMessage
            name="firstName"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <label className={css.inputlabel}>
          Прізвище
          <Field
            className={css.inputContactInfo}
            type="text"
            name="lastName"
            placeholder="Прізвище"
          />
          <ErrorMessage
            name="lastName"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <label className={css.inputlabel}>
          Телефон
          <Field
            className={css.inputContactInfo}
            type="text"
            name="phone"
            placeholder="+380"
          />
          <ErrorMessage
            name="phone"
            component="span"
            className={css.errorMessage}
          />
        </label>
      </div>
    </div>
  );
};

export default ContactInfo;
