"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} CodeQuestic. All rights reserved.
          </p>

        <nav className={styles.nav} aria-label="Footer">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}