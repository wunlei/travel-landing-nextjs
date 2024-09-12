import PropTypes from "prop-types";
import cn from "classnames";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
import s from "./Select.module.scss";

const activeSelectClass = s.selectSelected;

function SelectElement({
  title,
  value,
  name,
  placeholder,
  options,
  selectClasses = [],
  labelClasses = [],
  onChange,
}) {
  return (
    <div className={s.container}>
      <label className={cn(labelClasses)}>
        {title}
        <select
          className={cn(
            s.select,
            {
              [activeSelectClass]: Boolean(value),
            },
            selectClasses,
          )}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option disabled hidden value="">
            {placeholder}
          </option>
          {options.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </label>
      <ArrowDown className={s.selectArrow} />
    </div>
  );
}

export default SelectElement;

SelectElement.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectClasses: PropTypes.arrayOf(PropTypes.string),
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};
