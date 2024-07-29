import cn from "classnames";
import s from "./Checkbox.module.scss";

function Checkbox({ name, value, checked, onChange, children }) {
  return (
    <label className={cn("text_small", s.checkboxLabel)}>
      <input
        className={s.checkbox}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={s.checkboxTitle}>{children}</span>
    </label>
  );
}

export default Checkbox;
