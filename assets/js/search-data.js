// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "My publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "How large language models interact with human language — the patterns they absorb from training and how those patterns shape their outputs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research tools and interactive visualizations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching-amp-activities",
          title: "teaching &amp; activities",
          description: "Teaching, mentorship, and community engagement.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-two-new-preprints-on-arxiv-how-random-is-random-evaluating-the-randomness-and-humanness-of-llms-coin-flips-and-what-s-in-a-niche-migration-patterns-in-online-communities",
          title: 'Two new preprints on arXiv: How Random is Random? Evaluating the Randomness and...',
          description: "",
          section: "News",},{id: "news-defended-my-phd-at-cornell-university-thanks-to-my-advisor-jon-kleinberg-and-my-committee",
          title: 'Defended my PhD at Cornell University. Thanks to my advisor Jon Kleinberg and...',
          description: "",
          section: "News",},{id: "news-started-as-a-postdoctoral-researcher-at-the-johns-hopkins-data-science-and-ai-institute-working-with-anjalie-field",
          title: 'Started as a postdoctoral researcher at the Johns Hopkins Data Science and AI...',
          description: "",
          section: "News",},{id: "news-i-will-attend-acl-2026-in-san-diego-july-2-7",
          title: 'I will attend ACL 2026 in San Diego (July 2–7).',
          description: "",
          section: "News",},{id: "news-i-m-co-organizing-iab-the-first-workshop-on-interpreting-agent-behavior-at-neurips-2026-in-sydney",
          title: 'I’m co-organizing IAB: the First Workshop on Interpreting Agent Behavior at NeurIPS 2026...',
          description: "",
          section: "News",},{id: "news-our-colm-2026-paper-with-anjalie-field-it-s-how-you-ask-gender-associated-linguistic-bias-in-llms-is-now-on-arxiv",
          title: 'Our COLM 2026 paper with Anjalie Field, It’s How You Ask: Gender-Associated Linguistic...',
          description: "",
          section: "News",},{id: "news-social-tectonics-rapid-organization-of-online-covid-communities-with-yiquan-hong-and-jon-kleinberg-is-out-in-plos-one",
          title: 'Social Tectonics: Rapid Organization of Online COVID Communities, with Yiquan Hong and Jon...',
          description: "",
          section: "News",},{id: "news-how-to-interpret-agent-behavior-was-accepted-to-the-neurips-2026-evaluations-amp-amp-datasets-track",
          title: 'How to Interpret Agent Behavior was accepted to the NeurIPS 2026 Evaluations &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-the-bureaucratization-of-the-internet-analyzing-the-diffusion-of-governance-regimes-on-reddit-2011-2023-with-yuanhao-liu-and-jon-kleinberg-will-appear-at-icwsm-2027-and-is-now-on-arxiv",
          title: 'The Bureaucratization of the Internet: Analyzing the Diffusion of Governance Regimes on Reddit...',
          description: "",
          section: "News",},{id: "news-heading-to-the-bay-area-attending-tada-2026-at-uc-berkeley-october-5-then-presenting-it-s-how-you-ask-gender-associated-linguistic-bias-in-llms-at-colm-2026-in-san-francisco-october-6-9",
          title: 'Heading to the Bay Area: attending TADA 2026 at UC Berkeley (October 5),...',
          description: "",
          section: "News",},{id: "projects-historical-binomial-visualizer",
          title: 'Historical Binomial Visualizer',
          description: "An interactive tool for exploring how the ordering of English word pairs has shifted over time. Built with D3.js on a corpus of historical American English text. Companion paper under review.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project.html";
            },},{id: "projects-crosspaths",
          title: 'CrossPaths',
          description: "A travel-overlap app — enter your travel plans and get notified when a connected friend will be in the same place at the same time. Built with FastAPI, SQLAlchemy, and Jinja2.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crosspaths.html";
            },},{id: "projects-reps-amp-amp-relics",
          title: 'Reps &amp;amp;amp; Relics',
          description: "A narrative fitness tracker that turns your workouts into an RPG adventure. Single-file PWA — no backend, no build step, data stored locally.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reps_relics.html";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/ktvank.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%76%61%6E%6B%6F%65%31@%6A%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ktvank", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kvank", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gYj8HUUAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
