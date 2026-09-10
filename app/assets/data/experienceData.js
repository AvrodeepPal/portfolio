import { companyLogos } from '@/app/assets/experience/assets';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EXPERIENCE DATA
 * ─────────────────────────────────────────────────────────────────────────────
 *  One nested entry per role. To add a new experience, append an object with the
 *  next `id` (3, 4, ...) — the entry holding the HIGHEST id is treated as the
 *  current role and is the one that renders the blinking green "Working" dot.
 *  The timeline renders in descending id order, so the latest role sits on top.
 *
 *  Field map:
 *    id           unique, incremental — highest = current role
 *    company      { name, shortName, site, logo: { light, dark }, alt }
 *    role         job title
 *    employment   'Full-time' | 'Internship' | 'Contract' | 'Freelance'
 *    type         'Remote' | 'Hybrid' | 'Onsite'
 *    location     city, country (the `type` is appended when displayed)
 *    duration     { start, end, label }  — use end: 'Present' for current role
 *    technologies string[] — rendered as chips
 *    highlights   [{ title, description }] — description supports **bold** spans
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const experiences = [
  {
    id: 1,
    company: {
      name: 'GenAIus Technology Pvt. Ltd.',
      shortName: 'GenAIus',
      site: 'https://genaius.cloud',
      logo: companyLogos.genaius,
      alt: companyLogos.genaius.alt
    },
    role: 'Python Developer Intern',
    employment: 'Internship',
    type: 'Remote',
    location: 'Zurich, Switzerland',
    duration: {
      start: 'Jan 2026',
      end: 'Jun 2026',
      label: 'Jan 2026 - Jun 2026'
    },
    technologies: [
      'Python', 'FastAPI', 'Docker', 'JavaScript', 'Nginx',
      'SQLite', 'LLM', 'GenAI', 'Agentic AI', 'OWASP', 'VectorDB'
    ],
    highlights: [
      {
        title: 'Code Checker (Security Analysis)',
        description:
          "Built a **static analysis + LLM-based engine** for detecting **SQL injection, RCE, and XSS** vulnerabilities with intent-aware parsing and obfuscation handling. The engine performs deterministic static checks first, then feeds flagged code to an LLM for contextual analysis, producing human-readable security explanations with fix suggestions. Designed to serve both technical developers needing precise vulnerability details and non-technical users requiring plain-English guidance."
      },
      {
        title: 'VectorDB Service Development',
        description:
          "Designed and built an end-to-end **RAG backend** covering document ingestion, embedding generation, **HNSW indexing**, and low-latency semantic search. The service supports **5 embedding models** with auto-configuration of dimensions, context sizes, and distance metrics based on data type. Implemented token-aware chunking, model-specific prefixes, and intelligent recommendations for chunk size and indexing profiles. Achieved **0.93 similarity score** on technical documents and reduced RAG implementation complexity for non-technical users."
      },
      {
        title: 'Custom Workflow Development (Multi-Domain)',
        description:
          "Developed production-ready workflows with custom nodes across **6+ domains** - legal, financial, credit, medical, and conversational AI - each with documentation and tutorial videos. Built the **Legal Helper** (dual vector DB retrieval for case analysis), **Finance Helper** (bank report analysis with 12 query types), **Card Recommendation** (two-stage filtering of 80+ cards), and **Credit Health** (scorecard-based assessment). These workflows showcase the platform's competitive advantage: local model access without API restrictions."
      },
      {
        title: 'Microservices Architecture & Deployment',
        description:
          "Architected **Dockerized microservices** using **FastAPI** with **role-based access control**, enabling secure and scalable production usage. Implemented a layered request pipeline with middleware validation and session authentication, followed by a unified gateway protocol translating frontend commands into backend domain models. Integrated **Nginx** as reverse proxy with proper error relay, maintaining backend infrastructure with testing across both frontend and backend services."
      }
    ]
  },
  {
    id: 2,
    company: {
      name: 'GenAIus Technology Pvt. Ltd.',
      shortName: 'GenAIus',
      site: 'https://genaius.cloud',
      logo: companyLogos.genaius,
      alt: companyLogos.genaius.alt
    },
    role: 'Software Development Engineer',
    employment: 'Full-Time',
    type: 'Remote',
    location: 'Zurich, Switzerland',
    duration: {
      start: 'Jul 2026',
      end: 'Present',
      label: 'Jul 2026 - Present'
    },
    technologies: [
      'Python', 'FastAPI', 'Docker', 'PostgreSQL', 'AWS', 'CUDA',
      'PyTorch', 'Hugging Face Transformers', 'VectorDB', 'Agentic Workflows'
    ],
    highlights: [
      {
        title: 'Security & Infrastructure Hardening',
        description:
          "Led security audits across a large-scale Python codebase, identifying and fixing critical **path traversal** and error handling vulnerabilities that affected all worker hosts. Redesigned the error relay system to return proper **HTTP status codes**, restoring monitoring accuracy and retry logic across the platform. Resolved production configuration drift where workers ran stale AI engine code, implementing **self-healing deployment scripts** and restoring metrics flow into usage records with **80+ regression assertions**."
      },
      {
        title: 'File Transfer Architecture Redesign',
        description:
          "Overhauled the upload/download pipeline to eliminate browser hangs and memory spikes, achieving **470x reduction in RAM usage** for large file uploads through **streaming multipart handling** and temp-file spooling with integrity verification. Built frontend concurrency controls and cache batching that reduced localStorage operations by **200x**, eliminating platform freezes during multi-file operations. Implemented **async thread pooling** for git operations, enabling large repository syncs without blocking the event loop."
      },
      {
        title: 'AI Model Benchmarking & Deployment',
        description:
          'Designed and executed a hardware benchmarking framework evaluating **15+ vision and text models** across laptop, cloud GPU, and server-grade hardware, documenting speedup factors up to **325x** across 15 configurations. Set up and fine-tuned architectures for **vision, ASR, and TTS** models on server GPUs, building an ensemble of compact models that achieved **84% accuracy** on skin lesion classification - benchmarked against a **400M-parameter** foundation model that it outperformed by 1.5 points. Deployed these as multi-modal use cases directly on the platform.'
      },
      {
        title: 'Generic Workflow Architecture',
        description:
          'Led the upgrade from custom-only nodes to a **reusable workflow system** capable of recreating domain-specific solutions (legal, financial, credit, medical) using generic building blocks - **vector DB retrieval**, **LLM generation**, and dropdown-driven prompt builders. Demonstrated this by rebuilding the Legal Helper workflow with generic nodes, reducing new workflow development time by **50%** while expanding no-code accessibility for non-technical users. Created documentation and tutorials showcasing local model access without API restrictions.'
      }
    ]
  }
];

/** Section heading copy — mirrors the "Skills / Technical Toolbox" pattern. */
export const experienceSection = {
  eyebrow: 'Experience',
  title: 'Professional Footprints'
};

/** Globe glyph (U+1F310) that links a company name to its website. */
export const companyLinkIcon = {
  glyph: '\u{1F310}',
  label: 'Visit website'
};

/** Badge shown beside the current company name. */
export const workingBadge = {
  label: 'Working'
};

/** The highest id is always the ongoing role. */
export const currentExperienceId = experiences.reduce(
  (max, item) => (item.id > max ? item.id : max),
  0
);

/** Latest role first. */
export const sortedExperiences = [...experiences].sort((a, b) => b.id - a.id);

/** "Zurich, Switzerland - Remote" */
export const formatLocation = ({ location, type }) =>
  [location, type].filter(Boolean).join(' - ');

export const experienceAnimations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },

  containerVariants: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  },

  timelineVariants: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },

  chipVariants: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  }
};
