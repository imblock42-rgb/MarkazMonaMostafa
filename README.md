# Markaz Mona Mostafa - Arabic Language School Website

A modern, responsive, and multilingual website for an Arabic language school offering courses for adults and children.

## 🌟 Features

- **Multilingual Support**: Russian, English, and Arabic with full RTL support for Arabic
- **Dark/Light Theme Toggle**: Users can switch between dark and light modes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Sticky header with mobile-friendly hamburger menu
- **Course Plans**: Four pricing tiers (Start, Pro, Master, Kids)
- **Blog Section**: Latest articles and tips about Arabic learning
- **Student Reviews**: Testimonials from satisfied learners
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Performance**: Optimized images with lazy loading, smooth scrolling

## 📁 Project Structure

```
MarkazMonaMostafa/
├── index.html          # Main HTML file with semantic structure
├── style.css          # Comprehensive styling with CSS variables
├── script.js          # JavaScript for interactivity and translations
├── assets/
│   ├── Logo.jpg       # School logo (add your image here)
│   ├── video-card-1.svg   # Beginner program placeholder
│   └── video-card-2.svg   # Speaking practice placeholder
├── README.md          # This file
├── LICENSE            # MIT License
└── .gitignore         # Git ignore file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js and a local development server

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/imblock42-rgb/MarkazMonaMostafa.git
   cd MarkazMonaMostafa
   ```

2. **Add your logo**
   - Replace `assets/Logo.jpg` with your school logo (recommended size: 42x42px)

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000` (Python 3)

4. **Deploy**
   - Push to GitHub and enable GitHub Pages in repository settings
   - Or deploy to any static hosting service (Vercel, Netlify, etc.)

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --bg: #071a33;           /* Dark background */
    --accent: #7cc5ff;       /* Accent color */
    --text: #eaf3ff;         /* Text color */
    /* ... other colors ... */
}
```

### Modifying Content
All text content uses `data-i18n` attributes for easy translation. Edit in `script.js`:
```javascript
const texts = {
    ru: {
        brand: "Mona Mostafa",
        // ... more translations
    },
    en: { /* English translations */ },
    ar: { /* Arabic translations */ }
};
```

### Adding More Languages
1. Add new language object in the `texts` variable
2. Add corresponding option in the language selector dropdown
3. Add translations for all `data-i18n` keys

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 781px - 1199px (2-column course grid)
- **Mobile**: 420px - 780px (1-column layouts)
- **Small Mobile**: Below 420px (optimized text sizes)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Screen reader-friendly language selectors
- Keyboard navigation support
- Focus states for all interactive elements
- Color contrast compliant with WCAG standards
- Alternative text for images

## 🌍 Internationalization

The site supports three languages:

| Language | Code | Direction |
|----------|------|-----------|
| Russian  | ru   | LTR       |
| English  | en   | LTR       |
| Arabic   | ar   | RTL       |

Language preference is saved in browser's localStorage.

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 👤 Author

- **Name**: Markaz Mona Mostafa
- **Website**: [GitHub Repository](https://github.com/imblock42-rgb/MarkazMonaMostafa)

## 📧 Contact

For inquiries about the Arabic courses or website improvements, please reach out through GitHub Issues.

## 🔔 Version History

### v1.1.0 (Current)
- ✅ Fixed incomplete translations
- ✅ Fixed meta tag errors
- ✅ Added comprehensive accessibility features
- ✅ Added student reviews section
- ✅ Added enroll buttons with interactive feedback
- ✅ Created placeholder SVG assets
- ✅ Improved responsive design
- ✅ Enhanced CSS with hover states
- ✅ Added footer links

### v1.0.0
- Initial launch with basic functionality

## 🐛 Known Issues & TODOs

- [ ] Add real course logo image (currently placeholder)
- [ ] Implement actual enrollment form with backend
- [ ] Add video embed functionality
- [ ] Create contact form with email integration
- [ ] Add more blog articles
- [ ] Implement student testimonial management system
- [ ] Add analytics tracking
- [ ] Create admin dashboard for content management

## 🚀 Future Enhancements

- [ ] Search functionality for blog posts
- [ ] Course progress tracking
- [ ] Student dashboard
- [ ] Payment integration
- [ ] Live class scheduling system
- [ ] Video lessons library
- [ ] Mobile app
- [ ] Social media integration

---

**Last Updated**: May 24, 2026

