import { Insight } from "@/types";

export const insights: Insight[] = [
  {
    slug: "where-ai-pays-off",
    tag: "Artificial Intelligence",
    gradient: ["#10B981", "#34D399"],
    title: "Where AI Actually Pays Off in Mid-Market Software",
    body: "A practical framework for separating real AI leverage from feature-list AI.",
    readTime: "6 min",
    sections: [
      {
        heading: "Most AI requests start in the wrong place",
        paragraphs: [
          "When a mid-market company asks for AI, the request is almost always the same: a chatbot. Sometimes it's a support chatbot, sometimes it's a document chatbot, sometimes it's a chatbot for the website because a competitor has one. The chatbot is rarely where the money is.",
          "This isn't a criticism of the people asking. Chatbots are simply the most visible form of AI, so they become the default mental model. But visibility and value are different things, and the gap between them is where AI budgets go to die.",
        ],
      },
      {
        heading: "Where the leverage actually sits",
        paragraphs: [
          "In our experience, AI creates the most leverage in four places. First, triage: classifying and routing the repetitive inbound work — support tickets, intake forms, invoice exceptions — so humans only touch the cases that need judgment. Second, search over your own data: making ten years of documents, tickets, and records answerable in plain language. Third, extraction: pulling structured data out of unstructured inputs like PDFs, emails, and scans, which quietly eats hours in operations, finance, and compliance teams. Fourth, decision support: summarizing the relevant context so a person decides faster, not deciding for them.",
          "Notice what these have in common: none of them is a chatbot for its own sake. Each one removes a specific, measurable bottleneck. If you can't name the bottleneck, you don't have an AI project — you have an AI press release.",
        ],
      },
      {
        heading: "The data question nobody asks first",
        paragraphs: [
          "Every one of those four use cases runs on your data, and AI is brutally honest about data quality. A model trained on messy, duplicated, contradictory records doesn't fix the mess — it automates confident wrong answers at scale.",
          "Before scoping any AI work, ask three questions: where does the relevant data live, who owns its accuracy, and what happens when it's wrong? If the answers are vague, the first phase of the project is data work, not AI work. Any vendor who skips this conversation is selling you a demo, not a system.",
        ],
      },
      {
        heading: "The build-versus-wrapper test",
        paragraphs: [
          "Much of what gets sold as 'custom AI' is a thin wrapper around a public model with a nice UI. Sometimes that's exactly right — if the workflow is generic, a wrapper is cheaper and faster. Custom work earns its keep when the value is in your data, your workflow, or your domain rules: the things a generic product can't know.",
          "A practical test: if you could get 80% of the value by pointing an off-the-shelf tool at the problem, do that first. Build custom where the remaining 20% is the part that differentiates your business.",
        ],
      },
      {
        heading: "What to do Monday morning",
        paragraphs: [
          "Pick one repetitive workflow and measure it for two weeks: how long it takes, how often it happens, and what errors cost. That baseline is worth more than any AI strategy deck, because it turns the conversation from 'should we do AI?' into 'this workflow costs us X hours a month — what would it take to cut that in half?'",
          "Then start with the smallest version that proves the mechanism: one workflow, one team, one metric. AI projects fail at the scale of ambition, not at the scale of technology.",
        ],
      },
    ],
  },
  {
    slug: "cloud-cost-creep",
    tag: "Cloud",
    gradient: ["#0F172A", "#334155"],
    title: "Cloud Cost Creep: What Actually Drives It",
    body: "The three infrastructure decisions that quietly double your cloud bill.",
    readTime: "5 min",
    sections: [
      {
        heading: "It's never one thing",
        paragraphs: [
          "When a cloud bill doubles, the instinct is to look for the culprit — the one service, the one mistake. In practice, cloud cost creep is almost never one thing. It's three or four reasonable decisions, each defensible on its own, compounding quietly month after month until someone finally opens the invoice and asks what happened.",
          "The pattern repeats across companies of every size: the bill grows roughly with usage at first, then detaches and starts growing on its own. Here's what actually drives that detachment.",
        ],
      },
      {
        heading: "Driver one: capacity you provisioned and forgot",
        paragraphs: [
          "The most common source of waste is also the most boring: resources sized for a launch, a campaign, or a worst case that never arrived, left running ever since. Development and staging environments that mirror production around the clock. Databases provisioned for peak traffic that sees peak traffic twice a year. Storage volumes attached to nothing.",
          "This isn't a tooling problem, it's a cadence problem. Nobody is paid to turn things off. The fix is embarrassingly simple: a monthly review where someone with authority asks 'do we still need this?' about the top twenty line items. Companies that do this once usually find 15–30% of the bill was inertia.",
        ],
      },
      {
        heading: "Driver two: data transfer you never modeled",
        paragraphs: [
          "Compute gets the attention; data transfer gets the money. Egress charges, cross-availability-zone traffic, and chatty architectures that move the same data back and forth all day add up in ways that don't show up in architecture diagrams.",
          "The worst version of this is architectural: services in different zones or regions calling each other in tight loops, or analytics pipelines that re-transfer full datasets instead of deltas. These are design decisions, and they're cheapest to fix at design time. By the time they're line items, you're refactoring under pressure.",
        ],
      },
      {
        heading: "Driver three: managed services at the wrong scale",
        paragraphs: [
          "Managed services are priced for the convenience they provide, and that convenience is worth it — at the right scale. The creep happens when a startup pays for enterprise-grade managed offerings it doesn't need yet: multi-AZ everything, provisioned throughput for workloads that would fit comfortably on smaller tiers, premium support plans for systems nobody pages about.",
          "The rule of thumb: buy managed simplicity for the parts that aren't your business, but size them for the business you have, not the one in your pitch deck. You can always scale up; paying for scale in advance is just a donation to your cloud provider.",
        ],
      },
      {
        heading: "What actually fixes it",
        paragraphs: [
          "Three habits, none of them exotic. Tag everything so every dollar is attributable to a team or product — untagged spend is unowned spend. Right-size on a cadence, not as a one-off project; quarterly is enough for most companies. And make cost a design input: when an architect proposes a pattern, 'what does this cost at 10x traffic?' should be as routine as asking about latency.",
          "None of this requires a FinOps platform to start. It requires someone deciding that the bill is an engineering concern, not an accounting surprise.",
        ],
      },
    ],
  },
  {
    slug: "fixed-scope-sprints",
    tag: "Software Engineering",
    gradient: ["#34D399", "#10B981"],
    title: "Why Fixed-Scope Projects Still Need Sprints",
    body: "Predictable delivery without sacrificing the flexibility your team needs.",
    readTime: "5 min",
    sections: [
      {
        heading: "Fixed scope isn't fixed reality",
        paragraphs: [
          "There's a persistent myth in software procurement: that a fixed scope means the project can run on rails from signature to delivery, no agility required. The scope document is treated as a complete description of reality, and any deviation is treated as a failure of planning.",
          "In practice, no scope document survives first contact with real users, real data, and real edge cases. The question was never whether reality would deviate from the document — it's whether the project has a mechanism for handling the deviation gracefully.",
        ],
      },
      {
        heading: "Sprints are a communication cadence, not a religion",
        paragraphs: [
          "Strip away the agile ceremony and a sprint is a simple thing: a short, fixed period that ends with working software you can look at. For fixed-scope projects, that cadence is more valuable, not less — because the scope is the constraint, and constraints need frequent verification.",
          "Each sprint answers the only question that matters on a fixed-price engagement: are we still on track for the agreed scope, on the agreed timeline? Without that cadence, the answer arrives all at once, usually late, usually expensive.",
        ],
      },
      {
        heading: "Weekly demos de-risk both sides",
        paragraphs: [
          "The weekly demo is the unsung hero of fixed-scope delivery. For the client, it replaces anxiety with evidence: you can see the thing being built, click through it, and raise concerns while they're still cheap to address. For the builder, it replaces guesswork with feedback: assumptions get corrected in days, not at the reveal.",
          "This is also what makes fixed pricing honest. A vendor confident enough to show you working software every week is a vendor whose estimates you can trust. A vendor who wants to disappear for three months and return with a finished product is asking you to underwrite their planning risk.",
        ],
      },
      {
        heading: "What changes, and what doesn't",
        paragraphs: [
          "Running sprints inside a fixed scope doesn't mean the scope is negotiable — it means the path is. The deliverables and the deadline stay fixed; the order of work, the technical approach, and the handling of discovered edge cases flex within the sprint cadence.",
          "When a genuine scope change appears — and it will — the sprint boundary is exactly where it gets handled: estimated, priced, and scheduled explicitly, instead of absorbed silently until it blows up the timeline. That's not scope creep. That's scope management.",
        ],
      },
    ],
  },
  {
    slug: "security-review-most-skip",
    tag: "Security",
    gradient: ["#334155", "#0F172A"],
    title: "The Security Review Most Vendors Skip",
    body: "What a real pre-launch security pass should actually cover.",
    readTime: "6 min",
    sections: [
      {
        heading: "The checkbox audit versus the real one",
        paragraphs: [
          "Ask a vendor whether they do a security review before launch and the answer is always yes. Ask what it covers and the answer is usually vague: some scanning, some best practices, a firewall. This is the checkbox audit — it exists so someone can say it happened.",
          "A real pre-launch security pass is a different activity entirely. It's adversarial in mindset: not 'did we follow the checklist?' but 'where would I attack this?' The difference matters because attackers don't audit against checklists either.",
        ],
      },
      {
        heading: "What gets skipped: authentication edge cases",
        paragraphs: [
          "The happy path of login always works — that's what gets tested. What gets skipped are the edges: token expiry and refresh behavior, concurrent session handling, password reset flows (the most attacked flow in most applications), and what happens when an authenticated user's permissions change mid-session.",
          "Authorization — who can access what — is where the real bugs live. It's also the least tested, because every test requires constructing a specific user in a specific state. If your pre-launch review didn't include someone methodically trying to access things they shouldn't, it wasn't a review.",
        ],
      },
      {
        heading: "What gets skipped: the supply chain and secrets",
        paragraphs: [
          "Modern applications are mostly other people's code. A real review inventories dependencies, checks for known vulnerabilities in the versions actually shipped (not the versions in some aspirational lockfile), and asks what happens when a maintainer goes rogue or a package gets hijacked.",
          "Secrets handling is the quieter sibling: API keys in client-side bundles, credentials in error messages and logs, staging environments with production data and weaker access controls. None of these show up in a vulnerability scan. All of them show up in breach reports.",
        ],
      },
      {
        heading: "What gets skipped: data exposure in APIs and logs",
        paragraphs: [
          "APIs routinely return more data than the UI displays — full user objects where only a name was needed, internal IDs, timestamps, and soft-deleted records. If the frontend doesn't show it, nobody checks what the endpoint actually returns. Attackers check.",
          "Logs are the other leak: verbose error messages that include stack traces, query parameters, or user data, shipped to a logging service with broad access. A pre-launch pass should include reading your own logs the way an attacker would.",
        ],
      },
      {
        heading: "What a real pre-launch pass covers",
        paragraphs: [
          "Concretely: authentication and session edge cases tested adversarially. Authorization verified object by object, not just route by route. Dependency inventory with known-vulnerability checks against shipped versions. Secrets audit across code, config, logs, and error paths. API response review for over-exposure. And a staging environment treated with the same seriousness as production, because attackers don't distinguish.",
          "None of this requires a dedicated security team to start. It requires someone with an attacker's mindset spending focused time before launch — and the organizational willingness to delay a launch when they find something.",
        ],
      },
    ],
  },
];
