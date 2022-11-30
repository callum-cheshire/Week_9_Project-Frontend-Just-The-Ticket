/**
 * Input generates a component that takes user input and upon submit that information is submitted to the database in the form of a POST request. At this stage all inputs are rendered in our form.
 * 
 * @param {string} type 
 * @param {string} className 
 * @param {string} autoComplete
 * @param {string} placeholder
 * @param {string} name
 * @param {string} id
 * @param {function} onChange
 * @param {string} value
 * @param {string} required
 * @returns Component containing div with className={containerClassName}, which contains a label and an input
 */

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
