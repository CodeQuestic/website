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
  codeOfConduct: CodeOfConductContent;
  contribute: ContributeContent;
  nameConvention: NameConventionContent;
  contact: Record<string, unknown>;
}

export interface CodeOfConductContent {
  title: string;
  subtitle: string;
  sections: CodeOfConductSection[];
  guidelines: EnforcementGuideline[];
  attribution: AttributionContent;
  labels: CodeOfConductLabels;
}

export interface CodeOfConductLabels {
  enforcementTitle: string;
  enforcementDescription: string;
  communityImpact: string;
  consequence: string;
  attributionTitle: string;
}

export interface CodeOfConductSection {
  id: string;
  title: string;
  content: string[];
  list?: string[];
}

export interface EnforcementGuideline {
  level: string;
  title: string;
  impact: string;
  consequence: string;
}

export interface AttributionContent {
  text: string[];
  links: AttributionLink[];
}

export interface AttributionLink {
  text: string;
  url: string;
  isExternal: boolean;
}

export interface NameConventionContent {
  title: string;
  intro: string[];
  sections: NameConventionSection[];
  summary: {
    title: string;
    tableHeaders: {
      type: string;
      format: string;
      example: string;
    };
    items: ConventionSummaryItem[];
  };
  warning: {
    title: string;
    content: string[];
  };
  labels: {
    format: string;
    example: string;
  };
}

export interface NameConventionSection {
  id: string;
  title: string;
  description: string;
  categories: ConventionCategory[];
  note?: NoteContent;
}

export interface ConventionCategory {
  title: string;
  format: string;
  example: string;
}

export interface ConventionSummaryItem {
  type: string;
  format: string;
  example: string;
}

export interface NoteContent {
  title: string;
  content: string[];
}

export interface ContributeContent {
  title: string;
  thankYou: string[];
  guide: ContributeGuide;
  setup: SetupSection;
  changes: ChangesSection;
  pullRequest: PullRequestSection;
  congratulations: CongratulationsSection;
  labels: ContributeLabels;
}

export interface ContributeLabels {
  dependency: string;
  versionRequirement: string;
  submitPR: string;
  clickPullRequests: string;
  clickNewPR: string;
  addDetailedDescription: string;
  localhostText: string;
  replaceUsernameText: string;
  codeButtonText: string;
  namingConventionsText: string;
  thankYouBold: string;
  // Specific text fragments
  localhostUrl: string;
  codeHighlight: string;
  usernameCode: string;
  repositoryCode: string;
  pullRequestsText: string;
  newPRText: string;
  bugExample: string;
  featureExample: string;
  docsExample: string;
  shortDescPlaceholder: string;
  createPRQuote: string;
  // Search patterns
  codeSearchPattern: string;
  usernameSearchPattern: string;
  repositorySearchPattern: string;
  localhostSearchPattern: string;
  bugSearchPattern: string;
  featureSearchPattern: string;
  docsSearchPattern: string;
  createPRSearchPattern: string;
  pullRequestsSearchPattern: string;
  newPRSearchPattern: string;
}

export interface ContributeGuide {
  title: string;
  steps: ContributeStep[];
}

export interface ContributeStep {
  title: string;
  content: string[];
  codeBlocks?: CodeBlock[];
}

export interface CodeBlock {
  label: string;
  code: string;
}

export interface SetupSection {
  title: string;
  description: string;
  dependencies: DependencyRequirement[];
  installation: InstallationStep[];
}

export interface DependencyRequirement {
  name: string;
  version: string;
}

export interface InstallationStep {
  description: string;
  codeBlock?: CodeBlock;
}

export interface ChangesSection {
  title: string;
  warning: WarningContent;
  note: NoteContent;
  branchSteps: BranchStep[];
}

export interface WarningContent {
  title: string;
  content: string[];
}

export interface BranchStep {
  title: string;
  subtitle?: string;
  description: string;
  codeBlock?: CodeBlock;
}

export interface PullRequestSection {
  title: string;
  note: NoteContent;
  steps: PullRequestStep[];
  warning: WarningContent;
}

export interface PullRequestStep {
  title?: string;
  content: string[];
  list?: string[];
}

export interface CongratulationsSection {
  title: string;
  content: string[];
}
