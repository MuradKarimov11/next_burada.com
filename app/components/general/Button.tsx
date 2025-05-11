import { ButtonProps } from "@/types/buttonProps";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  disabled,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      className={`my-1 flex items-center justify-center gap-2 rounded-lg p-3 ${
        small ? "w-[250px]" : "w-full"
      } ${outline ? "border text-black" : "bg-black text-white"}`}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
