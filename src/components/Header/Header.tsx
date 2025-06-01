"use client";

import Link from "next/link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./Header.module.scss";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          CodeQuestic
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
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
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} onClick={handleLinkClick}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}