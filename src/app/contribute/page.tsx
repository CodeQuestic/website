"use client";

import Button from "@/components/Buttons/Buttons";
import styles from "./Contribute.module.scss";
import ptStyles from "@/styles/pt.module.scss";

export default function Contribute() {
  return (
    <div className={ptStyles.legalContainer}>
      <h1 className={styles.title}>
        Interested in contributing to CodeQuestic?
      </h1>

      <div className={styles.thankYou}>
        <p>First of all, thank you for taking the time to contribute! 🤙</p>
      </div>

      <p className={styles.subtitle}>
        The following is a set of guidelines for contributing to this
        repository. Before contributing, we encourage you to read our Code of
        Conduct.
      </p>

      <div className={styles.links}>
        <Button
          href="https://github.com/CodeQuestic/website/blob/main/.github/CODE_OF_CONDUCT.md"
          target="_blank"
          text="Code Of Conduct"
          styleType="outline"
        />
      </div>

      <section className={styles.section}>
        <h2>Contributing Guide ✨</h2>

        <h3>Forking the CodeQuestic Repository</h3>
        <p>
          Click the Fork button at the top right of any CodeQuestic repository's
          GitHub Page to create a copy in your account, or go directly to the
          Fork Page & click on Create Fork button. After successfully forking
          the repo, you'll be redirected to your copy of the CodeQuestic
          repository.
        </p>

        <h3>Cloning the CodeQuestic Repository</h3>
        <p>
          On your forked repo, click the button that says{" "}
          <span className={styles.highlight}>&lt;&gt; Code</span>. Under Local
          tab, it will open a dropdown menu. Copy the link in the input with the
          label HTTPS or GitHub CLI depending on your preferred cloning mode.
        </p>

        <p>
          For cloning via HTTPS, first create a folder on your system and open
          it in VS Code or any other code editor. Then, open the terminal inside
          this folder and run the following command to clone or have a local
          copy of the forked repository in this folder:
        </p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          git clone
          https://github.com/&lt;your-username&gt;/&lt;repository-name&gt;.git
        </div>

        <p>
          Here, replace <code>&lt;your-username&gt;</code> with your GitHub
          username and <code>&lt;repository-name&gt;</code> with the specific
          CodeQuestic repository name.
        </p>

        <p>
          You can also clone the forked repo using the GitHub CLI. To do this,
          run the following command:
        </p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          gh repo clone &lt;your-username&gt;/&lt;repository-name&gt;
        </div>
      </section>

      <section className={styles.section}>
        <h2>Setup the Development Environment</h2>
        <p>Ensure you have the following installed:</p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Dependency</th>
              <th>Version Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Node.js</td>
              <td>
                Version 18 or higher (recommended to use the latest LTS version)
              </td>
            </tr>
            <tr>
              <td>npm</td>
              <td>
                Latest version (ensure you're using the most recent release)
              </td>
            </tr>
          </tbody>
        </table>

        <p>Now, navigate to the root directory of the project and run:</p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          npm install
        </div>

        <p>Once installation is done, run the development server:</p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          npm run dev
        </div>

        <p>
          Now open your browser and navigate to{" "}
          <strong>http://localhost:3000</strong> to view the website.
        </p>

        <p>To create a production build of the website, run:</p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          npm run build
        </div>

        <p>To start the production server, run:</p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          npm start
        </div>
      </section>

      <section className={styles.section}>
        <h2>Making your Changes</h2>

        <div className={styles.warning}>
          <div className={styles.warningTitle}>IMPORTANT</div>
          <p>
            If there is an existing issue that you'd like to contribute to,
            request to be assigned to it before proceeding with any changes.
          </p>
          <p>
            If there isn't an existing issue for the feature or bug you wish to
            work on, you can create a new issue detailing the feature/bug and
            request to be assigned to it.
          </p>
          <p>
            Follow the naming conventions while creating the issue (e.g.,{" "}
            <strong>[Bug]: &lt;Short Description&gt;</strong>,
            <strong>[Feature]: &lt;Short Description&gt;</strong> or{" "}
            <strong>[Docs]: &lt;Short Description&gt;</strong>).
          </p>
        </div>

        <div className={styles.note}>
          <div className={styles.noteTitle}>Caution</div>
          <p>
            If there are no activity for 7 days then the issue will be
            unassigned and will be available for others to work on. So, make
            sure to be active and let the maintainers know if you need more time
            to work on the issue (provide the latest updates).
          </p>
        </div>

        <h3>Steps to Create a New Branch</h3>

        <h4>1. Ensure you are on the correct base branch</h4>
        <p>
          First, check that you're on the correct base branch (main) before
          creating a new branch.
        </p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          git checkout main
        </div>

        <h4>2. Pull the latest changes</h4>
        <p>
          Always pull the latest changes from the remote branch to ensure your
          branch is up to date.
        </p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          git pull origin main
        </div>

        <h4>3. Create a new branch</h4>
        <p>
          Use the git checkout command to create and switch to a new branch
          following the naming conventions.
        </p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          git checkout -b &lt;your-branch-name&gt;
        </div>

        <h4>4. Make your changes</h4>
        <p>
          Now that you're on your new branch, you can make the necessary code
          changes. After completing your changes, stage them for commit.
        </p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          git add .
        </div>

        <h4>5. Commit your changes</h4>
        <p>Write a meaningful commit message that summarizes your changes.</p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          git commit -m "Your commit message"
        </div>

        <h4>6. Push your changes to the remote repo</h4>
        <p>
          Once you've committed your changes, push your branch to the remote
          repository.
        </p>

        <div className={styles.codeBlock}>
          <div className={styles.terminal}>Terminal window</div>
          git push origin &lt;your-branch-name&gt;
        </div>
      </section>

      <section className={styles.section}>
        <h2>Opening a Pull Request</h2>

        <div className={styles.note}>
          <div className={styles.noteTitle}>Note</div>
          <p>
            You are to make only one contribution per pull request. It makes it
            easier to review and merge. If you want to add multiple
            contributions or if you have solved multiple issues, create separate
            pull requests for each.
          </p>
        </div>

        <h3>Steps to Open a Pull Request</h3>

        <ol>
          <li>Go to the repository on GitHub.</li>
          <li>
            Click on the <strong>Pull requests</strong> tab.
          </li>
          <li>
            Click on <strong>New Pull Request</strong>.
          </li>
          <li>
            Select the branch that contains your changes targeting the
            CodeQuestic's main branch.
          </li>
          <li>Ensure the title follows the naming convention.</li>
          <li>
            <strong>Add a Detailed Description</strong>
            <ul>
              <li>
                In the description field of the pull request, provide a detailed
                explanation of the changes.
              </li>
              <li>
                Describe what was changed, why it was changed, and any other
                relevant details.
              </li>
              <li>
                Use the correct way to link issues in the description of the PR
                by updating the issue number. Do not just add issue numbers
                everywhere and anywhere you feel like.
              </li>
            </ul>
          </li>
          <li>
            <strong>Submit the Pull Request:</strong> After filling out the
            title and description, click on "Create pull request".
          </li>
        </ol>

        <div className={styles.warning}>
          <div className={styles.warningTitle}>Don't forget</div>
          <p>
            Ensure your pull request complies with the repository's contribution
            guidelines before submission.
          </p>
        </div>
      </section>

      <div className={styles.congratulations}>
        <h2>Congratulations! 🎉</h2>
        <p>
          You have successfully contributed to the CodeQuestic repository. Your
          pull request will be reviewed by the maintainers, and if everything is
          in order, it will be merged into the main branch. If any reviews or
          changes are requested by the reviewers then please feel free to
          resolve them so that maintainers can merge your PR.
        </p>
        <p>
          <strong>Thank you for your contribution! 🙌</strong>
        </p>
      </div>
    </div>
  );
}
