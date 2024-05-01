import Link from "next/link";

export type LinkIconProps = {
  label?: string;
  href: string;
  icon: React.ReactNode;
} & Props;

export const LinkIcon: React.FC<LinkIconProps> = ({ label, href, icon }) => {
  return (
    <Link
      aria-label={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
};
