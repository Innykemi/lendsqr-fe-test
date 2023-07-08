interface CardProps {
  label?: string;
  placeholder?: string;
  type?: string;
  borderRadius?: string;
  name?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
    
function TextField({ label, placeholder, onChange, value, type="text", name, borderRadius="5px", ...rest }: CardProps) {
  return (
    <div className="text-field">
      {label &&
        <label className="input-label" htmlFor="">{label}</label>
      }
      <input
        className="text-input"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ borderRadius: borderRadius }} {...rest}
      />
    </div>
  );
}
    
export default TextField;
    