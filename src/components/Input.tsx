import React, { ChangeEvent } from "react";

type InputProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (newValue: string) => void;
};

function Input({ label, value, placeholder, onChange }: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    event.preventDefault();
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
