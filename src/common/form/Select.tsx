interface CardProps {
  children: React.ReactNode;
  label: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
  
function Select({ children, value, onChange, label, name }: CardProps) {
  return (
    <div className="input-field">
      <label htmlFor={label}>{label}</label>
      <select value={value} name={name} onChange={onChange}>
        {children}
      </select>
    </div>
  );
}
  
export default Select;
  