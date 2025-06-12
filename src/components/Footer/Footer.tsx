"use client";

import Link from "next/link";
import { footerContent } from "@/data/content";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} {footerContent?.copy}
        </p>

        <nav className={styles.nav} aria-label="Footer">
          {footerContent?.links?.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.link}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
