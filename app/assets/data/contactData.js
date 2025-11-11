export const contactConfig = {
  accessKey: "78f6d9d8-39e1-454f-976b-81c97531756a",
  apiEndpoint: "https://api.web3forms.com/submit",
  toastDuration: 10000
};

export const contactInfo = [
  {
    icon: "location",
    title: "Address",
    details: [
      "7/23 Poddar Nagar, Jadavpur",
      "Kolkata-700068, India"
    ]
  },
  {
    icon: "calling",
    title: "Phone",
    details: ["+91 85838 42681"]
  },
  {
    icon: "email",
    title: "Email",
    details: ["avrodeep.pal17@gmail.com"]
  }
];

export const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  },
  
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  },
  
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  },
  
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  
  contactInfoContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  },
  
  formContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
};