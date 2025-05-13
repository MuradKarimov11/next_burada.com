import { IconType } from "react-icons";

export interface ChoiceInputProps {
  text: string;
  icon: IconType;
  onClick: (value: string) => void;
  selected?: boolean;
}
