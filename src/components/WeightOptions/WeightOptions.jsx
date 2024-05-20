import css from './WeightOptions.module.css';
import PropTypes from 'prop-types';

const weights = [
    '0,25 л', '0,5 л', '1,0 л', '2,0 л', '3,0 л'];

const WeightOptions = ({selectedWeight, onWeightChange}) => {
  return (
    <div className={css.qualityDetails}>
    <div className={css.productWeight}>
      <span>Вага</span>
      <div className={css.weightOptions}>
       {weights.map((weight) => (
        <button key = {weight} onClick = { () => onWeightChange(weight)}
        className={weight === selectedWeight ? css.selected : ''}>{weight}</button>
    ) )}
     
      </div>
    </div>
    </div>
  );
};

WeightOptions.propTypes = {
    selectedWeight: PropTypes.string.isRequired, // selectedWeight должен быть строкой и обязательным
    onWeightChange: PropTypes.func.isRequired   // onWeightChange должен быть функцией и обязательным
  };

export default WeightOptions;