/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

interface IconFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentProps<typeof Image>;
  children?: React.ReactNode;
}
export default function IconFlex({ icon, children, ...props }: IconFlexProps) {
  return (
    <div className="flex items-start" {...props}>
      <Image className="mr-1.5 pt-0.5 invert-[60%] filter" {...icon} />
      <div>{children}</div>
    </div>
  );
}
