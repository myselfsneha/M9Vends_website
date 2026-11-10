
const variants = {
  primary:
    "bg-[#063D2B] text-[#F8F5E9] hover:bg-[#004D3B]",

  secondary:
    "bg-[#66D1C5] text-[#063D2B] hover:bg-[#087E83] hover:text-white",

  cta:
    "bg-[#087E83] text-white hover:bg-[#004D3B]",

  outline:
    "border border-[#087E83] bg-transparent text-[#087E83] hover:bg-[#087E83] hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        rounded-md px-6 py-3
        text-sm font-semibold tracking-wide
        shadow-sm
        transition-colors duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#087E83]
        focus-visible:ring-offset-2
        disabled:pointer-events-none
        disabled:opacity-50
        ${selectedVariant}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}