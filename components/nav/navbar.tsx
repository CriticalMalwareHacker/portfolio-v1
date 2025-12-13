"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavItem = {
  name: string;
  href: string;
  target?: string;
};

const navItems: NavItem[] = [
  { name: "-_-", href: "/" },
  { name: "work", href: "/work" },
  // Updated to point to your CV file
  { name: "resume", href: "/Tanay_resume.pdf", target: "_blank" },
];

const NavBar = () => {
  const path = usePathname();

  return (
    <div className="flex items-center shrink-0">
      {/* Added 'items-center' here to ensure children align perfectly on the cross-axis */}
      <nav className="flex gap-2 rounded-3xl px-1 py-2 items-center">
        {navItems.map(({ name, href, target }) => {
          const isActive = path === href;
          return (
            <div key={name} className="flex items-center">
              <Link
                className={
                  "relative flex items-center justify-center transition-all transform-gpu rounded-full px-3 py-2 " +
                  (isActive ? "" : "hover:opacity-50")
                }
                href={href}
                target={target}
              >
                {isActive && (
                  <motion.div
                    layoutId="active"
                    className="backdrop-blur-sm bg-[#f5f5f5] dark:bg-black/30 absolute inset-0"
                    style={{
                      borderRadius: 9999,
                    }}
                    transition={{ type: "spring", duration: "0.6" }}
                  />
                )}
                {/* 'leading-none' removes extra line-height space that often causes 'up and down' jitter */}
                <span className="relative z-10 leading-none">{name}</span>
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;