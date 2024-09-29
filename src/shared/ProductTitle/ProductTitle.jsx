
import PropTypes from 'prop-types';
import css from './ProductTitle.module.css';

const ProductTitle = ({ title }) => {
  
  const index = title.indexOf('натуральний');
  const mainTitle = title.substring(0, index);
  const secondTitle = title.substring(index);

  return (
    <h3 className={css.productTitleh3}>
      {mainTitle} <br /> {secondTitle}
    </h3>
  );
};

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductTitle;
