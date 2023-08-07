import { Spacing } from '@/components';

interface IconFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  iconNode: React.ReactNode;
  textNode: React.ReactNode;
}
export default function IconFlex({ iconNode, textNode, ...props }: IconFlexProps) {
  return (
    <div className="flex" {...props}>
      <div>
        <Spacing size={2} />
        <div className="relative h-4 w-4 invert-[60%] filter">{iconNode}</div>
      </div>
      <Spacing size={6} direction="horizontal" />
      <div>{textNode}</div>
    </div>
  );
}
