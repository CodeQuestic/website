import styles from "./Contribute.module.scss";
import ptStyles from "@/styles/pt.module.scss";
import { siteContent } from "@/data/content";

export default function Contribute() {
  const { contribute } = siteContent;

  return (
    <div className={ptStyles.legalContainer}>
      <h1 className={styles.title}>{contribute.title}</h1>

      <div className={styles.thankYou}>
        {contribute.thankYou.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <section className={styles.section}>
        <h2>{contribute.guide.title}</h2>

        {contribute.guide.steps.map((step, stepIndex) => (
          <div key={stepIndex}>
            {step.title && <h3>{step.title}</h3>}
            {step.content.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph.includes(contribute.labels.codeSearchPattern)
                  ? contribute.labels.codeButtonText
                      .split(contribute.labels.codeSearchPattern)
                      .map((part, partIndex) =>
                        partIndex === 0 ? (
                          part
                        ) : (
                          <span key={partIndex}>
                            <span className={styles.highlight}>
                              {contribute.labels.codeHighlight}
                            </span>
                            {part}
                          </span>
                        )
                      )
                  : paragraph.includes(contribute.labels.usernameSearchPattern)
                  ? contribute.labels.replaceUsernameText
                      .split(contribute.labels.usernameSearchPattern)
                      .map((part, partIndex) =>
                        partIndex === 0 ? (
                          part
                        ) : (
                          <span key={partIndex}>
                            <code>{contribute.labels.usernameCode}</code>
                            {part
                              .split(contribute.labels.repositorySearchPattern)
                              .map((subPart, subIndex) =>
                                subIndex === 0 ? (
                                  subPart
                                ) : (
                                  <span key={subIndex}>
                                    <code>
                                      {contribute.labels.repositoryCode}
                                    </code>
                                    {subPart}
                                  </span>
                                )
                              )}
                          </span>
                        )
                      )
                  : paragraph}
              </p>
            ))}
            {step.codeBlocks?.map((codeBlock, codeIndex) => (
              <div key={codeIndex} className={styles.codeBlock}>
                <div className={styles.terminal}>{codeBlock.label}</div>
                {codeBlock.code}
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>{contribute.setup.title}</h2>
        <p>{contribute.setup.description}</p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>{contribute.labels.dependency}</th>
              <th>{contribute.labels.versionRequirement}</th>
            </tr>
          </thead>
          <tbody>
            {contribute.setup.dependencies.map((dep, index) => (
              <tr key={index}>
                <td>{dep.name}</td>
                <td>{dep.version}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {contribute.setup.installation.map((step, index) => (
          <div key={index}>
            <p>
              {step.description.includes(
                contribute.labels.localhostSearchPattern
              )
                ? contribute.labels.localhostText
                    .split(contribute.labels.localhostSearchPattern)
                    .map((part, partIndex) =>
                      partIndex === 0 ? (
                        part
                      ) : (
                        <span key={partIndex}>
                          <strong>{contribute.labels.localhostUrl}</strong>
                          {part}
                        </span>
                      )
                    )
                : step.description}
            </p>
            {step.codeBlock && (
              <div className={styles.codeBlock}>
                <div className={styles.terminal}>{step.codeBlock.label}</div>
                {step.codeBlock.code}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>{contribute.changes.title}</h2>

        <div className={styles.warning}>
          <div className={styles.warningTitle}>
            {contribute.changes.warning.title}
          </div>
          {contribute.changes.warning.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph.includes(contribute.labels.bugSearchPattern)
                ? contribute.labels.namingConventionsText
                    .split(contribute.labels.bugSearchPattern)
                    .map((part, partIndex) =>
                      partIndex === 0 ? (
                        part
                      ) : (
                        <span key={partIndex}>
                          <strong>{contribute.labels.bugExample}</strong>
                          {part
                            .split(contribute.labels.featureSearchPattern)
                            .map((subPart, subIndex) =>
                              subIndex === 0 ? (
                                subPart
                              ) : (
                                <span key={subIndex}>
                                  <strong>
                                    {contribute.labels.featureExample}
                                  </strong>
                                  {subPart
                                    .split(contribute.labels.docsSearchPattern)
                                    .map((docPart, docIndex) =>
                                      docIndex === 0 ? (
                                        docPart
                                      ) : (
                                        <span key={docIndex}>
                                          <strong>
                                            {contribute.labels.docsExample}
                                          </strong>
                                          {docPart}
                                        </span>
                                      )
                                    )}
                                </span>
                              )
                            )}
                        </span>
                      )
                    )
                : paragraph}
            </p>
          ))}
        </div>

        <div className={styles.note}>
          <div className={styles.noteTitle}>
            {contribute.changes.note.title}
          </div>
          {contribute.changes.note.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {contribute.changes.branchSteps.map((step, index) => (
          <div key={index}>
            {step.title && <h3>{step.title}</h3>}
            {step.subtitle && <h4>{step.subtitle}</h4>}
            <p>{step.description}</p>
            {step.codeBlock && (
              <div className={styles.codeBlock}>
                <div className={styles.terminal}>{step.codeBlock.label}</div>
                {step.codeBlock.code}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>{contribute.pullRequest.title}</h2>

        <div className={styles.note}>
          <div className={styles.noteTitle}>
            {contribute.pullRequest.note.title}
          </div>
          {contribute.pullRequest.note.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {contribute.pullRequest.steps.map((step, stepIndex) => (
          <div key={stepIndex}>
            {step.title && <h3>{step.title}</h3>}
            {step.content.length > 0 && (
              <>
                {step.content.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {paragraph.includes(contribute.labels.createPRSearchPattern)
                      ? contribute.labels.submitPR
                          .split(contribute.labels.createPRSearchPattern)
                          .map((part, partIndex) =>
                            partIndex === 0 ? (
                              <strong key={partIndex}>{part}</strong>
                            ) : (
                              <span key={partIndex}>
                                {contribute.labels.createPRQuote}
                                {part}
                              </span>
                            )
                          )
                      : paragraph}
                  </p>
                ))}
              </>
            )}
            {step.list && (
              <>
                {step.title === contribute.labels.addDetailedDescription ? (
                  <ul>
                    {step.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <ol>
                    {step.list.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.includes(
                          contribute.labels.pullRequestsSearchPattern
                        )
                          ? contribute.labels.clickPullRequests
                              .split(
                                contribute.labels.pullRequestsSearchPattern
                              )
                              .map((part, partIndex) =>
                                partIndex === 0 ? (
                                  part
                                ) : (
                                  <span key={partIndex}>
                                    <strong>
                                      {contribute.labels.pullRequestsText}
                                    </strong>
                                    {part}
                                  </span>
                                )
                              )
                          : item.includes(contribute.labels.newPRSearchPattern)
                          ? contribute.labels.clickNewPR
                              .split(contribute.labels.newPRSearchPattern)
                              .map((part, partIndex) =>
                                partIndex === 0 ? (
                                  part
                                ) : (
                                  <span key={partIndex}>
                                    <strong>
                                      {contribute.labels.newPRText}
                                    </strong>
                                    {part}
                                  </span>
                                )
                              )
                          : item}
                      </li>
                    ))}
                  </ol>
                )}
              </>
            )}
          </div>
        ))}

        <div className={styles.warning}>
          <div className={styles.warningTitle}>
            {contribute.pullRequest.warning.title}
          </div>
          {contribute.pullRequest.warning.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <div className={styles.congratulations}>
        <h2>{contribute.congratulations.title}</h2>
        {contribute.congratulations.content.map((paragraph, index) => (
          <p key={index}>
            {paragraph.includes(contribute.labels.thankYouBold) ? (
              <strong>{paragraph}</strong>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
