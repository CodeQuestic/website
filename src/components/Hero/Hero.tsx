"use client";

import Image from "next/image";
import Button from "../Buttons/Buttons";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to CodeQuestic✨</h1>
          <p>Your open-source destination to build, learn and contribute!</p>
          <p className={styles.mission}>
            Whether {"you're"} writing your first line of code or crafting
            production-grade systems, you belong here! ❤️
          </p>

          <div className={styles.actions}>
            <Button
              href="https://github.com/CodeQuestic"
              styleType="primary"
              type="button"
            >
              🚀 Star on GitHub
            </Button>

            <Button
              href="https://github.com/orgs/CodeQuestic/repositories"
              styleType="outline"
              type="button"
            >
              🔎 Explore Projects
            </Button>
          </div>

          <div className={styles.highlights}>
            <span>⚒️ Dev utilities to boost productivity</span>
            <span>📘 Beginner-friendly repositories</span>
            <span>🧩 Real-world apps</span>
            <span>🫂 Friendly, collaborative community</span>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src="/hero.svg"
            alt="CodeQuestic Hero Illustration"
            width={500}
            height={500}
            priority={true}
            className={styles.illustration}
          />
        </div>
      </div>
    </section>
  );
}
