import TextField from "../form/TextField";

interface CardProps {
  cardPosition: { top: number; left: number };
}
  
function FilterForm({ cardPosition }: CardProps) {
  return (
    <div
      className="filter-form"
      style={{
      position: 'absolute',
      top: cardPosition.top,
      left: cardPosition.left,
    }}>
      <TextField
        label="Username"
        placeholder="User"
        borderRadius="8px"
        // name="username"
      />
      <TextField
        label="Email"
        placeholder="Email"
        borderRadius="8px"
        type="email"
        // name="username"
      />
    </div>
  );
}

export default FilterForm;
  