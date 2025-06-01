import styles from "../../styles/pt.module.scss";

export default function PrivacyPolicy() {
  return (
    <div className={styles.legalContainer}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p>
        <b>Effective Date:</b> {new Date().getFullYear()}
      </p>
      <p>
        CodeQuestic values your privacy. This Privacy Policy explains how we
        handle any information you provide and outlines your rights.
      </p>
      <div>
        <h2 className={styles.subtitle}>Information We Collect</h2>
        <p>
          Currently, CodeQuestic does not collect personal data from visitors.
          However, if you submit a project request, suggestion, or contact us
          directly through available channels (such as GitHub or email), we may
          collect and store information you voluntarily provide, such as:
        </p><br />
        <ul className={styles.list}>
          <li>Your name (if given)</li>
          <li>Your email address</li>
          <li>Project details or requests</li>
        </ul><br />
        <p>
          This information is used solely for the purpose of responding to your
          inquiry or request.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Use of Information</h2>
        <p>
          We do not sell, rent, or share your personal data with third parties.
          Your information may be used for:
        </p><br />
        <ul className={styles.list}>
          <li>Responding to your requests</li>
          <li>Improving the website and services</li>
        </ul><br />
        <p>
          We currently <strong>do not use analytics tools</strong> or tracking
          cookies to collect personal or usage data. In the future, we may
          implement analytics tools to help understand website traffic and user
          interactions, but these tools will be configured to avoid identifying
          individual users.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Data Security</h2>
        <p>
          We take reasonable steps to protect the information you provide from
          unauthorized access, disclosure, or alteration. However, please note
          that no internet transmission or storage system is fully secure.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Third-Party Links</h2>
        <p>
          Our website may contain links to external sites (e.g., GitHub) not
          operated by us. We are not responsible for the privacy practices of
          these external sites. We recommend reviewing their respective
          policies.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Your Consent</h2>
        <p>
          By using this website, you consent to this Privacy Policy. If we
          update this policy in the future, changes will be posted on this page
          with an updated effective date.
        </p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how
          your information is handled, please reach out to us via our{" "}
          <a
            href="https://github.com/CodeQuestic"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>{" "}
          or through our provided channels.
        </p>
      </div>
    </div>
  );
}
