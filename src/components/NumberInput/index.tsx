import React, { ChangeEvent, useState } from "react";

interface NumberInputProps {
  value: number;
  setValue: (value: number) => void;
  label: string;
}

const NumberInput = ({ value, setValue, label }: NumberInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") return setValue(0);

    if (isNaN(parseInt(event.target.value, 10))) return;

    const inputValue = event.target.value;
    setValue(parseInt(inputValue, 10));
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="numberInput"
        className="mb-2 text-center text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id="numberInput"
        type="number"
        value={value ?? ""}
        onChange={handleChange}
        className="w-full rounded-md border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default NumberInput;
