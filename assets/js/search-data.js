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
          section: "News",},{id: "projects-historical-binomial-visualizer",
          title: 'Historical Binomial Visualizer',
          description: "An interactive tool for exploring how the ordering of English word pairs has shifted over time. Built with D3.js on a corpus of historical American English text. Companion paper under review.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project.html";
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
          window.open("https://www.linkedin.com/in/katherine-v-5b4937108", "_blank");
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
