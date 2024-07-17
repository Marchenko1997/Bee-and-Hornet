import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './MainTitle.module.css';

const MainTitle = ({ title, className, ...props }) => {
  return (
    <h2
      className={clsx(css.title, className)}
      {...props}
    >
      {title}
    </h2>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MainTitle;
