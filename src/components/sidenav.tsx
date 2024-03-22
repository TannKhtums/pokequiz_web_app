"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-gray-50 justify-between shadow-md">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0">
        <SideNavLink href="/">Home</SideNavLink>
        <SideNavLink href="/settings">Settings</SideNavLink>
        <SideNavLink href="/learn">Learn</SideNavLink>
        <SideNavLink href="/game">Game</SideNavLink>
        <SideNavLink href="/compare">Compare</SideNavLink>
        <div className="hidden h-full w-full grow bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-4">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

type SideNaveLinkProps = {
  href: string;
  children: React.ReactNode;
};

function SideNavLink({ href, children }: SideNaveLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex h-[48px] w-[248px] items-center justify-center gap-2 rounded-lg bg-gray-50 p-3 ml-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
        pathname === href ? "bg-sky-100 text-blue-600" : ""
      } `}
    >
      {children}
    </Link>
  );
}
