# Netlify Deployment Checklist

## Pre-deployment Steps ✅

- [x] Fixed JavaScript errors in poems.js
- [x] Added stanza count functionality
- [x] Created netlify.toml configuration
- [x] Added _headers and _redirects files
- [x] Updated .gitignore for Netlify
- [x] Enhanced HTML meta tags for SEO
- [x] Created README.md

## Deployment Steps

### Option 1: Manual Deployment (Drag & Drop)

1. **Prepare files**:
   - Remove `node_modules/` folder (not needed for static deployment)
   - Remove `server.js` (only needed for local development)
   - Keep all other files

2. **Create deployment package**:
   - Zip the entire project folder OR
   - Drag the folder directly to Netlify

3. **Deploy to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Sign up/Login
   - Click "Deploy manually"
   - Drag your project folder to the deployment area

### Option 2: Git Deployment (Recommended)

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Poetry app ready for deployment"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Connect your local repo to GitHub
   - Push your code

3. **Connect to Netlify**:
   - Go to Netlify
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: (leave empty or set to ".")
   - Deploy!

## Post-deployment Steps

1. **Update URLs**:
   - Replace `https://your-netlify-url.netlify.app/` in index.html with your actual Netlify URL
   - Test social media sharing

2. **Custom Domain** (optional):
   - Add custom domain in Netlify settings
   - Update URLs accordingly

3. **Test Features**:
   - [ ] Poems load correctly
   - [ ] Stanza counts display
   - [ ] Text-to-speech works
   - [ ] PDF export functions
   - [ ] Theme toggle works
   - [ ] Search/filter works
   - [ ] Mobile responsiveness
   - [ ] Social sharing

## Files to Remove for Production

These files are only needed for local development:
- `server.js`
- `package.json`
- `package-lock.json`
- `node_modules/` (if present)

## Important Notes

- The app is a static site - no server-side processing needed
- All functionality runs in the browser
- ES6 modules work fine on modern browsers
- Netlify handles HTTPS automatically
