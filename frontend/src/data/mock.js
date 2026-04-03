export const personalInfo = {
  name: "Rahul Aryan",
  firstName: "Rahul",
  lastName: "Aryan",
  title: "AI Engineer",
  tagline: "Jack of all trades. Sometimes, master of one.",
  email: "rahularien06@gmail.com",
  phone: "+91 6206038079",
  location: "Noida, India",
  linkedin: "https://www.linkedin.com/in/rahul-aryan-429860184",
  resumeUrl: "https://customer-assets.emergentagent.com/job_6a96a4ad-ed95-44dc-891d-dc916fa89fec/artifacts/q59cpdvc_Resume_Rahul%20Aryan.pdf",
  totalExperience: "1.5+ Years",
  summary: "AI Engineer specialized in building production-ready RAG pipelines and Agentic AI using LangChain and Azure OpenAI. Designing scalable APIs and architecting event-driven data pipelines that transform complex data into actionable insights.",
  about: {
    intro: "I'm Rahul \u2014 an AI Engineer by profession and a relentlessly curious soul by nature. With a peculiar depth of knowledge spanning niche topics, I thrive at the intersection of technology and human experience.",
    personality: "Beyond the terminal, you'll find me exploring uncharted territories across India, diving into books on human and animal psychology, practicing meditation, or creating travel content. I believe the best engineers are those who understand people \u2014 not just code.",
    philosophy: "Every state I've traveled, every chess match I've played, every research paper I've read \u2014 it all feeds into how I approach problem-solving. Curiosity isn't just a trait; it's my operating system."
  }
};

export const experience = [
  {
    id: 1,
    company: "Cognizant",
    role: "AI/ML Engineer",
    duration: "Nov 2024 \u2014 Present",
    type: "Full-time",
    description: "Building enterprise GenAI solutions and scaling AI/ML models for production environments.",
    highlights: [
      "Developed advanced GenAI solutions leveraging RAG pipelines, LangChain, and Azure OpenAI for compliance validation",
      "Built LLM-powered applications to automate audit processes \u2014 40% reduction in manual effort",
      "Scaled AI/ML models on Azure using FastAPI and vector databases for enterprise-grade reliability"
    ]
  },
  {
    id: 2,
    company: "Cognizant",
    role: "Data Engineer Trainee",
    duration: "2024",
    type: "Training",
    description: "Architecting cloud data pipelines and implementing enterprise security on Azure.",
    highlights: [
      "Architected event-driven data pipelines using Azure Service Bus, Blob Storage, and SQL databases",
      "Implemented enterprise security with Microsoft Entra ID and automated PII anonymization",
      "Streamlined deployments via Terraform IaC \u2014 25% faster rollout time"
    ]
  },
  {
    id: 3,
    company: "Emertxe Information Technologies",
    role: "Embedded Systems Intern",
    duration: "3 Months",
    type: "Internship",
    description: "Developed embedded systems skills through hands-on C programming and SDLC projects.",
    highlights: [
      "Built C programs for microcontroller architectures enhancing embedded system proficiency",
      "Contributed to SDLC projects \u2014 improving code quality and system reliability by 15%",
      "Achieved 98% system functionality success rate through comprehensive testing"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Rapid Knowledge Retrieval",
    subtitle: "Enterprise RAG Assistant",
    description: "Multi-source enterprise RAG assistant integrating SharePoint, Confluence, ServiceNow, Azure DevOps, and GitHub data into distinct vector indexes with an agent-based retriever for dynamic index selection.",
    impact: "+35% knowledge discovery accuracy",
    tags: ["RAG", "LangChain", "Azure", "FastAPI", "Vector DB", "Power BI"],
    category: "GenAI",
    featured: true
  },
  {
    id: 2,
    title: "AI Infra Assistant",
    subtitle: "Agentic Cloud Migration",
    description: "Agentic AI solution on Azure automating cloud infrastructure discovery, migration, and Terraform code generation through multi-agent orchestration with LangChain and Azure OpenAI.",
    impact: "End-to-end automation",
    tags: ["Agentic AI", "Terraform", "Azure Functions", "LangChain"],
    category: "GenAI",
    featured: true
  },
  {
    id: 3,
    title: "Drowsiness Detection",
    subtitle: "Real-time Safety System",
    description: "Computer vision system using OpenCV and ML for real-time drowsiness monitoring across automotive, industrial, and consumer domains.",
    impact: "95% precision, 85% incident reduction",
    tags: ["Computer Vision", "OpenCV", "Python", "ML"],
    category: "CV/ML",
    featured: false
  },
  {
    id: 4,
    title: "Microwave Oven Simulator",
    subtitle: "Embedded Systems Project",
    description: "Embedded systems simulator built with C and microcontroller architectures, featuring comprehensive SDLC practices and rigorous testing protocols.",
    impact: "98% functionality success rate",
    tags: ["C", "Embedded Systems", "SDLC"],
    category: "Embedded",
    featured: false
  }
];

export const skillCategories = [
  {
    category: "AI & Generative AI",
    icon: "brain",
    skills: ["Generative AI", "Large Language Models", "RAG", "Agentic AI", "Prompt Engineering", "Fine Tuning", "LangChain"]
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: ["Microsoft Azure", "AWS", "Azure Functions", "Terraform", "Azure Service Bus", "Blob Storage", "CI/CD"]
  },
  {
    category: "Backend & APIs",
    icon: "code",
    skills: ["Python", "FastAPI", "SQL", "ETL Pipelines", "System Design", "C Programming"]
  },
  {
    category: "Data & Analytics",
    icon: "chart",
    skills: ["Vector Databases", "Power BI", "Computer Vision", "OpenCV", "Data Pipelines", "MongoDB"]
  },
  {
    category: "Practices & Security",
    icon: "shield",
    skills: ["Integration Testing", "Debugging", "SDLC", "Microsoft Entra ID", "PII Anonymization", "Git"]
  }
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    validity: "Valid until 2028"
  },
  {
    id: 2,
    title: "Azure Data Fundamentals",
    issuer: "Microsoft",
    validity: "Certified"
  },
  {
    id: 3,
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    validity: "Certified"
  }
];

export const beyondCode = {
  chess: {
    title: "Chess Grandmaster Aspirant",
    description: "Ranked in the top 1% of global live chess players on chess.com. Won 1st place among 672 participants in the FIDE Online Arena's New Year's Special Swiss Tournament.",
    image: "https://customer-assets.emergentagent.com/job_profile-platform-8/artifacts/xl8x8ois_image.png",
    stats: [
      { label: "Global Ranking", value: "Top 1%" },
      { label: "FIDE Tournament", value: "#1 / 672" },
      { label: "Time Control", value: "Classic 3m" }
    ]
  },
  travel: {
    title: "Explorer & Content Creator",
    description: "Covered 12 of 28 Indian states, creating content and collecting perspectives along the way. Every destination shapes how I see technology and its impact on diverse communities.",
    image: "https://customer-assets.emergentagent.com/job_profile-platform-8/artifacts/ydb9xtq8_image.png",
    stats: [
      { label: "States Explored", value: "12 / 28" },
      { label: "Style", value: "Content Creator" },
      { label: "Languages", value: "EN / HI" }
    ]
  },
  passions: [
    { name: "Psychology", detail: "Human & Animal Behavior", icon: "brain" },
    { name: "Meditation", detail: "Mindfulness & Spirituality", icon: "sparkles" },
    { name: "Reading", detail: "Research Papers & Books", icon: "book" },
    { name: "Sports", detail: "Cricket, Badminton, Boxing", icon: "trophy" },
    { name: "Content", detail: "Travel & Tech Stories", icon: "camera" },
    { name: "Tech", detail: "Always Exploring What's New", icon: "zap" }
  ]
};

export const education = {
  degree: "B.Tech / B.E.",
  institution: "Bangalore Institute of Technology",
  shortName: "BIT",
  year: "2024",
  location: "Bangalore, India"
};
