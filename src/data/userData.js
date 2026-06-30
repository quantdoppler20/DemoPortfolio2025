export const userData = {
  personal: {
    name: "QuantDoppler",
    subtitle: "Sovereign Systems Engineering. AI-Driven Architecture. Deep-Tech at Scale.",
    description: "A deep-tech engineering bureau forging enterprise-grade systems for industries that cannot fail. From first telemetry to live mission deployment — a single trajectory, full-stack ownership, zero handoffs, zero compromise.",
    location: "Available Worldwide",
    email: "ehiane@example.com",
    github: "https://github.com/ehiane",
  },

  terminalSequence: [
    "> initializing bureau systems...",
    "> loading mission parameters...",
    "> compiling sovereign stack...",
    "> synchronizing deployment trajectory...",
    "> all systems nominal. mission ready, commander_"
  ],

  projects: [
    {
      id: "milestone",
      name: "Milestone Inventory Tracking App",
      description: "Enterprise asset management platform engineered for precision-critical operations",
      fullDescription: "Enterprise-grade inventory management system built for precision-critical operational environments. Delivers role-based access control, automated testing pipelines, and real-time status tracking — engineered to eliminate error-prone manual processes at institutional scale. 150+ assets tracked with full accountability, zero operational friction, and security-hardened API routes throughout.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Jest", "Cypress", "Role-based Auth"],
      highlights: [
        "Role-based access control system",
        "Automated testing with full coverage",
        "Real-time status tracking at scale",
        "Security-hardened API architecture"
      ],
      metrics: {
        items: "150+",
        test_coverage: "100%",
        impact: "Zero Operational Friction"
      },
      status: "Live",
      youtube: "https://youtu.be/J20Uh5-bNbM?si=8sU6y7fBWDth88jC",
      stillImage: "/assets/bentoGrids/Milestone/Milestone_still.png",
      hoverVideo: "/assets/bentoGrids/Milestone/Milestone_hover.mp4",
      gridSize: "large"
    },
    {
      id: "hackronomics",
      name: "Hackronomics",
      description: "AI-powered financial intelligence platform — awarded Best Use of MongoDB, CrimsonCode 2025",
      fullDescription: "AI-powered financial intelligence platform delivering real-time expense analysis and personalized optimization guidance. Integrates OpenAI's language models with MongoDB for intelligent transaction categorization and natural-language financial querying. Recognized for innovative AI-data architecture — awarded Best Use of MongoDB at CrimsonCode 2025.",
      techStack: ["React", "Node.js", "MongoDB", "OpenAI API", "Data Visualization", "Three.js", "REST APIs"],
      highlights: [
        "Awarded Best Use of MongoDB — CrimsonCode 2025",
        "AI-powered expense categorization engine",
        "Natural-language financial querying",
        "Interactive data visualization dashboards"
      ],
      metrics: {
        achievement: "Best Use of MongoDB",
        ai: "OpenAI Integration",
        insights: "Personalized"
      },
      github: "https://github.com/Ehiane/Hackronomics",
      stillImage: "/assets/bentoGrids/Hackronomics/Hackronomics_Still.png",
      hoverVideo: "/assets/bentoGrids/Hackronomics/Hackronomics_hover.mp4",
      gridSize: "large"
    },
    {
      id: "fundraiser",
      name: "Fundraiser Management System",
      description: "Multi-workflow donation management platform with production-grade architecture",
      fullDescription: "Donation management platform engineered for multi-workflow scholarship fund operations. Features a robust donation processing engine, comprehensive validation layers, and a clean modular architecture aligned with production-ready software design patterns. Validated end-to-end by a full NUnit test suite across all processing workflows.",
      techStack: ["C#", "Winforms", ".NET", "XML", "NUnit", "Software Design Patterns", "Entity Framework"],
      highlights: [
        "Multi-workflow donation processing engine",
        "Production-grade modular architecture",
        "Comprehensive NUnit test suite",
        "Clean separation of concerns throughout"
      ],
      metrics: {
        workflows: "Multiple",
        testing: "NUnit",
        architecture: "Modular"
      },
      github: "https://github.com/serApplication_WinForms",
      stillImage: "/assets/bentoGrids/FFundraiserFundraiser_still.png",
      hoverVideo: "/assets/bentoGrids/Fundraiser/Fundraiser_hover.mp4",
      gridSize: "small"
    },
    {
      id: "spreadsheet",
      name: "Spreadsheet Engine",
      description: "High-fidelity spreadsheet engine built from first principles with full formula support",
      fullDescription: "High-fidelity spreadsheet engine engineered from first principles — featuring formula support, live cell referencing, undo/redo stacks, and color formatting. A systems engineering benchmark: a full cell dependency engine implemented in C# and validated by 80+ passing unit tests, certifying production-grade reliability across all computational pathways.",
      techStack: ["C#", "WinForms", ".NET", "OOP", "Data Structures", "Expression Parsing", "Unit Testing"],
      highlights: [
        "Full formula support and live cell referencing",
        "Complete undo/redo functionality",
        "Color formatting and visual customization",
        "80+ passing unit tests"
      ],
      metrics: {
        tests: "80+",
        features: "Full Formula Support",
        architecture: "Cell Dependency Engine"
      },
      github: "https://github.com/Ehiane/spreadsheet_application",
      stillImage: "/assets/bentoGrids/SpreadSheet/SpreadSheet_still.png",
      hoverVideo: "/assets/bentoGrids/SpreadSheet/SpreadSheet_hover.mp4",
      gridSize: "medium"
    },
    {
      id: "imdb",
      name: "IMDb Movie Sentiment Analysis",
      description: "Deep learning NLP system achieving 84% binary sentiment classification accuracy",
      fullDescription: "Deep learning NLP system trained on 50,000 IMDb reviews for binary sentiment classification. LSTM architecture with dropout regularization and tokenized word embeddings achieves 84% accuracy — surfacing meaningful emotional signal patterns across large-scale film review corpora with measurable confidence and minimal overfitting.",
      techStack: ["Python", "TensorFlow", "Word Embeddings", "LSTM", "NLP", "Deep Learning", "Neural Networks"],
      highlights: [
        "50K IMDb reviews training corpus",
        "84% classification accuracy achieved",
        "LSTM neural network architecture",
        "Dropout regularization for generalization"
      ],
      metrics: {
        reviews: "50K",
        accuracy: "84%",
        model: "LSTM"
      },
      github: "https://github.com/Ehiane/imdb-movie-sentiment-analysis",
      stillImage: "/assets/bentoGrids/IMDB/imdb_still.png",
      hoverVideo: "/assets/bentoGrids/IMDB/imdb_hover.mp4",
      gridSize: "medium"
    },
    {
      id: "yelp-data",
      name: "Yelp Data Analysis & Insights",
      description: "End-to-end ETL intelligence pipeline processing 6M+ data points at enterprise scale",
      fullDescription: "End-to-end ETL intelligence pipeline processing 6M+ data points from Yelp's public dataset. Enables real-time search, multi-dimensional filtering, and geographic trend analysis across business categories — delivering location-aware decision intelligence at enterprise scale through a PostgreSQL-backed analytics engine.",
      techStack: ["Python", "Pandas", "PostgreSQL", "ETL", "Data Visualization", "Analytics"],
      highlights: [
        "6M+ data points processed end-to-end",
        "Full ETL pipeline from ingestion to insight",
        "Multi-city geographic trend analysis",
        "Location-aware decision intelligence"
      ],
      metrics: {
        data: "6M+",
        cities: "Multi-city",
        insights: "Location-based"
      },
      github: "https://github.com/ehiane/yelp-analytics",
      youtube: "https://www.youtube.com/watch?v=VPdj3VkV9Es",
      stillImage: "/assets/bentoGrids/YelpData/yelp_data_still.png",
      hoverVideo: "/assets/bentoGrids/YelpData/yelp_data_hover.mp4",
      gridSize: "small"
    },
    {
      id: "harvard-school",
      name: "Harvard School Akute Website",
      description: "Full-stack mobile-responsive web platform delivering 13% enrollment growth in one term",
      fullDescription: "Full-stack mobile-responsive web platform deployed for an educational institution with zero prior digital presence. SEO-optimized from day one with integrated analytics and structured metadata. Delivered measurable outcomes: 13% enrollment growth within the first term and institutional support for WAEC and NECO certification requirements.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "SEO", "Google Analytics"],
      highlights: [
        "Fully mobile-responsive design",
        "SEO-optimized for organic discoverability",
        "13% enrollment growth — first term",
        "WAEC and NECO certification support"
      ],
      metrics: {
        enrollment: "+13%",
        certifications: "WAEC & NECO",
        optimization: "SEO"
      },
      status: "Live",
      demo: "https://harvardschoolakute.com/",
      stillImage: "/assets/bentoGrids/HarvardSchool/Harvard School_still.png",
      hoverVideo: "/assets/bentoGrids/HarvardSchool/Harvard School_hover.mp4",
      gridSize: "large"
    },
    {
      id: "faculty-research",
      name: "Student-Faculty Research Portal",
      description: "Secure multi-role research collaboration platform piloted at 100+ user scale",
      fullDescription: "Secure multi-role web platform connecting academic researchers with eligible collaborators across an institutional network. Agile-driven architecture with version-controlled codebase, TDD methodology, and full-lifecycle application management from discovery through deployment. Piloted at 100+ user scale with 98% test coverage and streamlined access across all stakeholder roles.",
      techStack: ["Flask", "Python", "SQLite", "Authentication", "Dashboard", "Web Development", "Agile Development", "Test-Driven Development", "Technical Documentation"],
      highlights: [
        "Agile-driven, version-controlled from day one",
        "Secure multi-role authentication system",
        "Test-driven development throughout",
        "Full-lifecycle application management"
      ],
      metrics: {
        test_coverage: "98%",
        phase: "Pilot Testing",
        impact: "Streamlined Access"
      },
      github: "https://github.com/Ehiane/StudentFacultyResearchPortal",
      youtube: "https://youtu.be/6KkSGxuj5pA",
      stillImage: "/assets/bentoGrids/FacultyResearch/FacultyResearch_still.png",
      hoverVideo: "/assets/bentoGrids/FacultyResearch/FacultyResearch_hover.mp4",
      gridSize: "medium"
    },
    {
      id: "python-100-days",
      name: "100 Days of Code — Python Projects",
      description: "Intensive Python engineering sprint across 30+ production-grade systems",
      fullDescription: "Intensive Python engineering sprint spanning 30+ production-grade mini-systems — covering automation, data processing, GUI applications, and game development. Demonstrates core engineering discipline: daily iteration, debugging to completion, and systematic shipping across OOP, functional programming, Tkinter interfaces, and third-party API integrations.",
      techStack: ["Python", "OOP", "Tkinter", "Turtle Graphics", "File I/O", "Pandas", "GUI Apps", "APIs", "smtplib", "Random Library"],
      highlights: [
        "30+ production-grade systems delivered",
        "OOP and functional programming applied",
        "GUI applications built with Tkinter",
        "Automation, data processing, and game dev"
      ],
      metrics: {
        days: "30+",
        projects: "25+",
        gui_apps: "6",
        games: "7"
      },
      github: "https://github.com/Ehiane/100_days_of_code_in_python-Projects",
      stillImage: "/assets/bentoGrids/100DaysOfCode/100Days_still.png",
      hoverVideo: "/assets/bentoGrids/100DaysOfCode/100Days_hover.mp4",
      gridSize: "large"
    }
  ],

  professionalInvolvements: [
    {
      id: "nsbe-leadership",
      name: "NSBE Leadership",
      description: "National Society of Black Engineers — Progressive national command roles across three years",
      fullDescription: "Progressive national leadership positions within NSBE over three years — spanning Director of National Communications, Secretary, and Co-Director of Conferences. Commanded cross-chapter communication operations, national-scale event deployments, and organizational systems management — including the restoration of WSU's national chapter presence after a four-year absence.",
      role: "Communications Director | Secretary | Conferences Co-Director",
      period: "2022-2025",
      company: "National Society of Black Engineers (NSBE)",
      tags: ["Leadership", "Event Planning", "Project Management", "Communication", "Team Coordination"],
      highlights: [
        "Restored WSU's national presence after a 4-year gap",
        "Commanded technical workshops and chapter readiness programs",
        "Directed large-scale national conferences end-to-end"
      ],
      achievements: [
        "National communication initiatives across chapters",
        "Organizational documentation managed at institutional scale",
        "Major conferences and flagship events directed",
        "Cross-functional team operations commanded"
      ],
      type: "leadership",
      gridSize: "large",
      icon: "/assets/professional_icons/nsbe.png"
    },
    {
      id: "cougar-card-center",
      name: "Cougar Card Center",
      description: "High-volume campus operations and student services at Washington State University",
      fullDescription: "Front-line administrative operations at Washington State University's Cougar Card Center — managing high-volume card issuance, student services delivery, and operational workflows in a precision-critical campus environment. Consistent service excellence across a demanding, high-traffic operational context.",
      role: "Clerical Assistant I",
      period: "2022 - 2023",
      company: "Washington State University",
      tags: ["Customer Service", "Student Services", "Communication"],
      highlights: [
        "High-volume student ID card issuance and management",
        "Consistent service excellence in high-traffic environment",
        "Day-to-day campus operations maintained"
      ],
      achievements: [
        "Customer-facing communication refined under operational pressure",
        "Card processing workflows streamlined for throughput",
        "Student service experience improved measurably",
        "Administrative operations foundation established"
      ],
      type: "work",
      gridSize: "medium",
      icon: "/assets/professional_icons/wsu.png"
    },
    {
      id: "sel-internship",
      name: "SEL Internship",
      description: "Software QA engineering at Schweitzer Engineering Laboratories — critical infrastructure systems",
      fullDescription: "Software quality assurance engineering at Schweitzer Engineering Laboratories — protecting mission-critical electrical infrastructure. Authored comprehensive test scripts, conducted failure data analysis for root-cause identification, and supported QA infrastructure processes that ensure enterprise-grade software reliability before deployment.",
      role: "Test Engineer (Software) Intern",
      period: "2023",
      company: "Schweitzer Engineering Laboratories (SEL)",
      tags: ["Testing Frameworks", "Quality Assurance", "Test Scripts", "Data Analysis", "Bug Tracking"],
      highlights: [
        "Comprehensive test scripts authored for critical systems",
        "Failure data analyzed for root-cause identification",
        "QA documentation and reporting processes supported",
        "Enterprise-level testing methodology applied"
      ],
      achievements: [
        "Test coverage efficiency improved across modules",
        "Critical system vulnerabilities identified pre-release",
        "QA documentation and reporting streamlined",
        "Enterprise-grade QA processes internalized"
      ],
      type: "internship",
      gridSize: "large",
      icon: "/assets/professional_icons/sel.png"
    },
    {
      id: "plum",
      name: "Plum AI",
      description: "AI-powered calendar scheduling intelligence — full-stack feature engineering",
      fullDescription: "AI-powered calendar intelligence system delivering optimal scheduling recommendations parsed from Google and Apple Calendar data. Full-stack feature development across React/TypeScript frontend and Node.js/MongoDB backend, with an intelligent time-slot recommendation engine, secure multi-platform authentication, and optimized data processing pipelines.",
      role: "Software Engineer",
      period: "Feb 2025 - May 2025",
      company: "Pangeon.com",
      tags: ["React", "TypeScript", "Node.js", "TensorFlow", "MongoDB", "AWS"],
      highlights: [
        "AI-driven calendar parsing and scheduling engine",
        "Google and Apple Calendar integrations deployed",
        "Intelligent time-slot recommendation system",
        "Full-stack feature development across the entire stack"
      ],
      achievements: [
        "AI scheduling recommendation engine engineered",
        "Secure multi-platform authentication implemented",
        "Data processing pipelines optimized for latency"
      ],
      type: "professional",
      gridSize: "medium",
      icon: "/assets/professional_icons/plum.png"
    },
    {
      id: "jeroyaf",
      name: "Jeroyaf Accounting & Tax Services",
      description: "Internal automation platform for high-volume accounting and tax service operations",
      fullDescription: "Internal automation platform for high-volume accounting and tax service operations. Integrates QuickBooks and ProSeries APIs to streamline bookkeeping workflows, accelerate tax preparation processes, and deliver compliant, accurate financial processing at tax-season scale — with performance optimization and full audit traceability throughout.",
      role: "Software Engineer",
      period: "Jun 2025 - Present",
      company: "Jeroyaf Accounting and Tax Services",
      tags: ["Python", "Flask", "SQL", "QuickBooks API", "ProSeries", "Automation"],
      highlights: [
        "Bookkeeping automation deployed at volume scale",
        "Internal tooling engineered for precision workflows",
        "Compliant, secure financial processing pipelines",
        "QuickBooks and ProSeries API integrations live"
      ],
      achievements: [
        "High-volume repetitive accounting tasks automated",
        "QuickBooks and ProSeries APIs integrated seamlessly",
        "Internal workflow accuracy and traceability improved",
        "Tax-season scalability delivered on deadline"
      ],
      type: "professional",
      gridSize: "medium",
      icon: "/assets/professional_icons/jeroyaf.png"
    }
  ],

  skills: {
    languages: [
      "Python", "C", "C++", "C#", "JavaScript", "Swift", "TypeScript", "Haskell", "XML", "HTML", "CSS"
    ],
    concepts: [
      "Data Structures and Algorithms", "Scalability", "OOP", "Software Design Patterns", "Agile Development"
    ],
    frameworks: [
      "Flask", "React.js", "Node.js", "Express.js", ".Net", "SQL Alchemy"
    ],
    systems: [
      "CI/CD Pipelines", "API Development", "Scalable Web Applications"
    ],
    databases: [
      "SQL", "SQLite", "MySQL", "PostgreSQL", "MongoDB", "RDBMS"
    ],
    development: [
      "Git/GitHub", "Jira", "Postman", "Linux", "PowerBI", "REST APIs", "Power Query", "MS Excel"
    ],
    testing: [
      "NUnit", "Selenium", "Cypress", "Unittest", "Pytest", "TDD (Test Driven Development)"
    ],
    analytics: [
      "PowerBI", "Power Query", "MS Excel", "Data Visualization", "Statistical Analysis"
    ],
    methodologies: [
      "Agile", "Scrum", "TDD", "Code Review", "Version Control", "Documentation"
    ]
  },

  experience: [
    {
      title: "Senior Full-Stack Engineer",
      company: "Tech Innovation Labs",
      period: "2022 - Present",
      description: "Leading the development of AI-powered applications and distributed systems architecture.",
      achievements: [
        "Built scalable microservices handling 1M+ daily requests",
        "Implemented ML models improving user engagement by 40%",
        "Mentored junior engineers and established team coding standards"
      ]
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Inc",
      period: "2020 - 2022",
      description: "Developed full-stack applications with a focus on user experience and performance optimization.",
      achievements: [
        "Reduced application load time by 60% through targeted optimization",
        "Built responsive web applications serving 100K+ users",
        "Collaborated with design teams to deliver pixel-perfect interfaces"
      ]
    }
  ],

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Washington State University",
    year: "2025",
    achievements: ["Full-Stack Engineering", "AI & Machine Learning", "Systems Architecture"]
  }
}
