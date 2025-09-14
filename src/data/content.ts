import { SiteContent } from "./contentType";

export const siteContent: SiteContent = {
  home: {
    hero: {
      title: "Welcome to CodeQuestic✨",
      description:
        "Your open-source destination to build, learn and contribute!",
      mission:
        "Whether you're writing your first line of code or crafting production-grade systems, you belong here! ❤️",
      actions: [
        {
          href: "https://github.com/CodeQuestic",
          target: "_blank",
          text: "🔮 GitHub",
          styleType: "primary",
        },
        {
          href: "/contribute",
          target: "_self",
          text: "Contribute",
          styleType: "outline",
        },
      ],
      highlights: [
        "⚒️ Dev utilities to boost productivity",
        "📘 Beginner-friendly repositories",
        "🧩 Real-world apps",
        "🫂 Friendly, collaborative community",
      ],
    },
    stats: {
      title: "Shaping Tomorrow, Together",
      items: [
        { number: "3+", label: "Community Members" },
        { number: "3+", label: "Open Source Projects" },
        { number: "400+", label: "Contributions Made" },
      ],
    },
    featured: {
      title: "Featured Projects",
      subtitle: "Discover our most popular and impactful projects",
      projects: [
        {
          name: "StatusQuest",
          description:
            "Visualize, Learn, and Master HTTP Status Codes with Real-World Simulations.",
          tech: ["TypeScript", "SCSS", "Js"],
          stars: 0,
          href: "https://github.com/CodeQuestic/statusquest",
          target: "_blank",
          text: "View Project",
        },
        {
          name: "Openprep",
          description:
            "Comprehensive collection of resources for various programming languages.",
          tech: ["Astro", "MDX", "Other"],
          stars: 189,
          href: "https://github.com/CodeQuestic/openprep",
          target: "_blank",
          text: "View Project",
        },
        {
          name: "Stoxcast",
          description:
            "Visualize and analyze stock market trends with real-time data from the website.",
          tech: ["Python", "Angular", "Docker"],
          stars: 156,
          href: "https://github.com/CodeQuestic/stoxcast",
          target: "_blank",
          text: "View Project",
        },
      ],
      actions: [
        {
          href: "https://github.com/orgs/CodeQuestic/repositories",
          target: "_blank",
          text: "🚀 View All Projects",
          styleType: "outline",
        },
      ],
    },
    community: {
      title: "Join Our Community",
      description:
        "Be part of something bigger. Let’s build, learn, and grow together.",
      actions: [
        {
          href: "https://github.com/CodeQuestic",
          target: "_blank",
          text: "Follow on GitHub 🔥",
          styleType: "primary",
        },
        {
          href: "https://github.com/orgs/CodeQuestic/discussions",
          target: "_blank",
          text: "Join the Discussion ⚡️",
          styleType: "outline",
        },
      ],
    },
  },
  codeOfConduct: {
    title: "Contributor Covenant Code of Conduct",
    subtitle: "Building a welcoming and inclusive community for everyone",
    sections: [
      {
        id: "pledge",
        title: "Our Pledge",
        content: [
          "We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.",
          "We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.",
        ],
      },
      {
        id: "standards",
        title: "Our Standards",
        content: [
          "Examples of behavior that contributes to a positive environment for our community include:",
        ],
        list: [
          "Demonstrating empathy and kindness toward other people",
          "Being respectful of differing opinions, viewpoints, and experiences",
          "Giving and gracefully accepting constructive feedback",
          "Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience",
          "Focusing on what is best not just for us as individuals, but for the overall community",
        ],
      },
      {
        id: "unacceptable",
        title: "Unacceptable Behavior",
        content: ["Examples of unacceptable behavior include:"],
        list: [
          "The use of sexualized language or imagery, and sexual attention or advances of any kind",
          "Trolling, insulting or derogatory comments, and personal or political attacks",
          "Public or private harassment",
          "Publishing other's private information, such as a physical or email address, without their explicit permission",
          "Other conduct which could reasonably be considered inappropriate in a professional setting",
        ],
      },
      {
        id: "responsibilities",
        title: "Enforcement Responsibilities",
        content: [
          "Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.",
          "Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.",
        ],
      },
      {
        id: "scope",
        title: "Scope",
        content: [
          "This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.",
        ],
      },
      {
        id: "enforcement",
        title: "Enforcement",
        content: [
          "Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at codequestic@gmail.com. All complaints will be reviewed and investigated promptly and fairly.",
          "All community leaders are obligated to respect the privacy and security of the reporter of any incident.",
        ],
      },
    ],
    guidelines: [
      {
        level: "1",
        title: "Correction",
        impact:
          "Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.",
        consequence:
          "A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.",
      },
      {
        level: "2",
        title: "Warning",
        impact: "A violation through a single incident or series of actions.",
        consequence:
          "A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.",
      },
      {
        level: "3",
        title: "Temporary Ban",
        impact:
          "A serious violation of community standards, including sustained inappropriate behavior.",
        consequence:
          "A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.",
      },
      {
        level: "4",
        title: "Permanent Ban",
        impact:
          "Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.",
        consequence:
          "A permanent ban from any sort of public interaction within the community.",
      },
    ],
    attribution: {
      text: [
        "This Code of Conduct is adapted from the Contributor Covenant, version 3.0, available at https://www.contributor-covenant.org/version/3/0/code_of_conduct/",
        "Community Impact Guidelines were inspired by Mozilla's code of conduct enforcement ladder.",
        "For answers to common questions about this code of conduct, see the FAQ at https://www.contributor-covenant.org/faq/",
        "Translations are available at https://www.contributor-covenant.org/translations/",
      ],
      links: [
        {
          text: "Contributor Covenant",
          url: "https://www.contributor-covenant.org/",
          isExternal: true,
        },
        {
          text: "Mozilla's code of conduct enforcement ladder",
          url: "https://github.com/mozilla/diversity",
          isExternal: true,
        },
        {
          text: "FAQ",
          url: "https://www.contributor-covenant.org/faq",
          isExternal: true,
        },
        {
          text: "Translations",
          url: "https://www.contributor-covenant.org/translations",
          isExternal: true,
        },
      ],
    },
    labels: {
      enforcementTitle: "Enforcement Guidelines",
      enforcementDescription:
        "Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:",
      communityImpact: "Community Impact:",
      consequence: "Consequence:",
      attributionTitle: "Attribution",
    },
  },
  contribute: {
    title: "Interested in contributing to CodeQuestic?",
    thankYou: [
      "First of all, thank you for taking the time to contribute! 🤙",
      "The following is a set of guidelines for contributing to this repository. Before contributing, we encourage you to read our Code of Conduct.",
    ],
    guide: {
      title: "Contributing Guide ✨",
      steps: [
        {
          title: "Forking the CodeQuestic Repository",
          content: [
            "Click the Fork button at the top right of any CodeQuestic repository's GitHub Page to create a copy in your account, or go directly to the Fork Page & click on Create Fork button. After successfully forking the repo, you'll be redirected to your copy of the CodeQuestic repository.",
          ],
        },
        {
          title: "Cloning the CodeQuestic Repository",
          content: [
            "On your forked repo, click the button that says <> Code. Under Local tab, it will open a dropdown menu. Copy the link in the input with the label HTTPS or GitHub CLI depending on your preferred cloning mode.",
            "For cloning via HTTPS, first create a folder on your system and open it in VS Code or any other code editor. Then, open the terminal inside this folder and run the following command to clone or have a local copy of the forked repository in this folder:",
          ],
          codeBlocks: [
            {
              label: "Terminal window",
              code: "git clone https://github.com/<your-username>/<repository-name>.git",
            },
          ],
        },
        {
          title: "",
          content: [
            "Here, replace <your-username> with your GitHub username and <repository-name> with the specific CodeQuestic repository name.",
            "You can also clone the forked repo using the GitHub CLI. To do this, run the following command:",
          ],
          codeBlocks: [
            {
              label: "Terminal window",
              code: "gh repo clone <your-username>/<repository-name>",
            },
          ],
        },
      ],
    },
    setup: {
      title: "Setup the Development Environment",
      description: "Ensure you have the following installed:",
      dependencies: [
        {
          name: "Node.js",
          version:
            "Version 18 or higher (recommended to use the latest LTS version)",
        },
        {
          name: "npm",
          version:
            "Latest version (ensure you're using the most recent release)",
        },
      ],
      installation: [
        {
          description:
            "Now, navigate to the root directory of the project and run:",
          codeBlock: {
            label: "Terminal window",
            code: "npm install",
          },
        },
        {
          description: "Once installation is done, run the development server:",
          codeBlock: {
            label: "Terminal window",
            code: "npm run dev",
          },
        },
        {
          description:
            "Now open your browser and navigate to http://localhost:3000 to view the website.",
        },
        {
          description: "To create a production build of the website, run:",
          codeBlock: {
            label: "Terminal window",
            code: "npm run build",
          },
        },
        {
          description: "To start the production server, run:",
          codeBlock: {
            label: "Terminal window",
            code: "npm start",
          },
        },
      ],
    },
    changes: {
      title: "Making your Changes",
      warning: {
        title: "IMPORTANT",
        content: [
          "If there is an existing issue that you'd like to contribute to, request to be assigned to it before proceeding with any changes.",
          "If there isn't an existing issue for the feature or bug you wish to work on, you can create a new issue detailing the feature/bug and request to be assigned to it.",
          "Follow the naming conventions while creating the issue (e.g., [Bug]: <Short Description>, [Feature]: <Short Description> or [Docs]: <Short Description>).",
        ],
      },
      note: {
        title: "Caution",
        content: [
          "If there are no activity for 7 days then the issue will be unassigned and will be available for others to work on. So, make sure to be active and let the maintainers know if you need more time to work on the issue (provide the latest updates).",
        ],
      },
      branchSteps: [
        {
          title: "Steps to Create a New Branch",
          subtitle: "1. Ensure you are on the correct base branch",
          description:
            "First, check that you're on the correct base branch (main) before creating a new branch.",
          codeBlock: {
            label: "Terminal window",
            code: "git checkout main",
          },
        },
        {
          title: "",
          subtitle: "2. Pull the latest changes",
          description:
            "Always pull the latest changes from the remote branch to ensure your branch is up to date.",
          codeBlock: {
            label: "Terminal window",
            code: "git pull origin main",
          },
        },
        {
          title: "",
          subtitle: "3. Create a new branch",
          description:
            "Use the git checkout command to create and switch to a new branch following the naming conventions.",
          codeBlock: {
            label: "Terminal window",
            code: "git checkout -b <your-branch-name>",
          },
        },
        {
          title: "",
          subtitle: "4. Make your changes",
          description:
            "Now that you're on your new branch, you can make the necessary code changes. After completing your changes, stage them for commit.",
          codeBlock: {
            label: "Terminal window",
            code: "git add .",
          },
        },
        {
          title: "",
          subtitle: "5. Commit your changes",
          description:
            "Write a meaningful commit message that summarizes your changes.",
          codeBlock: {
            label: "Terminal window",
            code: 'git commit -m "Your commit message"',
          },
        },
        {
          title: "",
          subtitle: "6. Push your changes to the remote repo",
          description:
            "Once you've committed your changes, push your branch to the remote repository.",
          codeBlock: {
            label: "Terminal window",
            code: "git push origin <your-branch-name>",
          },
        },
      ],
    },
    pullRequest: {
      title: "Opening a Pull Request",
      note: {
        title: "Note",
        content: [
          "You are to make only one contribution per pull request. It makes it easier to review and merge. If you want to add multiple contributions or if you have solved multiple issues, create separate pull requests for each.",
        ],
      },
      steps: [
        {
          title: "Steps to Open a Pull Request",
          content: [],
          list: [
            "Go to the repository on GitHub.",
            "Click on the Pull requests tab.",
            "Click on New Pull Request.",
            "Select the branch that contains your changes targeting the CodeQuestic's main branch.",
            "Ensure the title follows the naming convention.",
          ],
        },
        {
          title: "Add a Detailed Description",
          content: [],
          list: [
            "In the description field of the pull request, provide a detailed explanation of the changes.",
            "Describe what was changed, why it was changed, and any other relevant details.",
            "Use the correct way to link issues in the description of the PR by updating the issue number. Do not just add issue numbers everywhere and anywhere you feel like.",
          ],
        },
        {
          title: "Submit the Pull Request:",
          content: [
            'After filling out the title and description, click on "Create pull request".',
          ],
        },
      ],
      warning: {
        title: "Don't forget",
        content: [
          "Ensure your pull request complies with the repository's contribution guidelines before submission.",
        ],
      },
    },
    congratulations: {
      title: "Congratulations! 🎉",
      content: [
        "You have successfully contributed to the CodeQuestic repository. Your pull request will be reviewed by the maintainers, and if everything is in order, it will be merged into the main branch. If any reviews or changes are requested by the reviewers then please feel free to resolve them so that maintainers can merge your PR.",
        "Thank you for your contribution! 🙌",
      ],
    },
    labels: {
      dependency: "Dependency",
      versionRequirement: "Version Requirement",
      submitPR: "Submit the Pull Request:",
      clickPullRequests: "Click on the Pull requests tab.",
      clickNewPR: "Click on New Pull Request.",
      addDetailedDescription: "Add a Detailed Description",
      localhostText:
        "Now open your browser and navigate to http://localhost:3000 to view the website.",
      replaceUsernameText:
        "Here, replace <your-username> with your GitHub username and <repository-name> with the specific CodeQuestic repository name.",
      codeButtonText:
        "On your forked repo, click the button that says <> Code. Under Local tab, it will open a dropdown menu. Copy the link in the input with the label HTTPS or GitHub CLI depending on your preferred cloning mode.",
      namingConventionsText:
        "Follow the naming conventions while creating the issue (e.g., [Bug]: <Short Description>, [Feature]: <Short Description> or [Docs]: <Short Description>).",
      thankYouBold: "Thank you for your contribution! 🙌",
      // Specific text fragments
      localhostUrl: "http://localhost:3000",
      codeHighlight: "&lt;&gt; Code",
      usernameCode: "&lt;your-username&gt;",
      repositoryCode: "&lt;repository-name&gt;",
      pullRequestsText: "Pull requests",
      newPRText: "New Pull Request",
      bugExample: "[Bug]: &lt;Short Description&gt;",
      featureExample: "[Feature]: &lt;Short Description&gt;",
      docsExample: "[Docs]: &lt;Short Description&gt;",
      shortDescPlaceholder: "&lt;Short Description&gt;",
      createPRQuote: '"Create pull request"',
      // Search patterns
      codeSearchPattern: "<> Code",
      usernameSearchPattern: "<your-username>",
      repositorySearchPattern: "<repository-name>",
      localhostSearchPattern: "http://localhost:3000",
      bugSearchPattern: "[Bug]:",
      featureSearchPattern: "[Feature]:",
      docsSearchPattern: "[Docs]:",
      createPRSearchPattern: '"Create pull request"',
      pullRequestsSearchPattern: "Pull requests",
      newPRSearchPattern: "New Pull Request",
    },
  },
  nameConvention: {
    title: "Naming Convention Guidelines",
    intro: [
      "Standardized naming conventions for better collaboration and organization",
      "Following these conventions helps in better collaboration and understanding across the team.",
    ],
    sections: [
      {
        id: "branch",
        title: "Branch Naming Convention",
        description:
          "When creating a new branch for documentation or bug fixes, use the following format:",
        categories: [
          {
            title: "Documentation Branches",
            format: "docs-<short-description>",
            example: "docs-update-api-reference",
          },
          {
            title: "Bug Fix Branches",
            format: "bug-<short-description>",
            example: "bug-header-overflow",
          },
        ],
        note: {
          title: "Note",
          content: [
            "Use hyphens (-) to separate words in branch names. Avoid using spaces or underscores.",
          ],
        },
      },
      {
        id: "pullRequest",
        title: "Pull Request Naming Convention",
        description:
          "When submitting a pull request, follow the format below, depending on the type of PR:",
        categories: [
          {
            title: "Documentation Pull Requests",
            format: "[docs](<label>): <description>",
            example: "[docs](React): Updated React theory concept",
          },
          {
            title: "Bug Fix Pull Requests",
            format: "[bug](<label>): <description>",
            example: "[bug](ui): Fixed button hover issue in the header",
          },
        ],
        note: {
          title: "Note",
          content: [
            "Here <label> refers to the main section, such as the technology or page you're working on (e.g., React, React Component, Nodejs).",
            "Always include a label to indicate the section or main page you are addressing in the Pull Request. Make the description short and informative.",
          ],
        },
      },
      {
        id: "issue",
        title: "Issue Naming Convention",
        description:
          "When reporting issues, use concise titles that clearly describe the problem or suggestion:",
        categories: [
          {
            title: "Bug Reports",
            format: "[Bug]: <Short Description>",
            example: "[Bug]: Dropdown menu not closing on click outside",
          },
          {
            title: "Feature Requests",
            format: "[Feature]: <Short Description>",
            example: "[Feature]: Add dark mode toggle",
          },
          {
            title: "Documentation Issues",
            format: "[Docs]: <Short Description>",
            example: "[Docs]: Incorrect code example in React tutorial",
          },
        ],
      },
    ],
    summary: {
      title: "Summary of Naming Conventions",
      tableHeaders: {
        type: "Type",
        format: "Format",
        example: "Example",
      },
      items: [
        {
          type: "Branch (Docs)",
          format: "docs-<short-description>",
          example: "docs-update-api-reference",
        },
        {
          type: "Branch (Bug Fix)",
          format: "bug-<short-description>",
          example: "bug-header-overflow",
        },
        {
          type: "Pull Request (Docs)",
          format: "[docs](<label>): <description>",
          example: "[docs](React): Updated React component",
        },
        {
          type: "Pull Request (Bug Fix)",
          format: "[bug](<label>): <description>",
          example: "[bug](ui): Fixed button hover issue",
        },
        {
          type: "Issue (Bug Report)",
          format: "[Bug]: <Short Description>",
          example: "[Bug]: Dropdown menu not closing",
        },
        {
          type: "Issue (Feature Request)",
          format: "[Feature]: <Short Description>",
          example: "[Feature]: Add dark mode toggle",
        },
        {
          type: "Issue (Docs)",
          format: "[Docs]: <Short Description>",
          example: "[Docs]: Incorrect code example in docs",
        },
      ],
    },
    warning: {
      title: "IMPORTANT",
      content: [
        "Remember, following these naming conventions helps in better collaboration and understanding across the team.",
        "Consistent naming makes it easier to track changes, understand the purpose of branches and PRs, and maintain project organization.",
      ],
    },
    labels: {
      format: "Format:",
      example: "Example:",
    },
  },
  contact: {},
};

// COMPONENTS CONTENT
// Header content
export const headerContent = {
  logo: "CodeQuestic",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/code-of-conduct", label: "Code of Conduct" },
    { href: "/contribute", label: "Contribute" },
    { href: "/name-convention", label: "Name Convention" },
    { href: "/contact", label: "Contact" },
  ],
};

// Footer content
export const footerContent = {
  copy: "CodeQuestic. All rights reserved.",
  links: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};
