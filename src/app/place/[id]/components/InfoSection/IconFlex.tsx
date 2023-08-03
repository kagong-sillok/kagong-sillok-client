interface IconFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  children?: React.ReactNode;
}
export default function IconFlex({ icon, children, ...props }: IconFlexProps) {
  return (
    <div className="flex items-start" {...props}>
      <div className="mr-1.5 pt-0.5 invert-[60%] filter">{icon}</div>
      <div>{children}</div>
    </div>
  );
}
