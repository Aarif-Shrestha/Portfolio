# 🚀 Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite, showcasing professional skills, projects, and experience with a sleek dark theme and smooth animations.

Portfolio: [Live Demo]([https://portfolioaarif.netlify.app/])



## ✨ Features

- **Responsive Design**: Fully responsive across all devices with custom breakpoints
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Fixed Navigation**: Sticky navbar with hamburger menu for mobile devices
- **Interactive Sections**: Hero, About, Skills, Projects, Contact, and Footer sections
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **Glass Morphism**: Modern backdrop blur effects on navigation
- **Dark Theme**: Professional dark color scheme

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Plain CSS with custom media queries
- **Navigation**: React Anchor Link Smooth Scroll
- **Linting**: ESLint with React plugins
- **Version Control**: Git

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 748px - 1024px
- **Mobile Large**: 501px - 747px (Hamburger menu active)
- **Mobile Medium**: 376px - 500px
- **Mobile Small**: ≤ 375px

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   └── Skill/
│   │       ├── Skill.jsx
│   │       └── Skill.css
│   ├── assets/
│   │   ├── *.svg (Various icons and graphics)
│   │   ├── pp.png (Profile picture)
│   │   ├── mywork_data.js (Project data)
│   │   └── services_data.js (Services data)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aarif-Shrestha/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Customization

### Colors & Theme
Edit the CSS custom properties in `src/index.css` and component-specific CSS files to customize colors and styling.

### Content
- Update personal information in component files
- Modify project data in `src/assets/mywork_data.js`
- Update services/skills in `src/assets/services_data.js`
- Replace profile images in `src/assets/`

### Responsive Breakpoints
Adjust media queries in component CSS files to modify responsive behavior.

## 📱 Mobile Features

- **Hamburger Menu**: Activates at ≤747px screen width
- **Touch-Friendly**: Optimized button sizes and spacing
- **Smooth Animations**: CSS transitions for menu open/close
- **Overlay Navigation**: Dark overlay with slide-out menu
- **Scroll Lock**: Prevents body scrolling when menu is open

## 🌟 Key Components

### Navbar
- Fixed positioning with backdrop blur
- Responsive hamburger menu
- Smooth scroll navigation
- Glass morphism effect

### Hero Section
- Animated profile image
- Gradient text effects
- Call-to-action buttons
- Responsive typography

### Projects Section
- Grid layout with hover effects
- Project cards with descriptions
- Responsive image handling

## 🔧 Configuration Files

- **Vite Config**: `vite.config.js` - Build tool configuration
- **ESLint Config**: `eslint.config.js` - Code linting rules
- **Package.json**: Dependencies and scripts

## 📈 Performance Features

- **Vite HMR**: Hot Module Replacement for fast development
- **Optimized Assets**: Automatic asset optimization
- **CSS Splitting**: Automatic CSS code splitting
- **Tree Shaking**: Dead code elimination

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aarif Shrestha**
- GitHub: [@Aarif-Shrestha](https://github.com/Aarif-Shrestha)
- Portfolio: [Live Demo]([https://portfolioaarif.netlify.app/])
## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Open source community for inspiration and resources

---

⭐ Star this repository if you found it helpful!
