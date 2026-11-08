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
 *    highlights   [{ title, description }] — max 4 per role. Supports **bold** spans.
 *                 Each point is clamped to `highlightPreviewLines` lines until
 *                 "Show more" is clicked, so lead with the key result.
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
      'Python', 'FastAPI', 'Docker', 'Nginx', 'JavaScript', 'SQLite',
      'PyTorch', 'Hugging Face Transformers', 'VectorDB', 'LLM', 'OWASP', 'Agentic AI'
    ],
    highlights: [
      {
        title: 'File Transfer Architecture Redesign',
        description:
          "Achieved a **470x reduction in gateway RAM** on large uploads (1,225MB to 2.6MB for a 300MB file) by overhauling the pipeline with **streaming multipart handling** and temp-file spooling with integrity verification. Built frontend concurrency controls and cache batching that took a 200-file operation from **200 storage writes to 1**, eliminating freezes during multi-file operations. Moved blocking sync work off the event loop with **thread pooling**, so large repository syncs no longer stall the server."
      },
      {
        title: 'Medical AI Ensemble & Hardware Benchmarking',
        description:
          "Built a multi-modal ensemble reaching **84% accuracy** on skin lesion classification from 39,231 cleaned images, beating a fine-tuned **400M-parameter** foundation model by 2.8 points, and deployed it on the platform. Designed a hardware benchmarking framework across **18 vision and text models**, measuring CPU-to-GPU speedups of 9x to **327x** and documenting the conditions each figure holds under. Set up **vision, ASR, and TTS** models on server GPUs as multi-modal use cases."
      },
      {
        title: 'RAG Backend, Code Checker & Microservices',
        description:
          "Built an end-to-end **RAG backend** covering ingestion, **5 embedding models**, token-aware chunking and **HNSW** semantic search, reaching a **0.93 similarity score** in a directional test on a technical document. Built a **static analysis + LLM engine** that detects **SQL injection, RCE, and XSS** with intent-aware parsing and plain-English explanations. Worked on **Dockerized FastAPI microservices** with role-based access control and a layered request pipeline."
      },
      {
        title: 'Workflow Platform & Quality Ownership',
        description:
          "Shipped publicly documented workflows across **6+ domains**, including **Legal Helper**, **Finance Helper** with 12 analysis types, and **Card Recommendation** across 80+ cards. Led the upgrade from custom-only nodes to a **reusable workflow system** built from generic building blocks, making new workflows much quicker to build and opening them to non-technical users. Own the alpha testers' **regression suite**, run after every frontend or backend push."
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
      'Python', 'vLLM', 'PyTorch', 'CUDA', 'NCCL', 'DeepSeek', 'Diffusers',
      'Hugging Face Transformers', 'FastAPI', 'Docker', 'PostgreSQL', 'AWS', 'Bash', 'SSH'
    ],
    highlights: [
      {
        title: 'LLM Serving & vLLM Migration',
        description:
          "Delivered **~17x LLM throughput** on staging by migrating serving to **vLLM**, after a controlled benchmark of **7 serving setups** showed the serving software, not the GPU, was the bottleneck: 100 mixed requests dropped from 213s to 12.6s. **64 concurrent streams** now finish in 2.2s where the old server froze past 40, with GPU memory budgeting enforced before any deploy and **59 of 59 live checks** passing. The benchmark also surfaced **8 platform bugs**, all fixed, and produced 13 ranked recommendations for leadership."
      },
      {
        title: 'DeepSeek V4 Flash Bring-Up',
        description:
          "Scored **92.5/93** on a **10-phase acceptance suite** across ~20,500 requests while bringing up a large mixture-of-experts model on staging with **tensor and expert parallelism**, extending the platform to manage multi-GPU replicas, backed by **463 unit tests**. Recalled **48 of 48** planted facts in contexts up to ~260K tokens, handled 100 simultaneous calls in 18.25s, ran a 30-minute soak with zero restarts, and recovered from a killed GPU process on its own in 88s. Deploys dropped from an 8-minute reload to 3.6 minutes with the model left running."
      },
      {
        title: 'Security, Reliability & Deployment',
        description:
          "Audited a **~114,000-line Python platform** by tracing request paths end to end, then mapped failure modes across core subsystems, delivering ranked findings and phased fix plans for leadership. Hardened input and file handling with **80+ regression assertions** and restored correct **HTTP status codes** so monitoring and retries work as intended. Reworked deployment tooling across **100+ files**, removing **~573 duplicate lines**, verified by **32 offline tests** and parity across **123 commands**; now in validation ahead of rollout."
      },
      {
        title: 'Image-to-Video Optimisation & GPU Debugging',
        description:
          "Sped up image-to-video generation **~3.5x** (398.7s to ~115s) by stacking and measuring each optimisation, including **FP8** and **torch.compile**. Traced broken multi-GPU output to **silent data corruption** in direct GPU-to-GPU copies, reproduced with no model loaded (40 of 40 transfers corrupt, 0 of 40 through host memory), then fixed it by routing copies through the CPU. Also diagnosed thermal throttling and handed it to the hardware team with evidence."
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

/** Lines each highlight shows before "Show more" expands the card (1-3). */
export const highlightPreviewLines = 2;

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
