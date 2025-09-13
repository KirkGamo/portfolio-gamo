# Kirk Henrich C. Gamo - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2.32-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, responsive portfolio website showcasing the professional journey, skills, and achievements of Kirk Henrich C. Gamo, Software Engineer and AI Enthusiast.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

This portfolio website serves as a comprehensive digital presence for Kirk Henrich C. Gamo, a Computer Science student and aspiring Software Engineer from Capiz, Philippines. The website showcases professional experience, educational background, leadership roles, technical skills, and notable achievements.

### Purpose
- **Professional Showcase**: Display skills, experience, and projects
- **Personal Branding**: Establish online presence in the tech industry
- **Contact Hub**: Provide multiple channels for professional connections
- **Career Documentation**: Chronicle academic and professional journey

### Target Audience
- Potential employers and recruiters
- Professional network and colleagues
- Academic institutions and peers
- Clients and collaborators

## ✨ Features

### 🎨 **User Interface**
- **Responsive Design**: Mobile-first approach supporting all device sizes
- **Modern Aesthetics**: Clean, professional design with gradient accents
- **Dark Theme**: Eye-friendly dark color scheme with blue/purple gradients
- **Smooth Animations**: Subtle hover effects and transitions
- **Interactive Navigation**: Fixed navbar with active section highlighting

### 📱 **Navigation & UX**
- **Sticky Navigation**: Always-accessible navigation bar
- **Mobile Menu**: Collapsible slide-out menu for mobile devices
- **Smooth Scrolling**: Seamless section transitions
- **Section Indicators**: Visual feedback for current page section
- **Back to Top**: Quick navigation to top of page

### 🔧 **Technical Features**
- **Server-Side Rendering**: Next.js App Router for optimal performance
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Modular, reusable React components
- **Optimized Images**: Next.js image optimization
- **SEO Ready**: Proper meta tags and semantic HTML

### 📄 **Content Sections**
- **Hero Section**: Personal introduction with typing animation effect
- **About**: Personal background and professional summary
- **Education**: Academic achievements and certifications
- **Experience**: Work history with detailed descriptions
- **Leadership**: Leadership roles and responsibilities
- **Skills**: Technical and soft skills with categorization
- **Awards**: Recognitions and achievements
- **Contact**: Multiple contact methods and social links

## 🛠 Technology Stack

### **Frontend Framework**
- **Next.js 14.2.32**: React framework with App Router
- **React 18.2.0**: Component-based UI library
- **TypeScript 5.0.0**: Type-safe JavaScript development

### **Styling & UI**
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Custom CSS**: Additional styling for animations

### **Development Tools**
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Cross-browser CSS compatibility

### **Fonts & Typography**
- **Inter**: Primary font family (Google Fonts)
- **Font optimization**: Next.js font optimization

## 🚀 Installation

### Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (or yarn/pnpm equivalent)
- **Git**: For version control

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kirkgamo/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Alternative Package Managers
```bash
# Using Yarn
yarn install && yarn dev

# Using pnpm
pnpm install && pnpm dev
```

## 💻 Usage

### Development Mode
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Starts the development server on `http://localhost:3000` with:
- Hot reloading for code changes
- Real-time error reporting
- Development-specific optimizations

### Production Build
```bash
npm run build
npm run start
```

Creates an optimized production build with:
- Code minification and bundling
- Image optimization
- Performance optimizations
- Static generation where applicable

### Linting
```bash
npm run lint
```

Runs ESLint to check code quality and consistency.

## 📁 Project Structure

```
PORTFOLIO/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   ├── loading.tsx              # Loading UI component
│   ├── not-found.tsx            # 404 page component
│   └── page.tsx                 # Home page component
├── components/                   # Reusable React components
│   ├── sections/                # Page section components
│   │   ├── SimpleAboutEnhanced.tsx    # About section
│   │   ├── SimpleAwards.tsx           # Awards section
│   │   ├── SimpleEducation.tsx        # Education section
│   │   ├── SimpleExperience.tsx       # Experience section
│   │   ├── SimpleLeadership.tsx       # Leadership section
│   │   └── SimpleSkills.tsx           # Skills section
│   ├── ProfileImage.tsx         # Profile picture component
│   ├── SimpleFooter.tsx         # Footer component
│   ├── SimpleNavbar.tsx         # Navigation component
│   └── TypingCarousel.tsx       # Typing animation component
├── public/                       # Static assets
│   ├── GAMO CV.pdf              # Downloadable CV
│   └── profile-picture.png      # Profile image
├── .next/                        # Next.js build output (auto-generated)
├── node_modules/                 # Dependencies (auto-generated)
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── next-env.d.ts                # Next.js TypeScript definitions
├── next.config.js               # Next.js configuration
├── package.json                 # Project dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Project documentation
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

### Key Directories

- **`app/`**: Contains the main application pages and layout using Next.js 14 App Router
- **`components/`**: Modular React components organized by functionality
- **`components/sections/`**: Individual page sections for better maintainability
- **`public/`**: Static assets served directly by the web server

## ⚙️ Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Kirk Henrich C. Gamo - Portfolio"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Contact Form (Optional)
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_USER_ID=your_emailjs_user_id
```

### Tailwind Configuration
The `tailwind.config.js` file includes:
- Custom color palette
- Typography settings
- Animation configurations
- Responsive breakpoints

### Next.js Configuration
The `next.config.js` file includes:
- Image optimization settings
- Build optimization
- Environment-specific configurations

## 🔧 Development

### Code Style Guidelines
- **TypeScript**: All components use TypeScript for type safety
- **Functional Components**: React functional components with hooks
- **Component Structure**: Props interfaces, component logic, JSX return
- **Naming Convention**: PascalCase for components, camelCase for functions/variables
- **Import Organization**: External libraries first, then internal components

### Component Architecture
```typescript
// Example component structure
interface ComponentProps {
  prop1: string;
  prop2?: number;
}

export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Hooks and state
  // Event handlers
  // Component logic
  
  return (
    // JSX structure
  );
};
```

### Adding New Sections
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to navigation in `components/SimpleNavbar.tsx`
4. Update footer links in `components/SimpleFooter.tsx`

### Styling Guidelines
- Use Tailwind CSS utility classes
- Maintain consistent spacing and colors
- Implement responsive design patterns
- Follow accessibility best practices

## 🚢 Deployment

### Vercel (Recommended)
1. **Connect repository**
   ```bash
   # Login to Vercel
   npx vercel login
   
   # Deploy
   npx vercel --prod
   ```

2. **Configure domain** (optional)
   - Add custom domain in Vercel dashboard
   - Configure DNS settings

### Alternative Platforms

#### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

#### GitHub Pages
```bash
npm run build
npm run export
# Deploy static files to gh-pages branch
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

### Guidelines
1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make changes with proper commits**
   ```bash
   git commit -m "feat: add new feature description"
   ```
4. **Push to branch**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create Pull Request**

### Commit Convention
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/updates
- `chore:` Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Kirk Henrich C. Gamo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contact

**Kirk Henrich C. Gamo**
- **Email**: [gamo.kirkhenrich2005@gmail.com](mailto:gamo.kirkhenrich2005@gmail.com)
- **LinkedIn**: [kirkgamo](https://www.linkedin.com/in/kirkgamo/)
- **Facebook**: [kirthenrich.gamo](https://www.facebook.com/kirthenrich.gamo)
- **Instagram**: [korkkkk1](https://www.instagram.com/korkkkk1/)
- **X (Twitter)**: [@KXAZTHRA1](https://x.com/KXAZTHRA1)
- **Portfolio**: [kirkgamo.dev](https://kirkgamo.dev) *(when deployed)*

---

**Built with ❤️ in the Philippines** 🇵🇭

*Last updated: September 2025*
