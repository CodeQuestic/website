"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { headerContent } from "@/data/content";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {headerContent?.logo}
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {headerContent?.navLinks?.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${isActive(href) ? styles.active : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div
          className={`${styles.hamburger} ${
            isOpen ? styles.hamburgerOpen : ""
          }`}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
        </div>
      </div>

      <nav
        className={`${styles.mobileNav} ${isOpen ? styles.show : ""}`}
        aria-label="Mobile"
      >
        {headerContent?.navLinks?.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={handleLinkClick}
            className={`${isActive(href) ? styles.active : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
