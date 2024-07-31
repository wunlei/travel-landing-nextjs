import PropTypes from "prop-types";

function InputElement({
  label,
  name,
  type,
  placeholder,
  inputClasses = [],
  labelClasses = [],
  value,
  onChange,
}) {
  return (
    <label className={labelClasses.join(", ")}>
      {label}
      <input
        className={inputClasses.join(", ")}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}

export default InputElement;

InputElement.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  inputClasses: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
