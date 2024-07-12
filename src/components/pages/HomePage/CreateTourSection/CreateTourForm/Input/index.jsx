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
