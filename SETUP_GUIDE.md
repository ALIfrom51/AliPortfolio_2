# Ali Rebbouh Portfolio Website - Setup Guide

## 🚀 Quick Start

This is a production-ready React portfolio website featuring modern animations, glassmorphism design, and professional styling.

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Create a new React project:**
```bash
npx create-react-app ali-portfolio
cd ali-portfolio
```

2. **Install required dependencies:**
```bash
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Configure Tailwind CSS:**

Replace the content of `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}
```

4. **Update `index.css`:**

Replace the entire content with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: #0f172a;
  color: #f1f5f9;
}

/* Smooth scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
```

5. **Replace `src/App.jsx` with the portfolio component:**

Copy the entire content from `AliRebbouh-Portfolio.jsx` into `src/App.jsx`

6. **Update `src/main.jsx`:**
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

7. **Start the development server:**
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser!

---

## 📝 Customization Guide

### Change Personal Information

1. **Hero Section Name & Title:**
   - Line 156: Change `Ali Rebbouh` to your name
   - Line 159: Update the professional title

2. **About Section:**
   - Update the bio text in lines 340-350
   - Modify the skills list in the grid (lines 370-387)

3. **Projects:**
   - Edit project cards in the `ProjectCard` component calls (lines 660-710)
   - Update `title`, `description`, `tech`, `github`, and `demo` props
   - Replace URLs with your actual GitHub repositories and demo links

4. **GitHub Profile:**
   - Line 763: Update the GitHub username
   - Line 779: Update the GitHub profile link

5. **LinkedIn Profile:**
   - Line 845: Update the LinkedIn profile URL

6. **Contact Information:**
   - Lines 934-944: Update email and other contact details
   - Update the email address in the contact form

### Update Skills

In the `SkillsSection`, modify the skill categories and items:
```javascript
{ category: 'Your Category', skills: [
  { name: 'Skill Name', level: 85 },
  // Add more skills
]}
```

### Change Color Scheme

The current color scheme uses blue and purple. To change it:

1. **Gradients:** Replace `from-blue-500` and `to-purple-500` with your preferred Tailwind colors
2. **Accents:** Change `blue-400` and `purple-400` to match your theme
3. **Backgrounds:** Modify `slate-*` colors for different contrast

Example for a green theme:
```javascript
// Replace:
className="from-blue-400 via-purple-400 to-blue-400"
// With:
className="from-emerald-400 via-teal-400 to-emerald-400"
```

### Add Your Professional Photo

1. Place your photo in `src/assets/` folder
2. Replace the placeholder div in the `HeroSection` (around line 260):

```javascript
<div className="relative w-72 h-80 rounded-2xl bg-cover bg-center border border-blue-400/20 overflow-hidden"
  style={{ backgroundImage: `url('/your-photo.jpg')` }}>
</div>
```

### Download CV Button

Update the CV download link in the `HeroSection` (line 221):
```javascript
<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="/path-to-your-cv.pdf"
  download
  className="px-8 py-3 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg..."
>
  Download CV
</motion.a>
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/ali-portfolio.git
git push -u origin main
```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. **Update `package.json`:**
```json
{
  "homepage": "https://username.github.io/ali-portfolio",
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

2. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

3. **Deploy:**
```bash
npm run deploy
```

---

## 🎯 Features Included

✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Smooth Animations** - Framer Motion animations throughout
✅ **Dark Theme** - Professional dark mode with glassmorphism
✅ **Modern UI** - Gradient text, animated backgrounds, hover effects
✅ **SEO Optimized** - Clean HTML structure for search engines
✅ **Fast Loading** - Optimized assets and lazy loading
✅ **Accessible** - ARIA labels and semantic HTML
✅ **Contact Form** - Ready to integrate with email service
✅ **Social Links** - GitHub and LinkedIn integration
✅ **Projects Showcase** - Easy to update project cards
✅ **Skills Section** - Animated progress bars
✅ **Tech Stack Display** - Interactive skill badges

---

## 🔧 Integration with Email Service

To make the contact form functional, integrate with an email service:

### Option 1: Formspree (Free & Easy)

1. Update the form in `ContactSection`:
```javascript
<motion.form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  onSubmit={handleSubmit}
  className="space-y-6"
>
```

2. Add input names:
```javascript
<input name="name" type="text" placeholder="Your name" />
<input name="email" type="email" placeholder="your@email.com" />
<textarea name="message" placeholder="Your message..."></textarea>
```

### Option 2: EmailJS (No Backend)

1. Install EmailJS:
```bash
npm install @emailjs/browser
```

2. Initialize in your App component:
```javascript
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');
```

3. Update the form submission handler

---

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design
- Touch-friendly buttons and links
- Optimized navigation for small screens
- Responsive images and text sizing
- Fast mobile performance

---

## 🎨 Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📊 Performance Tips

1. **Optimize Images:** Use WebP format and compress images
2. **Code Splitting:** Use React.lazy() for large sections
3. **Asset Optimization:** Minify CSS/JS in production build
4. **CDN Delivery:** Use Vercel's built-in CDN for fast delivery
5. **Caching:** Enable browser caching for static assets

---

## 🐛 Troubleshooting

### Issue: Animations not working
**Solution:** Make sure framer-motion is properly installed:
```bash
npm install framer-motion --save
```

### Issue: Tailwind styles not applied
**Solution:** Rebuild Tailwind CSS:
```bash
npm run dev
```

### Issue: Mobile menu not closing
**Solution:** Clear browser cache and restart dev server

---

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [React Documentation](https://react.dev/)

---

## 💡 Next Steps

1. ✅ Update all personal information
2. ✅ Add your professional photo
3. ✅ Update project details and GitHub links
4. ✅ Configure contact form with email service
5. ✅ Test on mobile devices
6. ✅ Deploy to your preferred hosting platform
7. ✅ Share with recruiters and on social media!

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
