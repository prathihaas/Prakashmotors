# Deployment Guide - Prakash Motors Website

## Quick Deploy Options

### Option 1: GitHub Pages (Recommended)

This website is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

#### Setup Instructions

1. **Enable GitHub Pages in Repository Settings**
   - Go to: `Settings` → `Pages`
   - Under "Source", select: **GitHub Actions**
   - Save the settings

2. **Merge Changes to Main Branch**
   - Merge your feature branch to `main`
   - The GitHub Actions workflow will automatically trigger
   - Build the Astro site
   - Deploy to GitHub Pages

3. **Access the Live Site**
   - If using repository path: `https://prathihaas.github.io/Prakashmotors`
   - If using custom domain: Configure in Settings → Pages → Custom domain
   - Deployment typically takes 2-3 minutes

#### For Custom Domain

If you have a custom domain:

1. Add CNAME file or configure in GitHub Pages settings
2. Keep the default `astro.config.mjs` (no base path)
3. Current config works perfectly for custom domains or root deployments

#### For GitHub Pages with Repository Path

If deploying to `https://username.github.io/Prakashmotors`:

1. Uncomment these lines in `astro.config.mjs`:
   ```javascript
   site: 'https://prathihaas.github.io',
   base: '/Prakashmotors',
   ```
2. Rebuild and deploy

### Option 2: Netlify (Alternative)

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically deploy on every push to main

### Option 3: Vercel (Alternative)

1. **Import Project**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure**
   - Framework Preset: Astro
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically deploy on every push

## Manual Deployment

To manually trigger a GitHub Pages deployment:

1. Go to the **Actions** tab in GitHub
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

## Local Testing

Before deploying, always test locally:

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build the site
npm run build

# Preview the built site
npm run preview
```

## Deployment Status

Check deployment status in the **Actions** tab of the GitHub repository.

## Troubleshooting

### GitHub Pages Issues

- **404 Error**: Ensure GitHub Pages is enabled and set to use GitHub Actions
- **Build Fails**: Check the Actions log for error details
- **Assets Not Loading**: 
  - If using custom domain: no changes needed
  - If using repository path: uncomment `site` and `base` in `astro.config.mjs`

### General Issues

- **Node Version**: Ensure you're using Node.js 18 or higher
- **Dependencies**: Run `npm install` to ensure all dependencies are installed
- **Cache Issues**: Try `npm ci` for a clean install

## Configuration Files

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `astro.config.mjs` - Site URL and base path configuration
- `package.json` - Build scripts and dependencies

## Support

For issues:
1. Check the Actions tab for build logs
2. Review this guide for configuration options
3. Ensure all dependencies are installed
4. Try a clean build: `rm -rf node_modules dist && npm install && npm run build`

