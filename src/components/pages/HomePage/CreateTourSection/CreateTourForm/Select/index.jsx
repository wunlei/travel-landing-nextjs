import cn from "classnames";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
import styles from "./Select.module.scss";

const activeSelectClass = styles["create-tour-form__select_selected"];

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
    <div className={styles["create-tour-form__select-container"]}>
      <label className={cn(labelClasses)}>
        {title}
        <select
          className={cn(
            styles["create-tour-form__select"],
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
      <ArrowDown className={styles["create-tour-form__select-arrow"]} />
    </div>
  );
}

export default SelectElement;
