import PropTypes from 'prop-types';
import { Field } from 'formik';

const SelectField = ({ name, component, errorClassName }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <div style={{ position: 'relative' }}>
            {component}
            {meta.touched && !field.value ? (
              <div className={errorClassName}></div>
            ) : null}
          </div>
        );
      }}
    </Field>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,           
  component: PropTypes.element.isRequired,    
  errorClassName: PropTypes.string             
};

export default SelectField;
