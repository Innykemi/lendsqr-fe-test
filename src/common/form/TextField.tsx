interface CardProps {
  label?: string;
  placeholder?: string;
  type?: string;
  borderRadius?: string;
}
    
function TextField({ label, placeholder, type="text", borderRadius="5px", ...rest }: CardProps) {
  return (
    <div className="text-field">
      {label &&
        <label className="input-label" htmlFor="">{label}</label>
      }
      <input
        className="text-input"
        placeholder={placeholder}
        type={type}
        style={{ borderRadius: borderRadius }} {...rest}
      />
    </div>
  );
}
    
export default TextField;
    