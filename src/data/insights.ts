import { Insight } from "@/types";

// Teaser cards only — full article pages aren't built yet. Each links to "#"
// until real article content and routes exist.
export const insights: Insight[] = [
  {
    slug: "where-ai-pays-off",
    tag: "Artificial Intelligence",
    gradient: ["#10B981", "#34D399"],
    title: "Where AI Actually Pays Off in Mid-Market Software",
    body: "A practical framework for separating real AI leverage from feature-list AI.",
  },
  {
    slug: "cloud-cost-creep",
    tag: "Cloud",
    gradient: ["#0F172A", "#334155"],
    title: "Cloud Cost Creep: What Actually Drives It",
    body: "The three infrastructure decisions that quietly double your AWS bill.",
  },
  {
    slug: "fixed-scope-sprints",
    tag: "Software Engineering",
    gradient: ["#34D399", "#10B981"],
    title: "Why Fixed-Scope Projects Still Need Sprints",
    body: "Predictable delivery without sacrificing the flexibility your team needs.",
  },
  {
    slug: "security-review-most-skip",
    tag: "Security",
    gradient: ["#334155", "#0F172A"],
    title: "The Security Review Most Vendors Skip",
    body: "What a real pre-launch security pass should actually cover.",
  },
];
