import css from "./WeightOptions.module.css";
import PropTypes from "prop-types";

const weights = ["0,25 л", "0,5 л", "1,0 л", "2,0 л", "3,0 л"];

const WeightOptions = ({ selectedWeight, onWeightChange }) => {
  return (
    <div className={css.qualityDetails}>
      <div className={css.productWeight}>
        <span>Вага</span>
        <div className={css.weightOptions}>
          {weights.map((weight) => {
            const isSelected = weight === selectedWeight;

            return (
              <button
                key={weight}
                onClick={() => onWeightChange(weight)}
                className={`${isSelected ? css.selected : ""}`}
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
};

export default WeightOptions;
