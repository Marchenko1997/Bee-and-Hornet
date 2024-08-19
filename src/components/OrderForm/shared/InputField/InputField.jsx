import { useField } from 'formik';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const InputField = ({
  label,
  wrapperClassName,
  invalidClassName,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <input
        {...field}
        {...props}
        className={clsx(wrapperClassName, {
          [invalidClassName]: meta.touched && meta.error,
        })}
      />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  );
};

InputField.propTypes = {
  wrapperClassName: PropTypes.string,
  invalidClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputField;
