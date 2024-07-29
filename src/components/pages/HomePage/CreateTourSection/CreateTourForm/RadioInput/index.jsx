import s from "./RadioInput.module.scss";

function RadioInput({ label, checked, name, value, onChange }) {
  return (
    <label className={s["create-tour-form__label-radiobtn"]}>
      <input
        className={s["create-tour-form__radiobtn"]}
        type="radio"
        name={name}
        checked={checked === value}
        value={value}
        onChange={onChange}
      />
      <span className={s["create-tour-form__radiobtn-title"]}>
        {label}
      </span>
    </label>
  );
}

export default RadioInput;
