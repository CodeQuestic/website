import styles from "./NameConvention.module.scss";
import ptStyles from "@/styles/pt.module.scss";
import { siteContent } from "@/data/content";

export default function NameConvention() {
  const { nameConvention } = siteContent;

  return (
    <div className={ptStyles.legalContainer}>
      <h1 className={styles.title}>{nameConvention.title}</h1>

      <div className={styles.thankYou}>
        {nameConvention.intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {nameConvention.sections.map((section) => (
        <section key={section.id} className={styles.section}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>

          {section.categories.map((category, index) => (
            <div key={index}>
              <h3>{category.title}</h3>
              <p>
                <strong>{nameConvention.labels.format}</strong>{" "}
                <code>{category.format}</code>
              </p>
              <p>
                <strong>{nameConvention.labels.example}</strong>{" "}
                <code>{category.example}</code>
              </p>
            </div>
          ))}

          {section.note && (
            <div className={styles.note}>
              <div className={styles.noteTitle}>{section.note.title}</div>
              {section.note.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className={styles.section}>
        <h2>{nameConvention.summary.title}</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>{nameConvention.summary.tableHeaders.type}</th>
              <th>{nameConvention.summary.tableHeaders.format}</th>
              <th>{nameConvention.summary.tableHeaders.example}</th>
            </tr>
          </thead>
          <tbody>
            {nameConvention.summary.items.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>
                  <code>{item.format}</code>
                </td>
                <td>
                  <code>{item.example}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className={styles.warning}>
        <div className={styles.warningTitle}>
          {nameConvention.warning.title}
        </div>
        {nameConvention.warning.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
