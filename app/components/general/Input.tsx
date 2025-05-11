"use client";

import { InputProps } from "@/types/inputProps";

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  disabled,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <input
      className={` w-full h-12 p-3 rounded-md outline-none my-2 ${
        errors[id] ? "border border-red-500" : "border border-slate-300"
      }`}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      {...register(id, { required })}
    />
  );
};

export default Input;
