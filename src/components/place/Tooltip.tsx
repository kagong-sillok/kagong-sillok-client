interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <div {...props}>
      <div className="relative inline-block rounded-[4px] bg-brown px-3 py-1.5 text-center">
        <div className="absolute left-1/2 top-[23px] h-2 w-2 -translate-x-1/2 rotate-45 rounded-[1px] bg-brown"></div>
        <p className="text-caption text-white">{children}</p>
      </div>
    </div>
  );
}
