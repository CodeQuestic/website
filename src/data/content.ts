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
          text: "⭐ Star on GitHub",
          styleType: "primary",
        },
        {
          href: "https://github.com/orgs/CodeQuestic/repositories",
          text: "🔎 Explore Projects",
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
    about: {
      title: "About CodeQuestic",
      description:
        "Empowering developers through open-source collaboration and learning",
      content:
        "CodeQuestic is more than just a collection of repositories—it's a thriving community where developers of all skill levels come together to build, learn, and grow. We believe that the best way to learn programming is by doing, collaborating, and contributing to meaningful projects.",
      features: [
        {
          icon: "🚀",
          title: "Production-Ready Projects",
          description:
            "Work on real applications that solve actual problems and can be used by thousands of users.",
        },
        {
          icon: "📚",
          title: "Learn by Doing",
          description:
            "Comprehensive documentation, tutorials, and mentorship to guide your learning journey.",
        },
        {
          icon: "🤝",
          title: "Collaborative Environment",
          description:
            "Connect with fellow developers, share knowledge, and build lasting professional relationships.",
        },
        {
          icon: "🛠️",
          title: "Developer Tools",
          description:
            "Utilities and tools designed to boost productivity and streamline your development workflow.",
        },
      ],
    },
    stats: {
      title: "Join Our Growing Community",
      items: [
        { number: "50+", label: "Open Source Projects" },
        { number: "1000+", label: "Community Members" },
        { number: "500+", label: "Contributions Made" },
        { number: "24/7", label: "Community Support" },
      ],
    },
    featured: {
      title: "Featured Projects",
      subtitle: "Discover our most popular and impactful projects",
      projects: [
        {
          name: "DevUtils Toolkit",
          description:
            "A comprehensive collection of developer utilities including JSON formatters, URL encoders, and code generators.",
          tech: ["TypeScript", "React", "Node.js"],
          stars: 245,
          href: "https://github.com/CodeQuestic/devutils-toolkit",
        },
        {
          name: "Learning Pathways",
          description:
            "Structured learning paths for web development, mobile apps, and DevOps with hands-on projects.",
          tech: ["Next.js", "MDX", "Tailwind"],
          stars: 189,
          href: "https://github.com/CodeQuestic/learning-pathways",
        },
        {
          name: "Open API Hub",
          description:
            "Collection of free APIs for developers to practice and build projects without setup hassles.",
          tech: ["Express.js", "MongoDB", "Docker"],
          stars: 156,
          href: "https://github.com/CodeQuestic/open-api-hub",
        },
      ],
    },
    community: {
      title: "Join Our Community",
      subtitle: "Connect with developers from around the world",
      description:
        "Whether you're looking to contribute to open source, learn new technologies, or find your next career opportunity, our community is here to support your journey.",
      actions: [
        {
          href: "https://github.com/CodeQuestic",
          text: "🌟 Follow on GitHub",
          styleType: "primary",
        },
        {
          href: "/contribute",
          text: "🚀 Start Contributing",
          styleType: "outline",
        },
      ]
    },
  },
  projects: {},
  contribute: {},
  contact: {},
};

// COMPONENTS CONTENT
// Header content
export const headerContent = {
  logo: "CodeQuestic",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contribute", label: "Contribute" },
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
