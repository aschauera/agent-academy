import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Agent Academy",
  base: "/agent-academy/",
  head: [["link", { rel: "icon", href: "/agent-academy/images/logo.png" }]],
  description:
    "Welcome to Copilot Studio Agent Academy. Curated lessons on getting started building agents with Copilot Studio.",
  themeConfig: {
    logo: "/agent-academy/images/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Our Team", link: "/our-team/" },
      {
        text: "Recruit",
        items: [
          { text: "Overview", link: "/recruit/" },
          { text: "Course Setup", link: "/recruit/00-course-setup" },
          {
            text: "Introduction to Agents",
            link: "/recruit/01-introduction-to-agents",
          },
          {
            text: "Copilot Studio Fundamentals",
            link: "/recruit/02-copilot-studio-fundamentals",
          },
          {
            text: "Create A Declarative Agent For Microsoft 365 Copilot",
            link: "/recruit/03-create-a-declarative-agent-for-m365-copilot",
          },
          {
            text: "Creating A Solution",
            link: "/recruit/04-creating-a-solution",
          },
          {
            text: "Using Prebuilt Agents",
            link: "/recruit/05-using-prebuilt-agents",
          },
          {
            text: "Create Agent From Conversation",
            link: "/recruit/06-create-agent-from-conversation",
          },
          {
            text: "Add New Topic With Trigger",
            link: "/recruit/07-add-new-topic-with-trigger",
          },
          {
            text: "Add Adaptive Cards",
            link: "/recruit/08-add-adaptive-cards",
          },
          {
            text: "Add An Agent Flow",
            link: "/recruit/09-add-an-agent-flow",
          },
          {
            text: "Add Event Triggers",
            link: "/recruit/10-add-event-triggers",
          },
          {
            text: "Publish Your Agents",
            link: "/recruit/11-publish-your-agents",
          },
          {
            text: "Understanding Licensing",
            link: "/recruit/12-understanding-licensing",
          },
          {
            text: "Course Completion Badge Recruit",
            link: "/recruit/course-completion-badges-recruit",
          },
        ],
      },
      { text: "Operative (Preview)", link: "/operative/" },
      { text: "Commander (Coming Soon)", link: "/commander/" },
    ],

    sidebar: [
      {
        text: "Agent Academy",
        items: [
          { text: "Home", link: "/" },
          { text: "Our Team", link: "/our-team/" },
          {
            text: "Recruit",
            collapsed: true,
            items: [
              {
                text: "Overview",
                link: "/recruit/",
              },
              {
                text: "Course Setup",
                link: "/recruit/00-course-setup",
              },
              {
                text: "Introduction to Agents",
                link: "/recruit/01-introduction-to-agents",
              },
              {
                text: "Copilot Studio Fundamentals",
                link: "/recruit/02-copilot-studio-fundamentals",
              },
              {
                text: "Create A Declarative Agent For Microsoft 365 Copilot",
                link: "/recruit/03-create-a-declarative-agent-for-m365-copilot",
              },
              {
                text: "Creating A Solution",
                link: "/recruit/04-creating-a-solution",
              },
              {
                text: "Using Prebuilt Agents",
                link: "/recruit/05-using-prebuilt-agents",
              },
              {
                text: "Create Agent From Conversation",
                link: "/recruit/06-create-agent-from-conversation",
              },
              {
                text: "Add New Topic With Trigger",
                link: "/recruit/07-add-new-topic-with-trigger",
              },
              {
                text: "Add Adaptive Cards",
                link: "/recruit/08-add-adaptive-cards",
              },
              {
                text: "Add An Agent Flow",
                link: "/recruit/09-add-an-agent-flow",
              },
              {
                text: "Add Event Triggers",
                link: "/recruit/10-add-event-triggers",
              },
              {
                text: "Publish Your Agents",
                link: "/recruit/11-publish-your-agents",
              },
              {
                text: "Understanding Licensing",
                link: "/recruit/12-understanding-licensing",
              },
              {
                text: "Course Completion Badge Recruit",
                link: "/recruit/course-completion-badges-recruit",
              },
            ],
          },
          {
            text: "Operative (Coming Soon)",
            collapsed: true,
            items: [
              { text: "Overview", link: "/operative/" },
              {
                text: "Get started with the Hiring Agent",
                link: "/operative/01-get-started/",
              },
              {
                text: "Connected Agents",
                link: "/operative/02-multi-agent/",
              },
              {
                text: "Add Event Triggers to act autonomously",
                link: "/operative/03-automate-triggers/",
              },
              {
                text: "Authoring Agent Instructions",
                link: "/operative/04-agent-instructions/",
              },
              {
                text: "Personalizing Agent Responses",
                link: "/operative/05-agent-responses/",
              },
              {
                text: "AI Safety and Content Moderation",
                link: "/operative/06-ai-safety/",
              },
              {
                text: "Extracting Resume Contents with Multimodal Prompts",
                link: "/operative/07-multimodal-prompts/",
              },
              {
                text: "Enhanced prompts with Dataverse grounding",
                link: "/operative/08-dataverse-grounding/",
              },
              {
                text: "Applying Deep Reasoning",
                link: "/operative/09-deep-reasoning/",
              },
              {
                text: "Generate Candidate Specific Interview Docs",
                link: "/operative/10-generate-documents/",
              },
              {
                text: "Obtain User Feedback with Adaptive Cards",
                link: "/operative/11-obtain-user-feedback/",
              },
              {
                text: "Publishing Your Agents to a Demo Website",
                link: "/operative/12-demo-website/",
              },
            ],
          },
          { text: "Commander (Coming Soon)", link: "/commander/" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/microsoft/agent-academy/",
      },
    ],
  },
});
