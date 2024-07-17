import clsx from 'clsx';
import css from './SectionMain.module.css';
import PropTypes from 'prop-types';

const SectionMain = ({ children, className, ...props }) => {
  return (
    <section className={clsx(css.sectionMain, className && className)} {...props}>
      {children}
    </section>
  );
};

SectionMain.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

export default SectionMain;
