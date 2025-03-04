import Link from "next/link";
import { FC, ReactNode } from "react";

type INavLinkProps = {
  href: string;
  onClick?: VoidFunction;
  children: ReactNode;
};

export const NavLink: FC<INavLinkProps> = ({ children, href, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="md:hover:text-green-dark md:font-bold transition-colors relative group"
    >
      {children}
      <span className="md:hidden absolute -bottom-1 left-0 w-0 h-0.5 bg-green-dark dark:bg-green-light transition-all group-hover:w-full" />
    </Link>
  );
};
