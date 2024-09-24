import 'overlayscrollbars/styles/overlayscrollbars.css';
import styles from './CustomScrollWrapper.module.css'; 
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const CustomScrollWrapper = ({ children, wrapClassName }) => {
  return (
    <OverlayScrollbarsComponent
      element="div"
      className={clsx(styles.myScroll, wrapClassName && wrapClassName)}
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

CustomScrollWrapper.defaultProps = {
  wrapClassName: '', 
};


export default CustomScrollWrapper;
