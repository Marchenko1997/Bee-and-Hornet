
import { Field, ErrorMessage } from 'formik';
import css from './DeliveryInfo.module.css';

const DeliveryInfo = () => {
  return (
    <div className={css.deliveryInfo}>
      <h3 className={css.deliveryTitle}>
        Вкажіть адресу доставки (Нова пошта):
      </h3>
      <div className={css.deliverySelection}>
        <label>
          <Field
            as="select"
            name="deliveryMethod"
            className={css.inputContactInfo}
          >
            <option value="Відділення">Доставка до відділення</option>
            <option value="Двері">Доставка до дверей</option>
          </Field>
        </label>
        <label>
          <Field as="select" name="city" className={css.inputContactInfo}>
            <option value="Оберіть населений пункт">Оберіть населений пункт</option>
            <option value="Київ, Київська обл.">м. Київ, Київська обл.</option>
            <option value="Дніпро, Дніпропетровська обл.">м. Дніпро, Дніпропетровська обл.</option>
            <option value="Харків, Харківська обл.">м. Харків, Харківська обл.</option>
            <option value="Запоріжжя, Запорізька обл.">м. Запоріжжя, Запорізька обл.</option>
            <option value="Одеса, Одеська обл.">м. Одеса, Одеська обл.</option>
            <option value="Кривий Ріг, Дніпропетровська обл.">м. Кривий Ріг, Дніпропетровська обл.</option>
            <option value="Львів, Львівська обл.">м. Львів, Львівська обл.</option>
            <option value="Вінниця, Вінницька обл.">м. Вінниця, Вінницька обл.</option>
          </Field>
          <ErrorMessage
            name="city"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <label>
          <Field as="select" name="branch" className={css.inputContactInfo}>
            <option value="">Обрати відділення</option>
            {/* Добавьте варианты для отделений здесь */}
          </Field>
          <ErrorMessage
            name="branch"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <label>
          <Field
            as="textarea"
            name="comment"
            placeholder="Додати коментар до замовлення"
            className={css.inputContactInfo}
          />
        </label>
      </div>
    </div>
  );
};

export default DeliveryInfo;
