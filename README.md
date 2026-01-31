# Krovos Website

Enterprise-grade automation platform website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Project Overview

Krovos is an intelligent automation platform that helps businesses streamline operations, boost productivity, and drive measurable ROI. This website serves as the primary marketing and conversion platform for the Krovos product.

### Key Features
- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Comprehensive UI Library**: 25+ reusable components with dark mode support
- **Performance Optimized**: 95+ Lighthouse scores target
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Accessibility**: WCAG 2.1 AA compliant components
- **Animation Ready**: Framer Motion and GSAP integration

## 📁 Project Structure

```
krovos-website/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── layout.tsx         # Root layout with fonts and metadata
│   │   ├── page.tsx           # Homepage with hero, features, testimonials
│   │   └── test/              # Component testing page
│   ├── components/
│   │   ├── ui/                # 25+ reusable UI components
│   │   ├── layout/            # Header, Footer components
│   │   └── animations/        # Animation utilities
│   ├── lib/                   # Utility functions
│   ├── constants/             # App constants and configuration
│   └── types/                 # TypeScript type definitions
├── scripts/                   # Automation scripts
│   ├── gallery-dl.conf.json  # Image fetching configuration
│   ├── optimize-image.py     # Image optimization script
│   └── watermark-check.py    # Watermark detection script
├── public/                    # Static assets
└── tailwind.config.ts        # Tailwind configuration
```

## 🎨 Design System

### Colors
- **Primary**: `#0ea5e9` (Sky Blue)
- **Secondary**: `#a855f7` (Purple)
- **Accent**: `#f97316` (Orange)
- **Background**: Light/Dark mode with system preference

### Typography
- **Sans**: Inter (UI text)
- **Display**: Space Grotesk (Headings)
- **Mono**: JetBrains Mono (Code)

### Components
- **Buttons**: 5 variants, 3 sizes, loading states
- **Cards**: Multiple layouts with headers, content, footers
- **Forms**: Inputs, selects, checkboxes, radios, switches
- **Feedback**: Alerts, toasts, badges, progress bars
- **Navigation**: Tabs, accordions, modals, drawers
- **Layout**: Header, footer, skeletons, dividers

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

### Code Quality
```bash
# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Component testing
npm run test:components
```

## 📦 Key Dependencies

### Core
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **GSAP**: Advanced animations

### UI & Styling
- **Lucide React**: Icon library
- **clsx**: Conditional className utility
- **tailwind-merge**: Merge Tailwind classes

### State & Forms
- **Zustand**: State management
- **React Hook Form**: Form handling
- **Zod**: Schema validation

### Image Processing
- **Sharp**: Image optimization
- **Gallery-DL**: Automated image fetching

## 🚀 Deployment

The project is configured for deployment on Vercel:

1. Push to GitHub/GitLab
2. Connect to Vercel
3. Automatic deployments on push

### Environment Variables
Create `.env.local`:
```env
# Optional: Add any required environment variables
```

## 📈 Performance Targets

- **Lighthouse Scores**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 200ms
- **Time to Interactive**: < 3.5s

## 🔧 Scripts

### Image Automation
```bash
# Fetch high-quality images from Unsplash/Pexels/Pixabay
python scripts/fetch-images.py

# Optimize images (resize + WebP conversion)
python scripts/optimize-image.py

# Check for watermarks
python scripts/watermark-check.py
```

### Component Development
```bash
# Test all components
npm run test:components

# Access component test page
# Navigate to /test in development
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes with tests
4. Submit a pull request

### Commit Convention
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

## 📄 License

Proprietary - All rights reserved.

## 📞 Contact

For questions or support:
- Email: contact@krovos.com
- Website: https://krovos.com

---

**Built with ❤️ by the Krovos Team**
