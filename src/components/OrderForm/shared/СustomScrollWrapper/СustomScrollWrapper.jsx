import 'overlayscrollbars/styles/overlayscrollbars.css';
import css from './СustomScrollWrapper.module.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const CustomScrollWrapper = ({ children, wrapClassName, showScrollBar }) => {
 
  const options = {
    scrollbars: {
      autoHide: showScrollBar ? 'scroll' : 'never', 
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
  showScrollBar: PropTypes.bool.isRequired,
};

export default CustomScrollWrapper;
