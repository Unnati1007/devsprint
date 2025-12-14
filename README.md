# DevSprint by GDG MITS

A dark-themed, multi-page Next.js website for DevSprint hackathon event organized by Google Developer Groups MITS.

## 🌐 Live Demo

Experience DevSprint live on:

- **Vercel (Primary):** https://devsprint-nine.vercel.app/
- **MITS Server:** https://devsprint.mitsgwalior.in/


## Features

- 🎨 **Dark Theme** with Google brand colors
- 🔌 **Subtle circuit line background** for tech aesthetics
- 📱 **Fully Responsive** design for all devices
- ⚡ **Next.js 14** with TypeScript
- 💅 **SCSS** for styling with modular architecture
- 🎭 **Smooth animations** and transitions
- 🎯 **Clean spacing** and high contrast text

## Sections

### Landing Page

1. **Hero Section** - Full-viewport background with centered event name and CTA buttons
2. **About Event** - Dual-layer heading with vector illustration and description
3. **About GDG** - Community information with reversed layout
4. **Timeline** - Horizontal wavy sine line timeline with milestones
5. **Other Events** - 3 event cards with wavy arrow buttons
6. **Prize Pool** - Bold, striking prize display with Google colors
7. **Rules** - Clean bullet-point list with numbered items
8. **Tracks** - 4 colored cards for Web Dev, Android, AI/ML, and Blockchain
9. **FAQs** - Accordion layout with smooth animations
10. **Footer** - GDG MITS branding with social media links

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **Icons:** Unicode Emojis
- **Images:** Unsplash (placeholder images)

## Project Structure

```
devsprint/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.scss
│   │   ├── About/
│   │   ├── AboutGDG/
│   │   ├── Timeline/
│   │   ├── OtherEvents/
│   │   ├── PrizePool/
│   │   ├── Rules/
│   │   ├── Tracks/
│   │   ├── FAQ/
│   │   └── Footer/
│   └── styles/
│       ├── globals.scss        # Global styles
│       └── variables.scss      # SCSS variables & mixins
├── package.json
├── tsconfig.json
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

Edit `src/styles/variables.scss` to customize Google brand colors and theme colors:

```scss
$google-blue: #4285F4;
$google-red: #EA4335;
$google-yellow: #FBBC04;
$google-green: #34A853;
```

### Content

- Update event details in respective component files
- Replace placeholder images with actual event images
- Modify social media links in `Footer.tsx`
- Update timeline dates in `Timeline.tsx`

### Styling

- Global styles: `src/styles/globals.scss`
- Component styles: Each component has its own `.module.scss` file
- Responsive breakpoints: Defined in `variables.scss`

## Design Principles

- **Dark Theme**: Background color #0a0a0a with high contrast text
- **Google Brand Colors**: Used for UI elements, buttons, and accents
- **Circuit Lines**: Subtle motherboard-style grid pattern
- **Spacing**: Generous padding and margins for breathing room
- **Typography**: Bold, clear hierarchy with dual-layer headings
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first approach with tablet and desktop breakpoints

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 DevSprint by GDG MITS. All rights reserved.

## Contact

- Website: [gdg-mits.dev](https://gdg-mits.dev)
- Twitter: [@gdgmits](https://twitter.com/gdgmits)
- LinkedIn: [GDG MITS](https://linkedin.com/company/gdg-mits)
- Instagram: [@gdg.mits](https://instagram.com/gdg.mits)

---

Built with ❤️ by GDG MITS
