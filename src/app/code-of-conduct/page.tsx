import styles from "./CodeOfConduct.module.scss";
import ptStyles from "@/styles/pt.module.scss";
import { siteContent } from "@/data/content";

export default function CodeOfConduct() {
  const { codeOfConduct } = siteContent;

  return (
    <div className={ptStyles.legalContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>{codeOfConduct.title}</h1>
        <p className={styles.subtitle}>{codeOfConduct.subtitle}</p>
      </div>

      <div className={styles.content}>
        {codeOfConduct.sections.map((section) => (
          <section key={section.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.textContent}>
              {section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {codeOfConduct.labels.enforcementTitle}
          </h2>
          <div className={styles.textContent}>
            <p>{codeOfConduct.labels.enforcementDescription}</p>

            <div className={styles.guidelines}>
              {codeOfConduct.guidelines.map((guideline) => (
                <div key={guideline.level} className={styles.guideline}>
                  <h3 className={styles.guidelineTitle}>
                    {guideline.level}. {guideline.title}
                  </h3>
                  <div className={styles.guidelineContent}>
                    <p>
                      <strong>{codeOfConduct.labels.communityImpact}</strong>{" "}
                      {guideline.impact}
                    </p>
                    <p>
                      <strong>{codeOfConduct.labels.consequence}</strong>{" "}
                      {guideline.consequence}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {codeOfConduct.labels.attributionTitle}
          </h2>
          <div className={styles.textContent}>
            {codeOfConduct.attribution.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
