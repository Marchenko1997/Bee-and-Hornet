
import { Field, ErrorMessage, useFormikContext } from 'formik';
import css from './DeliveryInfo.module.css';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { useNovaPoshta } from '../../../hooks/useNovaPoshta'; 
import {
  deliveryTypeOptions,
  defaultOptionsForLocationSelect,
}  from '../../../dataForNovaPoshta/selectCities'

const DeliveryInfo = () => {
  const { setFieldValue, setFieldTouched, values } = useFormikContext();

  // Проверка наличия location и cityId
  const cityId = values.location ? values.location.cityId : null;

  const {
    divisions,
    valueForSelect,
    setValueForSelect,
    getSettlementsList,
    getDivisionsList,
  } = useNovaPoshta(values.deliveryType, cityId);

  return (
    <div className={css.deliveryInfo}>
      <h3 className={css.deliveryTitle}>
        Вкажіть адресу доставки (Нова пошта):
      </h3>
      <div className={css.deliverySelection}>
        <label>
          <Field
            as="select"
            name="deliveryType"
            className={css.inputContactInfo}
          >
            <option value="Відділення">Доставка до відділення</option>
            <option value="Двері">Доставка до дверей</option>
          </Field>
          <ErrorMessage
            name="deliveryType"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <label>
          <AsyncSelect
            isDisabled={!values.deliveryType}
            placeholder="Оберіть населений пункт"
            value={valueForSelect.locationSelect}
            defaultOptions={defaultOptionsForLocationSelect}
            loadOptions={getSettlementsList}
            loadingMessage={() =>
              'Зачекайте, будь ласка, триває завантаження...'
            }
            components={{ DropdownIndicator: () => null }}
            styles={{ /* Настройте стили по вашему усмотрению */ }}
            onMenuClose={() => setFieldTouched('location', true)}
            onChange={(selectOption) => {
              setFieldValue('location', selectOption.value);
              setFieldValue('branch', '');
              setValueForSelect((prev) => ({
                ...prev,
                locationSelect: [selectOption],
                addressSelect: [],
              }));
            }}
          />
          <ErrorMessage
            name="location"
            component="span"
            className={css.errorMessage}
          />
        </label>

        {values.deliveryType === 'Доставка до дверей' ? (
          <label>
            <Field
              as="textarea"
              name="branch"
              placeholder="Введіть адресу доставки"
              className={css.inputContactInfo}
            />
            <ErrorMessage
              name="branch"
              component="span"
              className={css.errorMessage}
            />
          </label>
        ) : (
          <AsyncSelect
            isDisabled={!cityId} // Используем проверенную переменную
            placeholder="Оберіть відділення"
            value={valueForSelect.addressSelect}
            defaultOptions={divisions}
            loadOptions={getDivisionsList}
            loadingMessage={() =>
              'Зачекайте, будь ласка, триває завантаження...'
            }
            components={{ DropdownIndicator: () => null }}
            styles={{ /* Настройте стили по вашему усмотрению */ }}
            onMenuClose={() => setFieldTouched('branch', true)}
            onChange={(selectOption) => {
              setFieldValue('branch', selectOption.value);
              setValueForSelect((prev) => ({
                ...prev,
                addressSelect: [selectOption],
              }));
            }}
          />
        )}

        <label>
          <Field
            as="textarea"
            name="comment"
            placeholder="Додати коментар до замовлення"
            className={css.inputContactInfo}
          />
          <ErrorMessage
            name="comment"
            component="span"
            className={css.errorMessage}
          />
        </label>
      </div>
    </div>
  );
};

export default DeliveryInfo;
