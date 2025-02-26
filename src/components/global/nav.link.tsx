import Link from "next/link";
import { FC, ReactNode } from "react";

type INavLinkProps = {
  href: string;
  children: ReactNode;
};

export const NavLink: FC<INavLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6dd5ed] transition-all group-hover:w-full" />
    </Link>
  );
};
