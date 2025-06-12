export type ButtonStyleType = "primary" | "outline";

export interface Action {
  href: string;
  text: string;
  styleType: ButtonStyleType;
}

export interface HeroContent {
  title: string;
  description: string;
  mission: string;
  actions: Action[];
  highlights: string[];
}

export interface SiteContent {
  home: {
    hero: HeroContent;
  };
  projects: Record<string, unknown>;
  contribute: Record<string, unknown>;
  contact: Record<string, unknown>;
}
