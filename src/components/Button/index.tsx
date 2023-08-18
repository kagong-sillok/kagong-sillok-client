import cn from '@/utils/cn';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'DEFAULT' | 'ROUND_DEFAULT';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}
export default function Button({
  variant = 'DEFAULT',
  children,
  className,
  disabled = false,
  fullWidth = true,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center px-8',
        {
          'bg-black py-4 text-button1 text-white active:bg-bk80 disabled:bg-bk10 disabled:text-bk40':
            variant === 'DEFAULT',
          'rounded-full border border-black py-[11px] text-button2 text-black active:bg-bk10 disabled:border-bk20':
            variant === 'ROUND_DEFAULT',
          'w-full': fullWidth,
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
