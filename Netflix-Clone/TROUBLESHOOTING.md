# 🚨 DEPLOYMENT TROUBLESHOOTING CHECKLIST

## Step 1: Check GitHub Actions
1. Go to: `https://github.com/WubshetAbate/Netflix-Clone-2025`
2. Click **Actions** tab
3. Look for "Deploy to GitHub Pages" workflow
4. **If you see NO workflows:** GitHub Actions might be disabled
5. **If workflow failed:** Check the error logs

## Step 2: Verify Repository Settings
1. Go to **Settings** → **Pages**
2. **Source should be:** "Deploy from a branch" → "gh-pages" branch
3. **OR:** "GitHub Actions" (if using the new workflow)

## Step 3: Check Repository Visibility
1. Go to **Settings** → **General**
2. Scroll to "Danger Zone"
3. Make sure repository is **Public** (not Private)

## Step 4: Manual Deployment (If Actions Fail)
Run these commands in your project directory:
```bash
npm install -g gh-pages
npm run build
npx gh-pages -d dist
```

## Step 5: Check Branch Structure
After manual deployment, you should see:
- `main` branch (your code)
- `gh-pages` branch (deployed files)

## Step 6: Verify Site URL
Your site should be at:
`https://WubshetAbate.github.io/Netflix-Clone-2025/`

## Common Issues & Solutions:

### Issue: "No workflows found"
**Solution:** Enable GitHub Actions in repository settings

### Issue: "Workflow failed"
**Solution:** Check error logs, usually missing dependencies

### Issue: "404 Not Found"
**Solution:** Wrong base path or Pages not enabled

### Issue: "Repository not found"
**Solution:** Check repository name and visibility

## Quick Fix Commands:
```bash
# Push updated workflow
git add .
git commit -m "Update deployment workflow"
git push origin main

# Manual deploy if needed
npm run build
npx gh-pages -d dist
```
