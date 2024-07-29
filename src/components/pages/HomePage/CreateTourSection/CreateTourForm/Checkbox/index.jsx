import cn from "classnames";
import s from "./Checkbox.module.scss";

function Checkbox({ name, value, checked, onChange, children }) {
  return (
    <label
      className={cn("text_small", s["create-tour-form__label-checkbox"])}
    >
      <input
        className={s["create-tour-form__checkbox"]}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={s["create-tour-form__checkbox-title"]}>
        {children}
      </span>
    </label>
  );
}

export default Checkbox;
