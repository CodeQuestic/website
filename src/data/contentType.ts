export type ButtonStyleType = "primary" | "outline";

export interface Action {
  href: string;
  target: "_blank" | "_self";
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

export interface AboutFeature {
  icon: string;
  title: string;
  description: string;
}

export interface StatsItem {
  number: string;
  label: string;
}

export interface StatsContent {
  title: string;
  items: StatsItem[];
}

export interface FeaturedProject {
  name: string;
  description: string;
  tech: string[];
  stars: number;
  href: string;
  target: "_blank" | "_self";
  text: string;
}

export interface FeaturedContent {
  title: string;
  subtitle: string;
  projects: FeaturedProject[];
  actions: Action[];
}

export interface CommunityContent {
  title: string;
  description: string;
  actions: Action[];
}

export interface HomeContent {
  hero: HeroContent;
  stats: StatsContent;
  featured: FeaturedContent;
  community: CommunityContent;
}

export interface SiteContent {
  home: HomeContent;
  projects: Record<string, unknown>;
  contribute: Record<string, unknown>;
  contact: Record<string, unknown>;
}
