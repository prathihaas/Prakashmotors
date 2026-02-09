# Prakash Motors - New Holland Dealer Website

Official website for Prakash Motors, an authorized New Holland dealer in Nizamabad, Telangana.

## 🚜 About

Prakash Motors is your trusted partner for premium New Holland tractors, harvesters, and agricultural equipment in Nizamabad. We offer a wide range of models with expert service and support.

## 🌟 Features

- **Bilingual Support**: Content in both English and Telugu (తెలుగు)
- **Product Catalog**: Complete range of tractors and harvesters
- **Responsive Design**: Works perfectly on all devices
- **Fast Performance**: Built with Astro for optimal speed
- **Modern UI**: Clean design with Tailwind CSS

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) 5.1.1
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4
- **Icons**: [Lucide](https://lucide.dev/)
- **Fonts**: Montserrat + Noto Sans Telugu
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## 📦 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/prathihaas/Prakashmotors.git

# Navigate to directory
cd Prakashmotors

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:4321 in your browser
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

The site is **deployed on Vercel** with automatic deployments enabled.

**Live Site**: Check your Vercel dashboard for the production URL

### How it Works

1. Push code to GitHub
2. Vercel automatically builds and deploys
3. Site is live in ~1-2 minutes

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick Deploy

Simply push your changes to the main branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel handles the rest automatically! ✨

## 📁 Project Structure

```
Prakashmotors/
├── src/
│   ├── content/          # Content collections
│   │   ├── products/     # Product markdown files
│   │   └── blog/         # Blog post files
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro  # Main layout component
│   └── pages/            # File-based routing
│       ├── index.astro   # Homepage
│       ├── products/     # Product pages
│       │   └── [...slug].astro  # Dynamic product routes
│       └── blog/         # Blog pages
│           └── [...slug].astro  # Dynamic blog routes
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
├── vercel.json           # Vercel deployment config
├── tailwind.config.mjs   # Tailwind configuration
└── package.json          # Dependencies
```

## 📝 Content Management

### Adding a New Product

1. Create a new markdown file in `src/content/products/`
2. Add frontmatter with product details:

```markdown
---
title: "Product Name"
title_te: "తెలుగు పేరు"
category: "Tractors"
image: "image-url"
features:
  - "Feature 1"
  - "Feature 2"
isRecommended: true
whatsapp_message: "https://wa.me/..."
---

Product description content here...
```

3. The product will automatically appear on the homepage and have its own detail page

### Adding a Blog Post

1. Create a new markdown file in `src/content/blog/`
2. Add frontmatter with post details
3. The post will automatically appear on the homepage

## 🎨 Customization

### Colors

The brand colors are defined in `src/layouts/Layout.astro`:

```css
--nh-blue: #001489;
--nh-blue-dark: #000E5C;
--nh-yellow: #FFD100;
```

### Contact Information

Update contact details in:
- Homepage (`src/pages/index.astro`)
- Layout component (`src/layouts/Layout.astro`)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Prakash Motors.

## 📞 Contact

**Prakash Motors**
- Location: Opposite New Bus Stand, Nizamabad, Telangana
- Phone: +91 7981913360
- WhatsApp: [Chat with us](https://wa.me/917981913360)

---

Built with ❤️ for Indian farmers | వ్యవసాయ అభివృద్ధికి అంకితం
