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

export interface AboutFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AboutContent {
  title: string;
  description: string;
  content: string;
  features: AboutFeature[];
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
}

export interface FeaturedContent {
  title: string;
  subtitle: string;
  projects: FeaturedProject[];
}

export interface CommunityContent {
  title: string;
  subtitle: string;
  description: string;
  actions: Action[];
}

export interface HomeContent {
  hero: HeroContent;
  about: AboutContent;
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
