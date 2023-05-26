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
      'bg-black py-4 text-button1 text-white active:bg-bk80 disabled:bg-bk10 disabled:text-bk40',
    ROUND_DEFAULT: `rounded-full border border-black py-[11px] text-button2 text-black disabled:border-bk20 ${
      disabled ? '' : 'active:bg-bk10'
    }`,
  }[type];

  return (
    <button
      className={`w-full disabled:text-bk40 ${buttonStyle} ${className ?? ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
