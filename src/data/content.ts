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
          href: "/projects",
          target: "_self",
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
