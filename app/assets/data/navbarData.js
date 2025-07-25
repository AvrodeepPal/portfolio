export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export const brandConfig = {
  href: "#top",
  alt: "logo",
  maxWidths: {
    base: "100px",
    xs: "120px", 
    sm: "170px"
  }
};

export const styleConstants = {
  glassBackground: {
    light: "bg-[rgba(255,215,0,0.15)]",
    dark: "dark:bg-[rgba(255,255,255,0.1)]",
    hoverLight: "hover:bg-[rgba(255,215,0,0.25)]",
    hoverDark: "dark:hover:bg-[rgba(255,255,255,0.2)]"
  },
  colors: {
    accent: "#FFD700",
    hoverLight: "hover:text-[#FFD700]",
    hoverDark: "dark:hover:text-white"
  },
  mobileMenu: {
    width: "w-48 xs:w-56 sm:w-64",
    maxWidth: "max-w-[80vw]",
    background: {
      light: "bg-[rgba(255,215,0,0.2)]",
      dark: "dark:bg-[rgba(30,30,30,0.95)]"
    },
    border: {
      light: "border-[rgba(255,215,0,0.3)]",
      dark: "dark:border-[rgba(255,255,255,0.2)]"
    }
  }
};