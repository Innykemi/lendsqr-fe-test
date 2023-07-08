import { useState } from 'react';
import TextField from '../form/TextField';
import SelectField from '../form/Select';
import Button from '../button/Button';

interface CardProps {
  onSubmit: (formData: {
    organization: string;
    username: string;
    email: string;
    date: string;
    phonenumber: string;
    status: string;
  }) => void;
  onReset: () => void;
}

function FilterForm({ onSubmit, onReset }: CardProps) {
  const [formData, setFormData] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phonenumber: '',
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData({
      organization: '',
      username: '',
      email: '',
      date: '',
      phonenumber: '',
      status: '',
    });
    onReset();
  };

  return (
    <form
      className="filter-form"
      onSubmit={handleSubmit}
      style={{
        position: 'absolute',
      }}
    >
      <SelectField label="Organization" name="organization" value={formData.organization} onChange={handleChange}>
        <option value=""></option>
      </SelectField>
      <TextField
        label="Username"
        placeholder="Username"
        borderRadius="8px"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        placeholder="Email"
        borderRadius="8px"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Date"
        placeholder="Date"
        borderRadius="8px"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <TextField
        label="Phone Number"
        placeholder="Phone Number"
        borderRadius="8px"
        type="tel"
        name="phonenumber"
        value={formData.phonenumber}
        onChange={handleChange}
      />
      <SelectField label="Status" name="status" value={formData.status} onChange={handleChange}>
        <option value="">Select</option>
        <option value="pending">Pending</option>
        <option value="inactive">Inactive</option>
        <option value="active">Active</option>
        <option value="blacklisted">Blacklisted</option>
      </SelectField>

      <Button type="button" onClick={handleReset}>
        Reset
      </Button>
      <Button type="submit">Filter</Button>
    </form>
  );
}

export default FilterForm;
