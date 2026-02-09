# Deployment Guide - Prakash Motors Website

## 🚀 Current Deployment: Vercel

This website is **deployed on Vercel** with automatic deployments enabled.

### ✅ How Automatic Deployment Works

1. **Push code** to your GitHub repository
2. **Vercel detects** the changes automatically
3. **Builds** your site with `npm run build`
4. **Deploys** to production
5. **Live** in ~1-2 minutes! ✨

**No manual deployment needed!** Just push to your main branch.

---

## 📝 Making Updates to Your Live Site

```bash
# 1. Make your changes to the code
# 2. Commit your changes
git add .
git commit -m "Description of your changes"

# 3. Push to GitHub
git push origin main

# 4. That's it! Vercel automatically deploys 🎉
```

Check your Vercel dashboard to see the deployment progress.

---

## 🔧 Vercel Configuration

Your site is configured with:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Framework**: Astro (auto-detected)
- **Node Version**: 20

Configuration is stored in: `vercel.json`

---

## 🌐 Your Live Site

**Vercel Dashboard**: https://vercel.com/dashboard

Your project URL will be:
- Production: `your-project-name.vercel.app`
- Preview deployments: Unique URL for each PR

### Adding a Custom Domain

1. Go to your project in **Vercel Dashboard**
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `prakashmotors.com`)
4. Follow DNS configuration instructions
5. Vercel automatically handles SSL certificates!

---

## 🔄 Deployment Types

### Production Deployments
- **Triggered by**: Push to `main` branch
- **URL**: Your production domain
- **Environment**: Production

### Preview Deployments
- **Triggered by**: Pull requests and other branches
- **URL**: Unique preview URL (e.g., `project-git-branch.vercel.app`)
- **Great for**: Testing changes before merging

---

## 📊 Monitoring Your Deployments

### Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your project
3. View:
   - Deployment history
   - Build logs
   - Performance metrics
   - Analytics

### GitHub Integration
- Vercel bot comments on your PRs
- Deployment status checks on commits
- Preview URLs in PR descriptions

---

## 🛠️ Advanced Configuration

### Environment Variables

If you need to add environment variables:

1. Go to **Vercel Dashboard**
2. Select your project
3. **Settings** → **Environment Variables**
4. Add variables for different environments:
   - Production
   - Preview
   - Development

After adding variables, redeploy for changes to take effect.

### Build Settings

To modify build settings:

1. Edit `vercel.json` in your repository
2. Or use Vercel Dashboard → **Settings** → **Build & Development Settings**

---

## 🔙 Rollbacks

If you need to rollback to a previous version:

1. Go to **Vercel Dashboard**
2. Navigate to **Deployments**
3. Find the stable deployment you want
4. Click **•••** (three dots)
5. Select **Promote to Production**

---

## 🧪 Local Testing

Before pushing changes, always test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🐛 Troubleshooting

### Build Fails on Vercel

1. **Check build logs** in Vercel dashboard under Deployments
2. **Test locally**: Run `npm run build` on your machine
3. **Common issues**:
   - Missing dependencies: Run `npm install`
   - Node version mismatch: Vercel uses Node 20
   - Environment variables: Check if any are missing

### Site Not Updating

1. **Check deployment status** in Vercel dashboard
2. **Verify git push**: Make sure changes are pushed to correct branch
3. **Clear cache**: In Vercel dashboard, redeploy with cache cleared
4. **Hard refresh browser**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### 404 Errors

1. **Check routes**: Ensure pages exist in `src/pages/`
2. **Verify build output**: Check `dist/` folder after build
3. **Review Astro config**: Ensure no base path conflicts

---

## 📚 Alternative Hosting Options

While you're currently on Vercel, here are alternatives:

### Netlify

1. Connect GitHub repository at https://netlify.com
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automatically on push

### GitHub Pages

1. Add `.github/workflows/deploy.yml` workflow
2. Enable GitHub Pages in repository settings
3. Choose "GitHub Actions" as source

### Cloudflare Pages

1. Connect repository at https://pages.cloudflare.com
2. Build settings same as Netlify
3. Benefit from Cloudflare's CDN

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Astro Docs**: https://docs.astro.build/en/guides/deploy/vercel/
- **Vercel Support**: Available in dashboard

---

## ✅ Quick Reference

| Action | Command |
|--------|---------|
| Install dependencies | `npm install` |
| Run dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview build | `npm run preview` |
| Deploy | `git push` (automatic via Vercel) |

---

**Status**: ✅ **Deployed on Vercel** with automatic deployments active

**Your live site updates automatically whenever you push to the main branch!**
