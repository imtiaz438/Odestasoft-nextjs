export interface Service {
  slug: string;
  icon: string;
  title: string;
  lede: string;
  timeline: string;
  team: string;
  bestFor: string;
  overview: string[];
  checklist: string[];
  approach: string;
  related: string[];
  caseStudy: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  gradient: [string, string];
  tag: string;
  image: string;
  heroImage: string;
  challengeImage: string;
  solutionImage: string;
  outcomeImage: string;
  engagement: string;
  timeline: string;
  tech: string[];
  lede: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  quote: string;
  quotePerson: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Solution {
  tag: string;
  title: string;
  body: string;
}

export interface Insight {
  slug: string;
  tag: string;
  gradient: [string, string];
  title: string;
  body: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
}
