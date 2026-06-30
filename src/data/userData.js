// User data extracted from resume and portfolio requirements
export const userData = {
  personal: {
    name: "QuantDoppler",
    subtitle: "Sovereign Systems Engineer. AI-Driven Architect. Deep-Tech Builder.",
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
      description: "Capstone Project: Full-stack inventory system built for a nonprofit organization",
      fullDescription: "A nonprofit serving individuals with developmental disabilities relied on manual, error-prone equipment tracking. I co-led the end-to-end development of a full-stack inventory system featuring role-based access control, automated testing, and real-time status updates. The result: 150+ items now tracked with measurable accountability and zero manual confusion.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Jest", "Cypress", "Role-based Auth"],
      highlights: [
        "Role-based access control system",
        "Automated testing with full coverage",
        "Real-time status updates",
        "Security-hardened API routes"
      ],
      metrics: {
        items: "150+",
        test_coverage: "100%",
        impact: "Improved Accountability"
      },
      status: "Live",
      linkedin: "https://www.linkedin.com/posts/ehiane-oigiagbe_mern-activity-7320861307308503041-ZYF_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnTtAMBmoNJRlQWeYEy2ywCMLykjyUqkh4",
      youtube: "https://youtu.be/J20Uh5-bNbM?si=8sU6y7fBWDth88jC",
      stillImage: "/assets/bentoGrids/Milestone/Milestone_still.png",
      hoverVideo: "/assets/bentoGrids/Milestone/Milestone_hover.mp4",
      gridSize: "large"
    },
    {
      id: "hackronomics",
      name: "Hackronomics",
      description: "Award-winning AI-powered financial assistant built at CrimsonCode Hackathon 2025",
      fullDescription: "At WSU's 2025 CrimsonCode Hackathon, our team engineered Hackronomics — a web app that helps users track spending and receive AI-driven financial guidance. I led the React frontend and integrated MongoDB with OpenAI to intelligently categorize transactions and surface affordable alternatives through natural language prompts. The project earned the 'Best Use of MongoDB' award for its innovative fusion of AI and personal finance.",
      techStack: ["React", "Node.js", "MongoDB", "OpenAI API", "Data Visualization", "Three.js", "REST APIs"],
      highlights: [
        "Won 'Best Use of MongoDB' award",
        "AI-powered expense categorization",
        "Personalized savings recommendations",
        "Interactive data visualization dashboards"
      ],
      metrics: {
        achievement: "Best Use of MongoDB",
        ai: "OpenAI Integration",
        insights: "Personalized"
      },
      github: "https://github.com/Ehiane/Hackronomics",
      linkedin: "https://www.linkedin.com/posts/ehiane-oigiagbe_hackathon-mongodb-hackronomics-activity-7297717726150545408-2LLW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnTtAMBmoNJRlQWeYEy2ywCMLykjyUqkh4",
      stillImage: "/assets/bentoGrids/Hackronomics/Hackronomics_Still.png",
      hoverVideo: "/assets/bentoGrids/Hackronomics/Hackronomics_hover.mp4",
      gridSize: "large"
    },
    {
      id: "fundraiser",
      name: "Fundraiser Management System",
      description: "Mock donation platform for scholarship fund tracking and management",
      fullDescription: "A class project simulating a real-world donation platform for student scholarship fundraising. I designed the UI, implemented the C# backend logic, and authored NUnit tests to verify correct donation processing across multiple workflows. The system demonstrated robust validation, clean modular architecture, and production-ready software design patterns.",
      techStack: ["C#", "Winforms", ".NET", "XML", "NUnit", "Software Design Patterns", "Entity Framework"],
      highlights: [
        "Robust donation processing engine",
        "Multiple fundraising workflow support",
        "Comprehensive NUnit test suite",
        "Clean modular architecture"
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
      description: "WinForms-powered spreadsheet application built from scratch",
      fullDescription: "To deepen my understanding of data structures and expression parsing, I engineered a fully functional spreadsheet application with formula support and live cell referencing. I implemented undo/redo stacks, color formatting, and a cell dependency engine in C# — all validated by 80+ passing unit tests. A pure systems-engineering exercise from first principles.",
      techStack: ["C#", "WinForms", ".NET", "OOP", "Data Structures", "Expression Parsing", "Unit Testing"],
      highlights: [
        "Formula support and cell referencing",
        "Undo/redo functionality",
        "Color formatting features",
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
      description: "LSTM deep learning model for movie review sentiment classification",
      fullDescription: "To explore the intersection of NLP and deep learning, I trained an LSTM model on 50,000 IMDb reviews to classify positive versus negative sentiment. Built with Keras and TensorFlow, the model uses tokenization and dropout regularization to minimize overfitting — achieving 84% accuracy and surfacing meaningful emotional patterns across film reviews.",
      techStack: ["Python", "TensorFlow", "Word Embeddings", "LSTM", "NLP", "Deep Learning", "Neural Networks"],
      highlights: [
        "50K IMDb reviews training dataset",
        "84% classification accuracy",
        "LSTM neural network architecture",
        "Visual sentiment pattern insights"
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
      description: "ETL pipeline and analytics engine for Yelp's massive open dataset",
      fullDescription: "Tasked with extracting meaningful insights from Yelp's massive public dataset, I designed an end-to-end ETL pipeline using Pandas and PostgreSQL — enabling efficient search, filtering, and trend analysis across cities and business categories. The system surfaced key business patterns and empowered users to make smarter, location-aware decisions from over 6 million data points.",
      techStack: ["Python", "Pandas", "PostgreSQL", "ETL", "Data Visualization", "Analytics"],
      highlights: [
        "6M+ data points processed",
        "ETL pipeline from ingestion to insight",
        "Multi-city trend analysis",
        "Location-based decision intelligence"
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
      description: "Mobile-responsive website for a Nigerian school with full SEO integration",
      fullDescription: "My mother's school in Nigeria lacked an online presence, limiting visibility and admissions. I built a fully mobile-responsive website using HTML, CSS, JavaScript, and PHP — integrating SEO best practices and basic analytics from day one. Within a single term, enrollment grew by 13% and the school earned both WAEC and NECO certifications.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "SEO", "Google Analytics"],
      highlights: [
        "Fully mobile-responsive design",
        "SEO-optimized for discoverability",
        "13% enrollment increase within one term",
        "WAEC and NECO certified"
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
      description: "Flask-based web portal for research collaboration at WSU",
      fullDescription: "Built as a capstone-style class project at WSU, this portal applied real-world software engineering principles — from Agile methodology to version control and end-to-end documentation. I developed a secure Flask web application allowing students to discover and apply to research opportunities while giving faculty a dashboard to manage the full application lifecycle. Piloted with 100+ simulated users, it demonstrated how disciplined engineering turns a concept into a scalable, production-ready system.",
      techStack: ["Flask", "Python", "SQLite", "Authentication", "Dashboard", "Web Development", "Agile Development", "Test-Driven Development", "Technical Documentation"],
      highlights: [
        "Agile-driven development workflow",
        "Version-controlled from day one",
        "Secure multi-role authentication",
        "Test-driven development throughout"
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
      description: "Daily Python challenge: 30+ projects spanning beginner to intermediate level",
      fullDescription: "Inspired by Angela Yu's Udemy course, this self-paced challenge drove me through 30+ Python mini-projects spanning data handling, OOP, automation, and game design. From text-based games to GUI apps built with Tkinter, each project turned core concepts — loops, conditionals, dictionaries — into fully interactive programs. The experience cemented my Python fundamentals and instilled a discipline of daily iteration, debugging, and shipping.",
      techStack: ["Python", "OOP", "Tkinter", "Turtle Graphics", "File I/O", "Pandas", "GUI Apps", "APIs", "smtplib", "Random Library"],
      highlights: [
        "Consistent daily code challenges",
        "OOP and functional programming projects",
        "GUI applications built with Tkinter",
        "Game development and automation scripts"
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
      description: "National Society of Black Engineers — Multiple progressive leadership roles",
      fullDescription: "Held progressive leadership positions within NSBE over three years — advancing from Director of National Communications to Secretary to Co-Director of Conferences. Led event planning, team coordination, and organizational communication at a national level, including reviving WSU's national chapter presence after a four-year hiatus.",
      role: "Communications Director | Secretary | Conferences Co-Director",
      period: "2022-2025",
      company: "National Society of Black Engineers (NSBE)",
      tags: ["Leadership", "Event Planning", "Project Management", "Communication", "Team Coordination"],
      highlights: [
        "Revived WSU's national presence after a 4-year hiatus",
        "Led technical workshops on conference readiness",
        "Coordinated large-scale national events"
      ],
      achievements: [
        "Drove national communication initiatives across chapters",
        "Managed organizational documentation at scale",
        "Directed major conferences and flagship events",
        "Accelerated personal and team leadership development"
      ],
      type: "leadership",
      gridSize: "large",
      icon: "/assets/professional_icons/nsbe.png"
    },
    {
      id: "cougar-card-center",
      name: "Cougar Card Center",
      description: "Campus student services and card operations at Washington State University",
      fullDescription: "Served at Washington State University's Cougar Card Center, delivering front-line student services, managing card operations, and honing customer service and administrative skills in a high-traffic campus environment.",
      role: "Clerical Assistant I",
      period: "2022 - 2023",
      company: "Washington State University",
      tags: ["Customer Service", "Student Services", "Communication"],
      highlights: [
        "Student ID card issuance and management",
        "Consistent customer service excellence",
        "Day-to-day campus operations experience"
      ],
      achievements: [
        "Strengthened customer-facing communication skills",
        "Streamlined card processing workflows",
        "Improved the student service experience",
        "Built a foundation in administrative operations"
      ],
      type: "work",
      gridSize: "medium",
      icon: "/assets/professional_icons/wsu.png"
    },
    {
      id: "sel-internship",
      name: "SEL Internship",
      description: "Software quality assurance and test engineering at Schweitzer Engineering Laboratories",
      fullDescription: "Interned at SEL working on software quality assurance, test script development, and failure data analysis. Gained hands-on exposure to enterprise-level testing methodologies, quality control systems, and the discipline required to ship software that protects critical infrastructure.",
      role: "Test Engineer (Software) Intern",
      period: "2023",
      company: "Schweitzer Engineering Laboratories (SEL)",
      tags: ["Testing Frameworks", "Quality Assurance", "Test Scripts", "Data Analysis", "Bug Tracking"],
      highlights: [
        "Authored comprehensive test scripts",
        "Analyzed software failure data for root causes",
        "Supported QA processes and documentation",
        "Gained enterprise-level testing experience"
      ],
      achievements: [
        "Improved test coverage efficiency across modules",
        "Identified critical system vulnerabilities before release",
        "Streamlined QA documentation and reporting processes"
      ],
      type: "internship",
      gridSize: "large",
      icon: "/assets/professional_icons/sel.png"
    },
    {
      id: "plum",
      name: "Plum AI",
      description: "AI-powered calendar scheduling agent",
      fullDescription: "Contributed to building an intelligent scheduling agent that parses data from Google and Apple calendars to surface the best available meeting times. Worked across the stack to deliver a responsive, AI-driven experience that removes the friction from everyday scheduling decisions.",
      role: "Software Engineer",
      period: "Feb 2025 - May 2025",
      company: "Pangeon.com",
      tags: ["React", "TypeScript", "Node.js", "TensorFlow", "MongoDB", "AWS"],
      highlights: [
        "AI-driven calendar parsing and scheduling",
        "Google and Apple Calendar integrations",
        "Intelligent time-slot recommendation engine",
        "Full-stack feature development"
      ],
      achievements: [
        "Developed the AI scheduling recommendation engine",
        "Implemented secure multi-platform authentication",
        "Optimized data processing pipelines for speed"
      ],
      type: "professional",
      gridSize: "medium",
      icon: "/assets/professional_icons/plum.png"
    },
    {
      id: "jeroyaf",
      name: "Jeroyaf Accounting & Tax Services",
      description: "Internal automation and tooling for accounting and tax workflows",
      fullDescription: "Built a suite of internal tools to automate bookkeeping, streamline tax preparation, and improve client onboarding. Integrated with third-party platforms (QuickBooks, ProSeries) to deliver secure, accurate financial workflows — with a focus on compliance, performance optimization, and scaling through tax season without breaking a sweat.",
      role: "Software Engineer",
      period: "Jun 2025 - Present",
      company: "Jeroyaf Accounting and Tax Services",
      tags: ["Python", "Flask", "SQL", "QuickBooks API", "ProSeries", "Automation"],
      highlights: [
        "Bookkeeping automation at scale",
        "Internal tooling development",
        "Secure and compliant financial workflows",
        "Third-party API integrations (QuickBooks, ProSeries)"
      ],
      achievements: [
        "Automated high-volume, repetitive accounting tasks",
        "Integrated QuickBooks and ProSeries APIs seamlessly",
        "Improved internal workflow accuracy and traceability",
        "Delivered tax-season scalability on a tight timeline"
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
    institution: "University of Technology",
    year: "2020",
    achievements: ["Summa Cum Laude", "Outstanding Student in Software Engineering"]
  }
}
