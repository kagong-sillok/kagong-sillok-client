interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: 'DEFAULT' | 'ROUND_DEFAULT';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
export default function Button({
  type,
  children,
  className,
  disabled = false,
  ...props
}: ButtonProps) {
  const buttonStyle = {
    DEFAULT:
      'bg-black py-4 text-button1 text-white active:bg-opacity-80 disabled:bg-opacity-10 disabled:text-black',
    ROUND_DEFAULT:
      'rounded-full border border-black bg-white py-[11px] text-button2 text-black active:bg-opacity-10 disabled:bg-opacity-20 disabled:border-opacity-20',
  }[type];

  return (
    <button
      className={`w-full disabled:text-opacity-40 ${buttonStyle} ${className ?? ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
