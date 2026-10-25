# 🌟 Avrodeep Pal - Portfolio

A modern, interactive portfolio showcasing my work as a software engineer building AI systems. It comes with smooth animations, dark/light themes, a responsive layout and **AStarBot**, an AI assistant that answers questions about me.

## 🚀 Live Demo

[View Portfolio](https://avrodeeppal-portfolio.vercel.app)

## 📋 About

I'm Avrodeep Pal, an SDE at GenAIus Technology and an MCA graduate of Jadavpur University. I work on LLM infrastructure (RAG pipelines, agent workflows, model serving), and my independent research is on reasoning models. This portfolio covers my experience, skills, academic record and project work.

**Key Highlights:**
- 🎓 WBSU Rank 1 in Bachelor's (CGPA: 9.91/10.0)
- 🏆 2nd Rank in WB-JECA 2024 (State-level MCA entrance)
- ⭐ 5 Star Problem Solver on HackerRank
- 💡 3 Major Projects with 90%+ User Satisfaction

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Dark/Light Theme**: Toggle between themes with system preference detection, applied before first paint so there's no flash
- **Fully Responsive**: Optimized for all device sizes, including a full-screen chat on mobile
- **AStarBot Chat**: An AI assistant that streams answers about my background, backed by the [AStarBot](https://github.com/AvrodeepPal/AStarBot) RAG API
- **Interactive Elements**: Scroll-in animations (played once), glowing card borders, hover effects and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Lazy-loaded chat, right-sized responsive images, and CSS-driven ambient animations

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 App Router (React 19)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, plus CSS keyframes for looping effects
- **Fonts**: Poppins via `next/font`
- **Chat Rendering**: react-markdown + remark-gfm (loaded only when the chat opens)
- **Forms**: Web3Forms
- **Icons**: React Icons

### Development Tools
- **Language**: JavaScript
- **Package Manager**: npm
- **Version Control**: Git
- **Deployment**: Vercel (frontend), with the AStarBot API on Render

## 🏗️ Project Structure

```
├── app/
│   ├── layout.js          # Root layout, fonts, pre-paint theme script
│   ├── page.js            # Home page (server component)
│   ├── globals.css        # Theme variables, Tailwind, CSS animations
│   ├── components/
│   │   ├── ThemeProvider.jsx  # Dark/light theme state shared via context
│   │   ├── navbar/        # Navbar, mobile menu, theme toggle
│   │   ├── hero/          # Hero section, TrueFocus, ShinyText, spotlight
│   │   ├── experience/    # Work timeline and cards
│   │   ├── skills/        # Skills showcase with animations
│   │   ├── projects/      # Project cards and details
│   │   ├── about/         # About section with education timeline
│   │   ├── contacts/      # Contact form and info
│   │   ├── chatbot/       # AStarBot launcher and lazy-loaded chat window
│   │   └── ui/            # Shared effects (GlowingEffect)
│   └── assets/
│       ├── data/          # Section content and config
│       ├── hooks/         # Custom React hooks (chat, navbar, contact form)
│       └── */             # Images and icons per section
├── public/                # Public assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AvrodeepPal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Point the chat at the AStarBot API** (optional)

   Create `.env.local` in the project root:
   ```bash
   NEXT_PUBLIC_ASTARBOT_API_URL=https://your-astarbot-api.example.com
   ```
   Without it the site still runs, and the chat replies that its backend isn't configured. The API must list this site's origin in its `FRONTEND_ORIGIN`.

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections

- **Hero**: Dynamic introduction with animated text and social links
- **Experience**: Work timeline with role highlights and tech stack
- **Skills**: Technical skills organized by categories
- **Projects**: Showcase of major projects with live demos
- **About**: Personal introduction with education timeline
- **Contact**: Functional contact form with validation
- **AStarBot**: Floating chat assistant, available on every section

## 🎨 Key Components

- **TrueFocus**: Dynamic text animation cycling through focus areas
- **ShinyText**: Gradient text animation effect
- **Connection**: Rotating social media links
- **EducationTimeline**: Interactive timeline with hover effects
- **ContactForm**: Form with real-time validation and submission
- **ChatBot / ChatWindow**: Chat launcher; the window (and its Markdown renderer) loads on first hover or tap
- **GlowingEffect**: Pointer-tracking border glow that only listens while its card is on screen
- **ThemeToggle**: Animated sun/moon switch built with plain SVG and CSS

## 📊 Featured Projects

- **Cross Lingual Semantics**
- **LLMs Practice**
- **Fraud Detection EDA** - Transaction Analysis
- **Credit Risk EDA** - Loan Approval
- **Let's Connect!** - AI-driven campus recruitment platform
- **Time Series Analysis** - LSTM stock price forecasting
- **Star Emporium** - Java-based e-book management system

Details and links are in the Projects section of the live site.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AvrodeepPal/portfolio/issues).

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: avrodeep.pal17@gmail.com
- **LinkedIn**: [linkedin.com/in/AvrodeepPal](https://linkedin.com/in/AvrodeepPal)
- **GitHub**: [github.com/AvrodeepPal](https://github.com/AvrodeepPal)
- **LeetCode**: [leetcode.com/AvrodeepPal](https://leetcode.com/AvrodeepPal)

## 🙏 Acknowledgments

- Thanks to the open-source community for the amazing libraries
- Inspired by modern portfolio designs and best practices
- Special thanks to mentors and peers for feedback and support

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by Avrodeep Pal*