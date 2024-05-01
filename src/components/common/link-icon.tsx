import { cn } from "@/lib/utils";

type LinkIconProps = {
  label?: string;
  href: string;
  icon: React.FC<Props>;
} & Props;

export const LinkIcon: React.FC<LinkIconProps> = ({
  className,
  label,
  href,
  icon: Icon,
}) => {
  return (
    <a aria-label={label} href={href} target="_blank" rel="noopener noreferrer">
      <Icon
        className={cn(
          "h-6 w-6 opacity-40 hover:opacity-80 transition-opacity",
          className,
        )}
      />
    </a>
  );
};
