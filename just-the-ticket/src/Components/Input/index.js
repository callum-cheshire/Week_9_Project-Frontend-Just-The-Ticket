const Input = ({handleChange, htmlName, type, inputClassName, autoComplete, placeholder, value, containerClassName, label}) => {
  return ( 
    <div className={containerClassName}>
      <label htmlFor={htmlName}>{label}</label>
      <input 
        type={type} 
        className={inputClassName}
        autoComplete={autoComplete} 
        placeholder={placeholder}
        name={htmlName} 
        id={htmlName}
        onChange={handleChange}
        value={value}
        required
        />
  </div>
   );
}
 
export default Input;