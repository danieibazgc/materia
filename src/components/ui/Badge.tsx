interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "urgency-alta" | "urgency-media" | "urgency-baja";
  className?: string;
}

const variantStyles = {
  default: "bg-gray-100 text-gray-600",
  brand: "bg-brand-light text-brand-dark",
  "urgency-alta": "bg-red-50 text-red-600",
  "urgency-media": "bg-amber-50 text-amber-600",
  "urgency-baja": "bg-gray-100 text-gray-500",
} as const;

const Badge = ({ children, variant = "default", className = "" }: BadgeProps) => {
  return (
    <span
      className={`${variantStyles[variant]} inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
