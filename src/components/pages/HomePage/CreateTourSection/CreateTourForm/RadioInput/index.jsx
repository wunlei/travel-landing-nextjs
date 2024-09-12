import PropTypes from "prop-types";
import s from "./RadioInput.module.scss";

function RadioInput({ label, checked, name, value, onChange }) {
  return (
    <label className={s.label}>
      <input
        className={s.inputRadio}
        type="radio"
        name={name}
        checked={checked === value}
        value={value}
        onChange={onChange}
      />
      <span className={s.title}>{label}</span>
    </label>
  );
}

export default RadioInput;

RadioInput.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
