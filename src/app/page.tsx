`"use client";`;

import Image from "next/image";
import { siteContent } from "@/data/content";
import Button from "../components/Buttons/Buttons";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{siteContent?.home?.hero?.title}</h1>
            <p>{siteContent?.home?.hero?.description}</p>
            <p className={styles.mission}>{siteContent?.home?.hero?.mission}</p>

            <div className={styles.actions}>
              {siteContent?.home?.hero?.actions?.map((action) => (
                <Button
                  key={action?.href}
                  href={action?.href}
                  styleType={action?.styleType}
                  text={action?.text}
                  type="button"
                />
              ))}
            </div>

            <div className={styles.highlights}>
              {siteContent?.home?.hero?.highlights?.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
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
      <section className={styles.about}>
        <h1>About</h1>
      </section>
    </>
  );
}
