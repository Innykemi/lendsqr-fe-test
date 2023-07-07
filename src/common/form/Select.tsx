interface CardProps {
  children: React.ReactNode;
}
  
function Select({ children }: CardProps) {
  return (
    <div className="input-field">
      <label htmlFor="organization">Organization</label>
      <select value="select" name="organization">
        {children}
      </select>
    </div>
  );
}
  
export default Select;
  