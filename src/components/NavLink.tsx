"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps): JSX.Element | null {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={classNames(
        "relative flex items-center gap-3 py-2 transition-colors",
        isActive
          ? "text-app-gray-100"
          : "text-app-gray-400 hover:text-app-gray-200",
      )}
    >
      {isActive && (
        <motion.div
          aria-hidden="true"
          layoutId="active-link-indicator"
          className="absolute -left-4 h-6 w-1 rounded-full bg-app-gradient-vertical text-base font-bold"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      )}

      {children}
    </Link>
  );
}
