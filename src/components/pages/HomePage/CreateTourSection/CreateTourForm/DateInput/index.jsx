import cn from "classnames";
import InputElement from "../Input";
import styles from "./DateInput.module.scss";

const activeDateInputClass = styles["create-tour-form__input-date_has-value"];

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
          styles["create-tour-form__input-date"],
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
