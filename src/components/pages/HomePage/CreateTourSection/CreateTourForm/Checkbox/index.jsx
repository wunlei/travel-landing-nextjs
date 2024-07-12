import cn from "classnames";
import styles from "./Checkbox.module.scss";

function Checkbox({ name, value, checked, onChange, children }) {
  return (
    <label
      className={cn("text_small", styles["create-tour-form__label-checkbox"])}
    >
      <input
        className={styles["create-tour-form__checkbox"]}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles["create-tour-form__checkbox-title"]}>
        {children}
      </span>
    </label>
  );
}

export default Checkbox;
