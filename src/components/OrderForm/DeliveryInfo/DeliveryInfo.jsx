
import { Field, ErrorMessage, useFormikContext } from 'formik';
import css from './DeliveryInfo.module.css';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { useNovaPoshta } from '../../../hooks/useNovaPoshta'; 
import {
  deliveryTypeOptions,
  defaultOptionsForLocationSelect,
}  from '../../../dataForNovaPoshta/selectCities';
import SelectField from '../shared/SelectField/SelectField';
import DropdownIndicator from '../shared/DropDownIndicator/DropDownIndicator';
import { selectStyles } from '../helpers/index.js';

const DeliveryInfo = () => {
  const { setFieldValue, setFieldTouched, values } = useFormikContext();


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

        {/* Выбор типа доставки */}
        <SelectField
          name="deliveryType"
          errorClassName={css.errorMessage}
          component={
            <Select
              placeholder="Доставка до відділення"
              value={!values.deliveryType ? [] : valueForSelect.deliveryType}
              options={deliveryTypeOptions}
              components={{ DropdownIndicator }}
              styles={selectStyles}
              onMenuClose={() => setFieldTouched('deliveryType', true)}
              onChange={(selectOption) => {
                setFieldValue('deliveryType', selectOption.value);
                setFieldValue('location', '');
                setFieldValue('branch', '');
                setValueForSelect((prev) => ({
                  ...prev,
                  deliveryType: [selectOption],
                  locationSelect: [],
                  addressSelect: [],
                }));
              }}
            />
          }
        />

        {/* Асинхронный выбор населенного пункта */}
        <SelectField
          name="location"
          errorClassName={css.errorMessage}
          component={
            <AsyncSelect
              isDisabled={!values.deliveryType}
              placeholder="Оберіть населений пункт"
              value={!values.deliveryType ? [] : valueForSelect.locationSelect}
              defaultOptions={defaultOptionsForLocationSelect}
              loadOptions={getSettlementsList}
              loadingMessage={() =>
                'Зачекайте, будь ласка, триває завантаження...'
              }
              components={{ DropdownIndicator }}
              styles={selectStyles}
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
          }
        />

        {/* Поле для ввода адреса или выбора отделения в зависимости от типа доставки */}
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
          <SelectField
            name="branch"
            errorClassName={css.errorMessage}
            component={
              <AsyncSelect
                isDisabled={!cityId} // Используем проверенную переменную
                placeholder="Оберіть відділення"
                value={!values.deliveryType ? [] : valueForSelect.addressSelect}
                defaultOptions={divisions}
                loadOptions={getDivisionsList}
                loadingMessage={() =>
                  'Зачекайте, будь ласка, триває завантаження...'
                }
                components={{ DropdownIndicator }}
                styles={selectStyles}
                onMenuClose={() => setFieldTouched('branch', true)}
                onChange={(selectOption) => {
                  setFieldValue('branch', selectOption.value);
                  setValueForSelect((prev) => ({
                    ...prev,
                    addressSelect: [selectOption],
                  }));
                }}
              />
            }
          />
        )}

        {/* Поле для ввода комментария */}
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