import PropTypes from "prop-types";
import cn from "classnames";
import InputElement from "../Input";
import s from "./DateInput.module.scss";

const activeDateInputClass = s.inputHasValue;

function DateInput({
  label,
  name,
  value,
  labelClasses = [],
  inputClasses = [],
  onChange,
}) {
  return (
    <InputElement
      type="date"
      name={name}
      value={value}
      label={label}
      inputClasses={[
        cn(
          s.inputDate,
          { [activeDateInputClass]: Boolean(value) },
          inputClasses,
        ),
      ]}
      labelClasses={labelClasses}
      onChange={onChange}
    />
  );
}

export default DateInput;

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  inputClasses: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};
