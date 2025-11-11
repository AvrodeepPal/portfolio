export const educationData = [
  {
    title: "Masters in Computer Applications (MCA)",
    institution: "Jadavpur University, Kolkata",
    details: "CGPA (upto 1st sem): 8.33 (2024 - 2026)"
  },
  {
    title: "B.Sc. Computer Science Honours",
    institution: "Barrackpore Rastraguru Surendranath College (affiliated to West Bengal State University)",
    details: "CGPA: 9.91 (2021 - 2024)"
  },
  {
    title: "St. Augustine's Day School, Barrackpore (ISC)",
    institution: "Score: 95.75% (2019 - 2021)",
    details: ""
  },
  {
    title: "St. Augustine's Day School, Barrackpore (ICSE)",
    institution: "Score: 91.80% (upto 2019)",
    details: ""
  }
];

export const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  timelineVariants: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  },

  containerVariants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }
};