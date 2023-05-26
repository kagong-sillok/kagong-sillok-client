import Image from 'next/image';

interface IconFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: {
    src: string;
    alt: string;
    size: number;
  };
  children?: React.ReactNode;
}
export default function IconFlex({ icon, children, ...props }: IconFlexProps) {
  return (
    <div className="flex items-start" {...props}>
      <Image
        src={icon.src}
        alt={icon.alt}
        width={icon.size}
        height={icon.size}
        className="mr-1.5 pt-0.5 invert-[60%] filter"
      />
      <div>{children}</div>
    </div>
  );
}
