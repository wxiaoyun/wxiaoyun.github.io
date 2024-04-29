import { cn } from "@/lib/utils";

type LinkIconProps = {
  href: string;
  icon: React.FC<Props>;
} & Props;

export const LinkIcon: React.FC<LinkIconProps> = ({
  className,
  href,
  icon: Icon,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon
        className={cn(
          "h-6 w-6 opacity-60 hover:opacity-40 transition-opacity",
          className,
        )}
      />
    </a>
  );
};
