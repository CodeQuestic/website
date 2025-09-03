"use client";

import Image from "next/image";
import { siteContent } from "@/data/content";
import Button from "@/components/Buttons/Buttons";
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

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {siteContent?.home?.stats?.title}
          </h2>
          <div className={styles.statsGrid}>
            {siteContent?.home?.stats?.items?.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {siteContent?.home?.featured?.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {siteContent?.home?.featured?.subtitle}
          </p>
          <div className={styles.projectsGrid}>
            {siteContent?.home?.featured?.projects?.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.projectTech}>
                  {project.tech?.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectMeta}>
                  <a href={project.href} className={styles.projectLink}>
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className={styles.community}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {siteContent?.home?.community?.title}
          </h2>
          <p className={styles.communityDescription}>
            {siteContent?.home?.community?.description}
          </p>
          <div className={styles.communityActions}>
            {siteContent?.home?.community?.actions?.map((action, index) => (
              <Button
                key={index}
                href={action?.href}
                styleType={action?.styleType}
                text={action?.text}
                type="button"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
