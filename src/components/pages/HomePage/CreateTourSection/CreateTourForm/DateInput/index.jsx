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
