import { FieldValues, UseFormRegister } from "react-hook-form";

export interface CheckboxProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  label: string;
}
