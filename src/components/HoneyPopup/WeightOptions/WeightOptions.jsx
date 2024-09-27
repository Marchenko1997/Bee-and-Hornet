// src/components/WeightOptions/WeightOptions.jsx
import css from './WeightOptions.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const WeightOptions = ({ selectedWeight, onWeightChange, category }) => {
  // Определение доступных весов в зависимости от категории продукта
  const weights = (() => {
    switch (category) {
      case 'Мед з горіхами':
        return ['250 мл'];
      case 'Стільники':
        return ['100 г'];
      case 'Пилок':
        return ['100 г'];
      default:
        return ['0,25 л', '0,5 л', '1 л', '2 л', '3 л'];
    }
  })();

  return (
    <div className={css.qualityDetails}>
      <div className={css.productWeight}>
        <span className={css.weightLabel}>Вага</span>
        <div className={css.weightOptions}>
          {weights.map((weight) => {
            const isSelected = weight === selectedWeight;
            return (
              <button
                key={weight}
                onClick={() => onWeightChange(weight)}
                className={clsx({ [css.selected]: isSelected })}
              >
                {weight}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

WeightOptions.propTypes = {
  selectedWeight: PropTypes.string.isRequired,
  onWeightChange: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default WeightOptions;
