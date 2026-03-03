# Scientist Technologies - React Application

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
scientist-tech-react/
├── public/
│   └── assets/              # All static assets (CSS, images, videos)
│       ├── css/
│       │   └── styles.css   # Main stylesheet (unchanged from original)
│       ├── images/
│       ├── js/
│       └── videos/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx       # Main layout wrapper
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── Footer.jsx       # Footer component
│   │   │   └── MobileMenu.jsx   # Mobile navigation
│   │   ├── common/
│   │   │   ├── CursorGlow.jsx   # Cursor glow effect
│   │   │   └── ParticleCanvas.jsx # Particle animation
│   │   └── home/
│   │       └── LogoMarquee.jsx  # Company logo slider
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About page
│   │   ├── Services.jsx     # Services/Consulting page
│   │   ├── Projects.jsx     # Projects page
│   │   ├── Products.jsx     # Products page
│   │   ├── UrbanAI.jsx      # Urban AI product page
│   │   ├── Team.jsx         # Team page
│   │   ├── Contact.jsx      # Contact page
│   │   └── CaseStudy.jsx    # Case study template
│   ├── hooks/
│   │   ├── useTheme.js          # Theme management (dark/light)
│   │   └── useScrollAnimation.js # Scroll animations
│   ├── App.jsx              # Router configuration
│   ├── main.jsx             # Application entry point
│   └── index.css            # Minimal global styles
└── index.html               # HTML template
```

## 🎨 Features

- ✅ **React 19** with Vite for fast development
- ✅ **React Router v6** for client-side routing
- ✅ **Theme System** - Dark/Light mode with localStorage persistence
- ✅ **Animations** - Particle canvas, cursor glow, scroll animations
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **EmailJS Integration** - Contact form functionality
- ✅ **Leaflet Maps** - Interactive map support
- ✅ **Original CSS Preserved** - All existing styles maintained

## 📄 Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero and logo marquee |
| `/about` | About | Company journey, timeline, values |
| `/services` | Services | AI consulting offerings |
| `/projects` | Projects | Project portfolio |
| `/products` | Products | Product showcase |
| `/urban-ai` | UrbanAI | Urban AI product details |
| `/team` | Team | Team members |
| `/contact` | Contact | Contact form and information |
| `/case-study/:id` | CaseStudy | Dynamic case study pages |

## 🔧 Configuration

### EmailJS Setup (Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update `src/pages/Contact.jsx`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your service ID
  'YOUR_TEMPLATE_ID',     // Replace with your template ID
  formData,
  'YOUR_PUBLIC_KEY'       // Replace with your public key
)
```

### Theme Configuration

The theme system automatically:
- Detects system preference
- Saves user choice to localStorage
- Applies theme on page load

## 🎯 Development

### Hot Module Replacement (HMR)
Vite provides instant updates during development. Changes to components will reflect immediately without full page reload.

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/layout/Navbar.jsx`

Example:
```javascript
// src/App.jsx
<Route path="new-page" element={<NewPage />} />

// src/components/layout/Navbar.jsx
<Link to="/new-page" className="nav-link">New Page</Link>
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel/Netlify

1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Client-side routing

### Features
- `emailjs-com` - Email service integration
- `leaflet` - Interactive maps
- `react-leaflet` - React wrapper for Leaflet

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite

## 🎨 Styling

All original CSS from `ST-Redesign/assets/css/styles.css` is preserved and imported globally. No CSS modules or CSS-in-JS used.

## 🐛 Troubleshooting

### CSS Not Loading
- Ensure `public/assets/css/styles.css` exists
- Check import path in `src/main.jsx`

### Images Not Showing
- Verify images are in `public/assets/images/`
- Use paths starting with `/assets/` (not `./assets/`)

### Routes Not Working
- Check `src/App.jsx` for route configuration
- Ensure `BrowserRouter` is wrapping the app in `src/main.jsx`

## 📝 Notes

- All original HTML has been converted to JSX
- Class names preserved (className in JSX)
- All animations and effects maintained
- Responsive design intact
- Theme switching functional

## 🤝 Support

For issues or questions, contact the development team.

---

**Built with ❤️ using React + Vite**
