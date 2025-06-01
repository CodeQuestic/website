import styles from "../../styles/pt.module.scss";

export default function TermsOfService() {
  return (
    <div className={styles.legalContainer}>
      <h1 className={styles.title}>Terms of Service</h1>
      <p>
        <strong>Effective Date:</strong> {new Date().getFullYear()}
      </p>

      <p>
        Welcome to <strong>CodeQuestic</strong>, a community-driven open-source
        initiative. By accessing or using our website and services, you agree to
        comply with these Terms of Service. Please read them carefully.
      </p>

      <div>
        <h2 className={styles.subtitle}>Use of Content</h2>
        <p>
          All content, including project ideas, code snippets, and resources, is
          provided &quot;as is&quot; for informational and educational purposes only. You
          are free to use, modify, and share these ideas and code, provided you
          comply with the respective licenses and attribution requirements where
          applicable.
        </p>
        <p>
          You may not use our content in any manner that violates applicable
          laws or regulations, or that infringes on the rights of others.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Requests & Contributions</h2>
        <p>
          By submitting project requests, ideas, or contributions, you grant us
          a non-exclusive, worldwide, royalty-free license to use, display, and
          distribute your contributions in any manner related to our platform
          and community. We are not obligated to implement any suggestions or
          requests, and we may modify or reject submissions at our discretion.
        </p>
        <p>
          You retain ownership of your submissions and are responsible for
          ensuring they do not infringe upon the rights of others or contain
          prohibited content.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Community Guidelines</h2>
        <p>
          We value respectful and inclusive collaboration. Users are expected to
          engage constructively and professionally. Harassment, abuse, or
          offensive behavior will not be tolerated and may result in
          restrictions on participation.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Liability Disclaimer</h2>
        <p>
          CodeQuestic makes no warranties, express or implied, regarding the
          accuracy, completeness, or usefulness of the content provided. We are
          not liable for any damages arising from the use of content or ideas
          shared through our website or services. Use them at your own risk.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Changes to Terms</h2>
        <p>
          We reserve the right to modify or update these Terms of Service at any
          time. Changes will be effective upon posting, and continued use of the
          site constitutes acceptance of the updated terms. We encourage you to
          review this page periodically.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in
          accordance with the laws of your local jurisdiction. Any disputes
          arising under or in connection with these terms shall be subject to
          the exclusive jurisdiction of the courts in your location.
        </p>

        <p>
          If you have any questions about these Terms of Service, please reach
          out to us via our{" "}
          <a
            href="https://github.com/CodeQuestic"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>{" "}
          or other communication channels.
        </p>
      </div>
    </div>
  );
}