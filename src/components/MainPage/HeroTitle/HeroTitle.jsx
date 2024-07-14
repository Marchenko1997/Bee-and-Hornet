
import PropTypes from 'prop-types';
import css from './HeroTitle.module.css';

const HeroTitle = ({ title }) => {
  return <h1 className={css.title}>{title}</h1>;
};

HeroTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeroTitle;

