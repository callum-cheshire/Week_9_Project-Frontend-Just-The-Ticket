const Input = ({
  handleChange,
  htmlName,
  type,
  inputClassName,
  autoComplete,
  placeholder,
  value,
  containerClassName,
  label,
  min,
}) => {
  return (
    <div className={containerClassName}>
      <label htmlFor={htmlName}>{label}</label>
      <input
        className={inputClassName}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        name={htmlName}
        id={htmlName}
        onChange={handleChange}
        value={value}
        min={min}
        required
      />
    </div>
  );
};

export default Input;
