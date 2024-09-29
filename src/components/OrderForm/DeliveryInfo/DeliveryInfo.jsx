import { Field, useFormikContext } from "formik";
import css from "./DeliveryInfo.module.css";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { useNovaPoshta } from "../../../hooks/useNovaPoshta";
import {
  deliveryTypeOptions,
  defaultOptionsForLocationSelect,
} from "../../../dataForNovaPoshta/selectCities";
import SelectField from "../shared/SelectField/SelectField";
import DropdownIndicator from "../shared/DropDownIndicator/DropDownIndicator";
import { selectStyles } from "../helpers/index.js";
import InputField from "../shared/InputField/InputField";
import clsx from "clsx";

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
              onMenuClose={() => setFieldTouched("deliveryType", true)}
              onChange={(selectOption) => {
                setFieldValue("deliveryType", selectOption.value);
                setFieldValue("location", "");
                setFieldValue("branch", "");
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
                "Зачекайте, будь ласка, триває завантаження..."
              }
              components={{ DropdownIndicator }}
              styles={selectStyles}
              onMenuClose={() => setFieldTouched("location", true)}
              className={clsx({
                [css.invalid]: !values.location && values.deliveryType,
              })}
              onChange={(selectOption) => {
                setFieldValue("location", selectOption.value);
                setFieldValue("branch", "");
                setValueForSelect((prev) => ({
                  ...prev,
                  locationSelect: [selectOption],
                  addressSelect: [],
                }));
              }}
            />
          }
        />

        {values.deliveryType === "Доставка кур`єром" ? (
          <InputField
            name="branch"
            disabled={!cityId}
            placeholder="Введіть адресу доставки"
            wrapperClassName={clsx(css.inputWrapperDeliveryAd, {
              [css.invalid]: !values.branch && values.deliveryType,
            })}
            invalidClassName={css.errorMessage}
          />
        ) : (
          <SelectField
            name="branch"
            errorClassName={css.errorMessage}
            component={
              <AsyncSelect
                isDisabled={!cityId}
                placeholder="Оберіть відділення"
                value={!values.deliveryType ? [] : valueForSelect.addressSelect}
                defaultOptions={divisions}
                loadOptions={getDivisionsList}
                loadingMessage={() =>
                  "Зачекайте, будь ласка, триває завантаження..."
                }
                components={{ DropdownIndicator }}
                styles={selectStyles}
                className={clsx({
                  [css.invalid]: !values.branch && values.deliveryType,
                })}
                onMenuClose={() => setFieldTouched("branch", true)}
                onChange={(selectOption) => {
                  setFieldValue("branch", selectOption.value);
                  setValueForSelect((prev) => ({
                    ...prev,
                    addressSelect: [selectOption],
                  }));
                }}
              />
            }
          />
        )}

        <Field name="comment">
          {({ field, meta }) => (
            <div className={css.comment}>
              <textarea
                {...field}
                placeholder="Додати коментар до замовлення"
                className={css.textarea}
              />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
      </div>
    </div>
  );
};

export default DeliveryInfo;
