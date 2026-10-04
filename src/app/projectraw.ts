import { Injectable } from "@angular/core";
import { projectInfoData } from "./interfaces";

@Injectable({ providedIn : 'root'})
export class ProjectRaw {
  private rawData : projectInfoData[] = [
    {
      id: 1,
      title: "SearchNEU.com",
      projectImgURL: "/optimized/searchTest.webp",
      popUp: {
        timeFrame: "Sept. 2025 – Present",
        description: "A full-scale university course catalog serving thousands of Northeastern students. The platform scrapes real-time course data, powers a fast trigram-based search, and delivers individualized notifications to hundreds of user profiles.",
        checkOut: "https://searchneu.com/",
        bullets: [
          "Scrapes real-time Northeastern course data via RESTful API requests and PostgreSQL queries",
          "Implements trigram-based SQL search to query course data, optimizing latency for 100+ concurrent users",
          "Manages 500+ user profiles via TypeScript backend to create & send individualized course notifications",
          "Includes real-time updater for course information, which runs concurrent course scrapes every 5 minutes"
        ],
        tags: ["React.js", "TypeScript", "PostgreSQL", "Vercel", "Node.js", "Docker", "Next.js", "HTML", "Tailwind CSS", "Git", "VsCode", "Drizzle ORM", "Neon"],
        popupImgURL: "/optimized/img1.1.webp"
      },
      priority: 100,
    },
    {
      id: 2,
      title: "Personal AI Assistant",
      projectImgURL: "/optimized/img2.webp",
      popUp: {
        timeFrame: "Mar. 2025 – Present",
        description: "An AI-powered personal assistant featuring real-time speech processing, LLM-based task categorization, and secure OAuth 2.0 integrations with cloud services like Google Calendar and Spotify.",
        checkOut: "https://github.com/lukej1138/jarvisMk3",
        bullets: [
          "Developed an AI-powered assistant with real-time speech processing and LLM-based task categorization",
          "Refactored codebase into an object-oriented, single-entry architecture, removing 500+ lines of redundant code",
          "Containerized an Ollama LLM with a Flask API using Docker, reducing bundled dependencies by 60%",
          "Engineered a secure OAuth 2.0 authentication flow for cloud service integrations like Google Calendar and Spotify"
        ],
        tags: ["Python", "Docker", "Flask", "VsCode", "macOS"],
        popupImgURL: "/optimized/img2.1.webp"
      },
      priority: 99
    },
    {
      id: 3,
      title: "Hanabi Deep-Q RL Model",
      projectImgURL: "/optimized/img3.webp",
      popUp: {
        timeFrame: "Jan. – May 2026",
        description: "A reinforcement learning agent trained to play Hanabi, a cooperative 4-person card game. The model leverages Deep-Q Learning with techniques like epsilon-greedy exploration, double DQN, and action masking to learn hint-based strategy.",
        checkOut: "https://github.com/WiseHunter42/CS4100-Final-Project",
        bullets: [
          "Developed an AI agent capable of playing Hanabi, a 4-person card game focused on both providing and using hints to successfully complete the objective",
          "Implemented Deep-Q Learning using PyTorch neural networks, applying various methods to improve learning such as epsilon-greedy exploration, double DQN, and action masking",
          "Presented findings in a presentation, detailing our tuning of both the DQNs as well as hyperparameters such as learning rate, memory capacity, and discount factor over the course of 6 months"
        ],
        tags: ["Python", "PyTorch", "Pandas", "VsCode"],
        popupImgURL: "/optimized/img3.1.webp"
      },
      priority: 70,
    },
    {
      id: 4,
      title: "Data Pipeline & Analytics Platform",
      projectImgURL: "/optimized/img4.webp",
      popUp: {
        timeFrame: "May 2026",
        description: "An end-to-end data pipeline that ingests multi-currency expense transactions from CSV into a normalized SQLite database and a cloud-hosted MySQL analytical data warehouse, featuring a star-schema data mart and MongoDB document-based storage.",
        checkOut: "N/A",
        bullets: [
          "Designed and implemented an end-to-end data pipeline ingesting multi-currency expense transactions from CSV into a normalized SQLite database, then into a cloud-hosted MySQL analytical data warehouse",
          "Built a star-schema data mart with fact tables, partitioning, and indexing, loading two years of travel expense data for 100 employees in under five minutes",
          "Integrated MongoDB for flexible expense report storage supporting multi-project billing allocation across clients and currencies"
        ],
        tags: ["R Language", "VsCode"],
        popupImgURL: "/optimized/img4.1.webp"
      },
      priority: 50,
    },
    {
      id: 5,
      title: "Sanguine Card Game",
      projectImgURL: "/optimized/img5.webp",
      popUp: {
        timeFrame: "Nov. 2025 – Dec. 2025",
        description: "A real-time multiplayer digital card game built with a Java Swing GUI and modular MVC architecture. The project features a comprehensive automated test suite and was developed through collaborative code review sessions.",
        checkOut: "N/A",
        bullets: [
          "Produced Sanguine, a real-time multiplayer digital card game with a Java Swing GUI and modular software design",
          "Integrated a 200+ automated test suite covering both unit and integration tests to ensure end-to-end functionality",
          "Contrived an object-oriented, MVC architecture to promote high cohesion, loose coupling, and maintainability",
          "Held debugging and code review sessions with team-members before adding new features to deployment"
        ],
        tags: ["Java", "JUnit", "Swing", "Git", "IntelliJ"],
        popupImgURL: "/optimized/img5.1.webp"
      },
      priority: 30,
    },
    {
      id: 6,
      title: "LeetCode Ping Platform",
      projectImgURL: "/optimized/img6.webp",
      popUp: {
        timeFrame: "August 2025",
        description: "A Raspberry Pi program that sends a phone notification whenever the new LeetCode daily challenge is released, with automatic time zone adjustment. Built on an Ubuntu Linux distribution using the LeetCode API and the Ntfy push service.",
        checkOut: "https://github.com/lukej1138/PUSHPUSHPUSH",
        bullets: [
          "Built a program on a Raspberry Pi that pings an app on my phone whenever the new LeetCode daily challenge is released, adjusting the time of ping for all time zones and minute-offset",
          "Created this program in an Ubuntu distribution of Linux, enabling me to learn the various aspects of its command line as well as how to locally install dependencies",
          "Used the 'requests' Python library to both query the LeetCode API and POST to the app on my phone, Ntfy"
        ],
        tags: ["Python", "Linux", "VsCode"],
        popupImgURL: "/optimized/img6.webp"
      },
      priority: 80
    },
    {
      id: 7,
      title: "Convention Center Event Manager",
      projectImgURL: "/optimized/img7.webp",
      popUp: {
        timeFrame: "June 2025",
        description: "A user-friendly, object-oriented program for managing convention center events and reservations. It implements complex business logic with state persistence, input validation, and role-based workflows, backed by comprehensive UML documentation.",
        checkOut: "N/A",
        bullets: [
          "Developed a user-friendly, object-oriented program for managing convention center events and reservations",
          "Built end-to-end functionality for complex business logic such as state persistence, input validation, and role-based workflows, utilizing defensive programming and common programming practices such as SOLID, YAGNI, and DRY",
          "Produced comprehensive technical documentation, including UML class diagrams, sequence diagrams, and CRC cards, to model system architecture and object interactions for easier debugging and future onboarding"
        ],
        tags: ["C++ Language", "VsCode"],
        popupImgURL: "/optimized/img7.1.webp"
      },
      priority: 20,
    },
    {
      id: 8,
      title: "PawHacks Development",
      projectImgURL: "/optimized/img8.webp",
      popUp: {
        timeFrame: "Jan. – Mar. 2025",
        description: "The official website for PawHacks, the first student-led hackathon at Northeastern University's Oakland campus. Built collaboratively with a team of five developers, featuring a responsive front-page UI designed to drive event engagement.",
        checkOut: "https://github.com/lukej1138/PawHacks2",
        bullets: [
          "Collaborated with 4 other developers to design and develop the official website for PawHacks, the first student-led hackathon at Northeastern University's Oakland campus",
          "Designed and implemented a responsive front-page UI using JavaScript to promote engagement with the event",
          "Presented an introduction to web development to a cohort of 10+ PawHacks participants"
        ],
        tags: ["HTML", "Tailwind CSS", "JavaScript", "Astro", "Git", "VsCode"],
        popupImgURL: "/optimized/img8.1.webp"
      },
      priority: 69,
    },
    {
      id: 9,
      title: "Personal Website V1",
      projectImgURL: "/optimized/img9.webp",
      popUp: {
        timeFrame: "March 2025",
        description: "A published portfolio website showcasing programming projects in concise, engaging sections. Built with Astro as a web framework for component and service creation, with JavaScript handling DOM manipulation and Netlify providing frontend hosting.",
        checkOut: "https://github.com/lukej1138/LJWeb",
        bullets: [
          "Developed a published portfolio website, utilizing Javascript for DOM manipulation and Astro as a web framework for component/service creation",
          "Analyzed and rendered large, complex programming projects into concise, readable, and engaging sections",
          "Worked with frontend hosting services to minimize backend development and streamline deployment"
        ],
        tags: ["JavaScript", "CSS", "HTML", "Astro", "Netlify", "VsCode"],
        popupImgURL: "/optimized/img9.1.webp"
      },
      priority: 71,
    },
    {
      id: 10,
      title: "Fitness Prediction Model",
      projectImgURL: "/optimized/img10.webp",
      popUp: {
        timeFrame: "December 2024",
        description: "A machine learning model that predicts fitness scores on a 0–21 scale using a random forest regressor trained on a 500k-record dataset. The model analyzes factors like activity and sleep to assess physical health, achieving a mean absolute error of 2.6.",
        checkOut: "https://github.com/lukej1138/FitLife",
        bullets: [
          "Created a machine learning prediction model by parsing a 500k-record dataset with a random forest regressor",
          "Determined fitness scores on a 0-21 scale, analyzing the impact of factors like activity and sleep on physical health",
          "Tuned model hyper-parameters and applied ordinal encoding to increase prediction accuracy by 8%",
          "Achieved a mean absolute error of 2.6 in predicting fitness scores, visualizing implementation in Jupyter notebook"
        ],
        tags: ["Python", "Scikit-learn", "NumPy", "Pandas", "VsCode"],
        popupImgURL: "/optimized/img10.1.webp"
      },
      priority: 79,
    },
    {
      id: 11,
      title: "Climate Resilience Hackathon (EcoVision)",
      projectImgURL: "/optimized/img11.webp",
      popUp: {
        timeFrame: "October 2024",
        description: "A platform that translates geographic data into actionable climate risk insights via a PyTorch neural network. The project earned 2nd place out of 12 teams in the week-long NEU Climate Resilience Hackathon.",
        checkOut: "https://github.com/Ched3/Eco-Vision",
        bullets: [
          "Built a platform that translates geographic data into actionable climate risk insights via a PyTorch neural network",
          "Achieved 2nd place out of 12 teams in the week-long NEU Climate Resilience Hackathon",
          "Oversaw EcoVision's full-stack development, utilizing Flask for app routing and SQLite for user-data management",
          "Managed GitHub collaboration across multiple branches, conducting code reviews and resolving merge conflicts"
        ],
        tags: ["Python", "Tailwind CSS", "Flask", "SQLite", "HTML", "JavaScript", "Git", "VsCode"],
        popupImgURL: "/optimized/img11.1.webp"
      },
      priority: 81
    },
    {
      id: 12,
      title: "Red-Black Tree",
      projectImgURL: "/optimized/img12.webp",
      popUp: {
        timeFrame: "May 2024",
        description: "A Red-Black Tree data structure implementation optimized for dynamic data sets, featuring a command-line interface for file input and storage with visualization, searching, insertion, and deletion capabilities.",
        checkOut: "https://github.com/lukej1138/Primary_Repository_PSU/tree/main/RedBlackTree",
        bullets: [
          "Created a Red-Black Tree data structure for dynamic data sets via node pointers, prioritizing runtime efficiency for memory overhead",
          "Implemented a command-line interface using pointers and c-strings, enabling the input and storage of files; included visualization, searching, insertion, and deletion capabilities"
        ],
        tags: ["C++ Language", "VsCode"],
        popupImgURL: "/optimized/img12.1.webp"
      },
      priority: 30
    }
  ];

  private rawTags: string[] = [
    "React.js", "TypeScript", "PostgreSQL", "Vercel", "Node.js", "Docker", "Next.js", "Drizzle ORM", "Neon",
    "Python", "Flask", "PyTorch", "Pandas", "R Language",
    "Java", "JUnit", "Swing",
    "Linux", "C++ Language",
    "HTML", "Tailwind CSS", "JavaScript", "CSS", "Astro", "Netlify",
    "Scikit-learn", "NumPy", "SQLite", "Git", "IntelliJ", "VsCode", "macOS"
  ];

  getAllRawTags() {
    return [...this.rawTags];
  }

  getDataById(id: number) {
    return this.rawData.filter((data) => data.id == id)[0];
  }

  getAllData() {
    return [...this.rawData];
  }
}
