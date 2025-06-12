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
}

// Footer content
export const footerContent = {
    copy: "CodeQuestic. All rights reserved.",
    links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
    ],
}