export const userData = {
  personal: {
    name: "QuantDoppler",
    subtitle: "Sovereign Systems Engineering. AI-Driven Architecture. Deep-Tech at Scale.",
    description: "A deep-tech engineering bureau forging enterprise-grade systems for industries that cannot fail. From first telemetry to live mission deployment — a single trajectory, full-stack ownership, zero handoffs, zero compromise.",
    location: "Available Worldwide",
    email: "contact@quantdoppler.io",
    github: "https://github.com/quantdoppler20",
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
      id: "nexus-intelligence",
      name: "Nexus Intelligence Platform",
      description: "AI-driven threat intelligence and data fusion system deployed across federal agency infrastructure",
      fullDescription: "Mission-critical AI intelligence platform engineered for real-time threat signal ingestion, cross-source data fusion, and decision-support dashboards. Deployed across 3 federal agency environments with a 99.97% uptime SLA. Processes 15M+ daily telemetry events through a distributed pipeline — delivering structured intelligence outputs with sub-200ms latency to operational command centers.",
      techStack: ["Python", "React", "PostgreSQL", "AWS", "TensorFlow", "Docker", "Kafka"],
      highlights: [
        "Deployed across 3 federal agency environments",
        "15M+ daily telemetry events processed in real-time",
        "Sub-200ms decision-support output latency",
        "99.97% uptime SLA enforced across all nodes"
      ],
      metrics: {
        agencies: "3 Federal",
        throughput: "15M+/day",
        uptime: "99.97%"
      },
      status: "Live",
      stillImage: "/assets/bentoGrids/Milestone/Milestone_still.png",
      hoverVideo: "/assets/bentoGrids/Milestone/Milestone_hover.mp4",
      gridSize: "large"
    },
    {
      id: "arclight",
      name: "ArcLight Geospatial Engine",
      description: "Real-time geospatial analytics engine processing 40M+ daily telemetry events for logistics intelligence",
      fullDescription: "High-throughput geospatial analytics engine built for supply chain optimization and logistics command intelligence. Processes 40M+ daily location and telemetry events through a distributed streaming architecture — delivering live heatmaps, anomaly flags, and predictive routing recommendations at enterprise scale. Sub-second update cycles with full geographic coverage across 6 continents.",
      techStack: ["TypeScript", "Node.js", "MongoDB", "Kafka", "Elasticsearch", "Redis", "Docker"],
      highlights: [
        "40M+ daily telemetry events processed",
        "Sub-second geospatial update cycles",
        "Predictive routing across 6-continent coverage",
        "Anomaly detection engine with real-time alerts"
      ],
      metrics: {
        throughput: "40M+/day",
        coverage: "6 Continents",
        latency: "Sub-second"
      },
      status: "Live",
      stillImage: "/assets/bentoGrids/Hackronomics/Hackronomics_Still.png",
      hoverVideo: "/assets/bentoGrids/Hackronomics/Hackronomics_hover.mp4",
      gridSize: "large"
    },
    {
      id: "sentinel-dataops",
      name: "Sentinel DataOps",
      description: "Automated enterprise data pipeline orchestration for multi-source ingestion and warehouse routing",
      fullDescription: "Enterprise data pipeline orchestration platform automating multi-source ingestion, normalization, transformation, and warehouse routing across distributed environments. Manages 200+ active pipelines with full lineage tracking, failure alerting, and SLA enforcement. Reduces manual data ops overhead by 78% across integrated teams.",
      techStack: ["Python", "Apache Airflow", "PostgreSQL", "AWS Glue", "dbt", "Terraform"],
      highlights: [
        "200+ active pipelines under orchestration",
        "78% reduction in manual data ops overhead",
        "Full data lineage tracking end-to-end",
        "Automated SLA enforcement and alerting"
      ],
      metrics: {
        pipelines: "200+",
        reduction: "78% Overhead",
        tracking: "Full Lineage"
      },
      github: "https://github.com/quantdoppler20",
      stillImage: "/assets/bentoGrids/Fundraiser/Fundraiser_hover.mp4",
      hoverVideo: "/assets/bentoGrids/Fundraiser/Fundraiser_hover.mp4",
      gridSize: "small"
    },
    {
      id: "quantcore-gateway",
      name: "QuantCore API Gateway",
      description: "Sovereign API orchestration layer processing 2M+ daily requests with full audit trail",
      fullDescription: "Sovereign API orchestration layer engineered for enterprise-grade request routing, JWT-hardened authentication, intelligent rate limiting, and comprehensive audit logging. Processes 2M+ daily API calls with 99.99% availability. Supports multi-tenant access control, versioned endpoints, and real-time traffic analytics — deployed across cloud and on-prem hybrid environments.",
      techStack: ["Node.js", "Redis", "Docker", "Kubernetes", "JWT", "NGINX", "Prometheus"],
      highlights: [
        "2M+ daily API requests processed at 99.99% uptime",
        "JWT-hardened multi-tenant authentication",
        "Intelligent rate limiting and traffic shaping",
        "Real-time audit trail across all endpoints"
      ],
      metrics: {
        requests: "2M+/day",
        availability: "99.99%",
        auth: "JWT + RBAC"
      },
      github: "https://github.com/quantdoppler20",
      stillImage: "/assets/bentoGrids/SpreadSheet/SpreadSheet_still.png",
      hoverVideo: "/assets/bentoGrids/SpreadSheet/SpreadSheet_hover.mp4",
      gridSize: "medium"
    },
    {
      id: "orbital-ml-suite",
      name: "Orbital ML Suite",
      description: "End-to-end ML pipeline framework for model training, versioning, deployment, and drift monitoring",
      fullDescription: "End-to-end machine learning operations framework covering model training orchestration, experiment versioning, automated deployment gating, and production drift monitoring. Supports 20+ concurrent model experiments across distributed GPU clusters. Drift detection engine triggers automated retraining pipelines — maintaining model accuracy above defined SLA thresholds across all production environments.",
      techStack: ["Python", "TensorFlow", "MLflow", "Docker", "AWS SageMaker", "Kubernetes", "FastAPI"],
      highlights: [
        "20+ concurrent model experiments managed",
        "Automated drift detection and retraining pipelines",
        "GPU cluster orchestration at scale",
        "Full experiment versioning and lineage tracking"
      ],
      metrics: {
        experiments: "20+ Concurrent",
        deployment: "Automated Gating",
        monitoring: "Drift Detection"
      },
      github: "https://github.com/quantdoppler20",
      stillImage: "/assets/bentoGrids/IMDB/imdb_still.png",
      hoverVideo: "/assets/bentoGrids/IMDB/imdb_hover.mp4",
      gridSize: "medium"
    },
    {
      id: "vault-compliance",
      name: "Vault Compliance Engine",
      description: "Real-time regulatory compliance monitoring for financial institutions — SEC, FINRA, and SOX frameworks",
      fullDescription: "Automated regulatory compliance monitoring platform engineered for Tier-1 financial institutions. Evaluates 10,000+ compliance rules in real-time against transaction and operational data streams — flagging violations against SEC, FINRA, and SOX frameworks within milliseconds of occurrence. Full audit trail, case management workflows, and regulatory reporting generation with zero manual intervention required.",
      techStack: ["Python", "Flask", "PostgreSQL", "RabbitMQ", "Docker", "Redis", "React"],
      highlights: [
        "10,000+ compliance rules evaluated in real-time",
        "SEC, FINRA, and SOX framework coverage",
        "Zero-latency violation flagging on live data streams",
        "Automated regulatory report generation"
      ],
      metrics: {
        rules: "10K+ Active",
        frameworks: "SEC/FINRA/SOX",
        detection: "Real-time"
      },
      github: "https://github.com/quantdoppler20",
      stillImage: "/assets/bentoGrids/YelpData/yelp_data_still.png",
      hoverVideo: "/assets/bentoGrids/YelpData/yelp_data_hover.mp4",
      gridSize: "small"
    },
    {
      id: "terrasync-iac",
      name: "TerraSync Infrastructure IaC",
      description: "Multi-cloud IaC deployment framework with automated rollback, health checks, and cost optimization",
      fullDescription: "Infrastructure-as-code deployment framework engineered for multi-cloud enterprise environments spanning AWS, Azure, and GCP. Automates full-stack environment provisioning, health validation, rollback orchestration, and cost anomaly detection across 50+ active infrastructure modules. Reduces deployment cycle time by 65% while enforcing security hardening baselines at every provisioning step.",
      techStack: ["Terraform", "AWS", "Azure", "Python", "GitHub Actions", "Ansible", "Docker"],
      highlights: [
        "50+ active infrastructure modules managed",
        "65% reduction in deployment cycle time",
        "Automated security hardening at every step",
        "Multi-cloud cost anomaly detection active"
      ],
      metrics: {
        modules: "50+ Active",
        reduction: "65% Faster",
        coverage: "AWS/Azure/GCP"
      },
      status: "Live",
      stillImage: "/assets/bentoGrids/HarvardSchool/Harvard School_still.png",
      hoverVideo: "/assets/bentoGrids/HarvardSchool/Harvard School_hover.mp4",
      gridSize: "large"
    },
    {
      id: "optigraph",
      name: "OptiGraph Analytics",
      description: "Graph-based relationship intelligence platform for fraud detection and enterprise network analysis",
      fullDescription: "Graph-based relationship intelligence platform mapping entity connections across large-scale enterprise datasets. Deployed for fraud detection, network risk analysis, and third-party vendor relationship scoring across financial and supply chain verticals. Processes graphs with 50M+ nodes and 200M+ edges — surfacing hidden risk patterns and relationship clusters invisible to conventional tabular analytics.",
      techStack: ["Python", "Neo4j", "React", "D3.js", "FastAPI", "Docker", "Redis"],
      highlights: [
        "Graphs with 50M+ nodes and 200M+ edges processed",
        "Hidden fraud pattern detection at enterprise scale",
        "Vendor relationship risk scoring deployed",
        "Visual graph exploration interface for analysts"
      ],
      metrics: {
        nodes: "50M+",
        edges: "200M+",
        use_case: "Fraud + Risk"
      },
      github: "https://github.com/quantdoppler20",
      stillImage: "/assets/bentoGrids/FacultyResearch/FacultyResearch_still.png",
      hoverVideo: "/assets/bentoGrids/FacultyResearch/FacultyResearch_hover.mp4",
      gridSize: "medium"
    },
    {
      id: "meridian-crm",
      name: "Meridian CRM Intelligence",
      description: "Enterprise CRM enhancement module with AI-assisted lead scoring and Salesforce integration",
      fullDescription: "Full-stack enterprise CRM intelligence module delivering AI-assisted lead scoring, pipeline health analytics, and bi-directional Salesforce integration. Reduces average sales cycle duration by 22% through predictive opportunity ranking and automated follow-up scheduling. Processes 500K+ CRM records daily with sub-3-second dashboard load times across 300+ concurrent users.",
      techStack: ["React", "TypeScript", "Python", "Salesforce API", "PostgreSQL", "AWS Lambda"],
      highlights: [
        "22% reduction in average sales cycle duration",
        "AI-assisted lead scoring with predictive ranking",
        "500K+ CRM records processed daily",
        "Sub-3-second dashboards for 300+ concurrent users"
      ],
      metrics: {
        reduction: "22% Faster",
        records: "500K+/day",
        users: "300+ Concurrent"
      },
      github: "https://github.com/quantdoppler20",
      stillImage: "/assets/bentoGrids/100DaysOfCode/100Days_still.png",
      hoverVideo: "/assets/bentoGrids/100DaysOfCode/100Days_hover.mp4",
      gridSize: "large"
    }
  ],

  professionalInvolvements: [
    {
      id: "systems-architecture",
      name: "Enterprise Systems Architecture",
      description: "Principal architect across 4 concurrent mission-critical platform deployments — zero-downtime migrations, 99.99% availability targets enforced",
      fullDescription: "Lead architect on a portfolio of 4 concurrent enterprise platform re-engineering programs across financial services, logistics, and government verticals. Directed full-stack architecture decisions from data model design through cloud deployment topology. Enforced zero-downtime migration protocols, 99.99% availability SLAs, and security-hardened API contracts across every engagement. Accountable for technical direction, engineer alignment, and client delivery outcomes.",
      role: "Principal Systems Architect",
      period: "Jan 2024 - Present",
      company: "QuantDoppler Bureau",
      tags: ["Systems Architecture", "Cloud Infrastructure", "API Design", "Team Leadership", "SLA Management"],
      highlights: [
        "4 concurrent enterprise platform programs directed",
        "Zero-downtime migration protocols enforced across all engagements",
        "99.99% availability SLA delivered on production systems",
        "Security-hardened API contracts designed from ground up"
      ],
      achievements: [
        "Full-stack architecture decisions owned end-to-end",
        "Multi-vertical client delivery outcomes met on schedule",
        "Engineering team alignment and technical direction held",
        "Enterprise deployment topology optimized for resilience"
      ],
      type: "leadership",
      gridSize: "large",
      icon: "/assets/professional_icons/nsbe.png"
    },
    {
      id: "federal-data-integration",
      name: "Federal Data Integration Program",
      description: "Senior full-stack engineering on a classified-adjacent platform unifying 12 government data sources through a sovereign API layer",
      fullDescription: "Senior software engineering engagement on a data integration platform connecting 12 disparate federal government data sources through a unified, access-controlled API layer. Designed ingestion adapters, normalization pipelines, and role-based access frameworks aligned with FedRAMP-compliant infrastructure requirements. Platform reduced cross-agency data reconciliation time by 84% and eliminated 3 legacy data exchange protocols.",
      role: "Senior Software Engineer",
      period: "Mar 2023 - Dec 2023",
      company: "Sovereign Systems Group",
      tags: ["Python", "REST APIs", "PostgreSQL", "FedRAMP", "Data Integration", "Security"],
      highlights: [
        "12 federal government data sources unified under one API layer",
        "84% reduction in cross-agency data reconciliation time",
        "FedRAMP-compliant infrastructure architecture applied",
        "3 legacy data exchange protocols deprecated and replaced"
      ],
      achievements: [
        "Ingestion adapters engineered for heterogeneous source formats",
        "Role-based access framework designed and deployed",
        "Data normalization pipelines validated against compliance requirements",
        "Legacy protocol migration executed with zero data loss"
      ],
      type: "professional",
      gridSize: "large",
      icon: "/assets/professional_icons/sel.png"
    },
    {
      id: "ai-ops-command",
      name: "AI Operations Command",
      description: "4-engineer squad lead deploying AI decision-support systems for operational planning and resource optimization",
      fullDescription: "Engineering lead on a 4-person squad delivering AI-assisted decision-support systems for large-scale operational planning and resource allocation optimization. Designed model serving infrastructure, integrated real-time data feeds, and built analyst-facing dashboards enabling data-driven resource deployment decisions. System processed 8M+ daily operational signals with 97% model accuracy across production environments.",
      role: "Engineering Lead",
      period: "Aug 2024 - Present",
      company: "QuantDoppler Bureau",
      tags: ["Python", "TensorFlow", "React", "AWS", "Team Leadership", "MLOps"],
      highlights: [
        "4-engineer squad directed from architecture to delivery",
        "8M+ daily operational signals processed by production models",
        "97% model accuracy maintained across environments",
        "Analyst dashboards deployed for real-time decision support"
      ],
      achievements: [
        "Model serving infrastructure designed and deployed",
        "Real-time data feed integrations engineered",
        "Resource allocation optimization validated at scale",
        "Cross-functional stakeholder reporting delivered on cadence"
      ],
      type: "professional",
      gridSize: "medium",
      icon: "/assets/professional_icons/plum.png"
    },
    {
      id: "financial-intelligence",
      name: "Financial Intelligence Division",
      description: "Real-time trading analytics dashboard and compliance reporting module for a Tier-1 financial institution",
      fullDescription: "Full-stack engineering engagement delivering a real-time trading analytics dashboard and automated compliance reporting module for a Tier-1 financial institution. Integrated live market data feeds, built risk exposure visualization layers, and engineered the compliance report generation pipeline against SEC and FINRA regulatory frameworks. Dashboard serves 150+ compliance and trading professionals across 3 global offices.",
      role: "Software Engineer",
      period: "Feb 2025 - May 2025",
      company: "Apex Capital Technology",
      tags: ["React", "TypeScript", "Python", "Financial APIs", "Compliance", "Data Visualization"],
      highlights: [
        "Live market data feeds integrated into real-time dashboards",
        "SEC and FINRA compliance report pipeline engineered",
        "150+ compliance and trading professionals served",
        "Risk exposure visualization deployed across 3 global offices"
      ],
      achievements: [
        "Real-time trading analytics dashboard launched on schedule",
        "Automated regulatory report generation delivered",
        "Market data feed latency optimized to sub-500ms",
        "Cross-office deployment executed with zero configuration drift"
      ],
      type: "internship",
      gridSize: "medium",
      icon: "/assets/professional_icons/jeroyaf.png"
    },
    {
      id: "infrastructure-qa",
      name: "Critical Infrastructure QA Command",
      description: "QA engineering on industrial control system software protecting power grid and water treatment infrastructure across 6 states",
      fullDescription: "Software quality assurance engineering on industrial control system (ICS) software protecting power grid management and water treatment infrastructure across 6 states. Authored mission-critical test suites covering failure injection, boundary condition analysis, and protocol compliance validation. Root-cause failure analysis delivered across 40+ defect reports — preventing zero-day vulnerabilities from reaching production systems that cannot afford downtime.",
      role: "QA Engineer",
      period: "Jun 2023 - Oct 2023",
      company: "NexGen Infrastructure Systems",
      tags: ["QA Engineering", "ICS Testing", "Failure Analysis", "Test Automation", "Compliance Validation"],
      highlights: [
        "ICS software protecting 6-state critical infrastructure tested",
        "40+ defect reports with root-cause analysis delivered",
        "Failure injection and boundary condition test suites authored",
        "Zero production vulnerabilities cleared through QA gate"
      ],
      achievements: [
        "Mission-critical test coverage expanded by 34%",
        "Protocol compliance validation framework established",
        "Pre-release vulnerability identification rate improved",
        "QA documentation standardized across engineering teams"
      ],
      type: "work",
      gridSize: "medium",
      icon: "/assets/professional_icons/wsu.png"
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
      "Flask", "React.js", "Node.js", "Express.js", ".Net", "SQL Alchemy", "FastAPI"
    ],
    systems: [
      "CI/CD Pipelines", "API Development", "Scalable Web Applications", "Microservices", "IaC"
    ],
    databases: [
      "SQL", "SQLite", "MySQL", "PostgreSQL", "MongoDB", "Neo4j", "Redis", "Elasticsearch"
    ],
    development: [
      "Git/GitHub", "Jira", "Postman", "Linux", "Docker", "Kubernetes", "Terraform", "AWS", "Azure"
    ],
    testing: [
      "NUnit", "Selenium", "Cypress", "Unittest", "Pytest", "TDD (Test Driven Development)"
    ],
    analytics: [
      "PowerBI", "Apache Kafka", "Apache Airflow", "dbt", "MLflow", "Data Visualization"
    ],
    methodologies: [
      "Agile", "Scrum", "TDD", "Code Review", "Version Control", "Documentation", "DevSecOps"
    ]
  },

  experience: [
    {
      title: "Principal Systems Architect",
      company: "QuantDoppler Bureau",
      period: "Jan 2024 - Present",
      description: "Lead architect across 4 concurrent enterprise platform programs spanning financial, logistics, and government verticals.",
      achievements: [
        "Zero-downtime migration protocols enforced across all deployments",
        "99.99% availability SLA delivered on all production systems",
        "Security-hardened API contracts and cloud topology designed from ground up"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Sovereign Systems Group",
      period: "Mar 2023 - Dec 2023",
      description: "Full-stack engineering on a federal data integration platform unifying 12 government data sources.",
      achievements: [
        "84% reduction in cross-agency data reconciliation time delivered",
        "FedRAMP-compliant integration architecture designed and deployed",
        "3 legacy data exchange protocols deprecated with zero data loss"
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
