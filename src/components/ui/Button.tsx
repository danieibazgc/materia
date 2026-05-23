interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-brand-light text-brand-dark hover:bg-brand-light/80",
  outline: "border border-gray-200 text-gray-700 hover:border-brand hover:text-brand",
  ghost: "text-gray-500 hover:text-brand",
} as const;

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-sm",
} as const;

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantStyles[variant]} ${sizeStyles[size]} rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
