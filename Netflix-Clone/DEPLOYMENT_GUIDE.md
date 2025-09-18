# GitHub Pages Deployment Guide

## Step-by-Step Instructions to Fix Deployment Issues

### 1. Repository Setup

Make sure your repository is:

- **Public** (GitHub Pages requires public repos for free accounts)
- Named exactly: `Netflix-Clone-2025`
- Located at: `https://github.com/WubshetAbate/Netflix-Clone-2025`

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Push Your Code

Make sure all your changes are pushed to the `main` branch:

```bash
git add .
git commit -m "Fix GitHub Pages deployment configuration"
git push origin main
```

### 4. Check GitHub Actions

1. Go to the **Actions** tab in your repository
2. Look for the "Deploy to GitHub Pages" workflow
3. Click on it to see if it's running or has failed
4. If it failed, check the error logs

### 5. Verify Deployment

- The workflow should create a `gh-pages` branch automatically
- Your site will be available at: `https://WubshetAbate.github.io/Netflix-Clone-2025/`
- It may take 5-10 minutes for the site to be accessible after deployment

### 6. Troubleshooting Common Issues

#### Issue: "This site can't be reached"

**Solutions:**

- Ensure repository is public
- Check that GitHub Pages is enabled with "GitHub Actions" as source
- Verify the workflow ran successfully
- Wait 5-10 minutes after deployment

#### Issue: Workflow fails

**Common causes:**

- Missing dependencies in package.json
- Build errors
- Incorrect file paths

#### Issue: 404 Error

**Solutions:**

- Check that the base path in vite.config.js matches your repository name
- Ensure the build output is in the `dist` folder
- Verify the homepage URL in package.json

### 7. Manual Deployment (Alternative)

If GitHub Actions doesn't work, you can deploy manually:

```bash
npm install -g gh-pages
npm run build
npx gh-pages -d dist
```

### 8. Check Your Site

Once deployed, your Netflix clone should be accessible at:
`https://WubshetAbate.github.io/Netflix-Clone-2025/`

## Current Configuration

- ✅ Vite config with correct base path
- ✅ Package.json with proper homepage URL
- ✅ GitHub Actions workflow with proper permissions
- ✅ Build process working locally

## Next Steps

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Check the Actions tab for deployment status
4. Wait for the site to be accessible
5. Test the live site
