import clsx from 'clsx';
import css from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ className, children }) => {
  return (
    <div className={clsx(css.container, className && className)}>{children}</div>
  );
};

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
  

export default Container;


