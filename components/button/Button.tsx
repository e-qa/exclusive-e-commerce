import { IconType } from 'react-icons';

interface ButtonProps {
  type: 'submit' | 'button';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
  Icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled = false,
  onClick,
  className,
  Icon,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className}`}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
