import 'overlayscrollbars/styles/overlayscrollbars.css';
import css from './СustomScrollWrapper.module.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const CustomScrollWrapper = ({ children, wrapClassName }) => {
 
  console.log(css.myScroll); 

  return (
    <OverlayScrollbarsComponent
      element="div"
      className={clsx(css.myScroll, wrapClassName && wrapClassName)}
      options={{
        scrollbars: { autoHide: 'never', theme: 'no-theme' },
      }}
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
