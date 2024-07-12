import styles from "./RadioInput.module.scss";

function RadioInput({ label, checked, name, value, onChange }) {
  return (
    <label className={styles["create-tour-form__label-radiobtn"]}>
      <input
        className={styles["create-tour-form__radiobtn"]}
        type="radio"
        name={name}
        checked={checked === value}
        value={value}
        onChange={onChange}
      />
      <span className={styles["create-tour-form__radiobtn-title"]}>
        {label}
      </span>
    </label>
  );
}

export default RadioInput;
