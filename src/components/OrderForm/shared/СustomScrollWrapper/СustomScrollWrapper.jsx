import 'overlayscrollbars/styles/overlayscrollbars.css';
import css from './СustomScrollWrapper.module.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const CustomScrollWrapper = ({ children, wrapClassName }) => {
  const options = {
    scrollbars: {
      autoHide: 'never',
      theme: 'os-theme-dark',
    },
  };

  return (
    <OverlayScrollbarsComponent
      element="div"
      className={clsx(css.myScroll, wrapClassName && wrapClassName)}
      options={options}
      defer
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

CustomScrollWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  wrapClassName: PropTypes.string,
  
};

export default CustomScrollWrapper;
