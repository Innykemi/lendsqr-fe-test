interface SelectProps {
  children: React.ReactNode;
  label?: string;
  name?: string;
  value?: any;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
  
function Select({ children, value, onChange, label, name, className }: SelectProps) {
  return (
    <div className="select-field">
      {label && (
        <label htmlFor={label}>{label}</label>
      )}
      <select value={value} name={name} onChange={onChange} className={className}>
        {children}
      </select>
    </div>
  );
}
  
export default Select;
  