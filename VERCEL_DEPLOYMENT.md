# Vercel Deployment Guide

## Prerequisites
- Vercel account (create at https://vercel.com)
- Git repository pushed to GitHub (already done ✓)
- Vercel CLI installed (✓ done)

## Environment Variables
Before deploying, set up these environment variables in Vercel dashboard:

1. Go to your Vercel project settings
2. Add these variables:
   - `REACT_APP_API_URL`: Your API endpoint (can be set per environment)
   - `BACKEND_URL`: URL to your Python FastAPI backend (for serverless functions)

## Deployment Steps

### Option 1: Using Vercel CLI (Recommended)

```powershell
# Navigate to project directory
cd c:\Users\prach\OneDrive\Documents\portfolio\portfolio_site

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### Option 2: Using GitHub Integration (Easiest)

1. Go to https://vercel.com
2. Click "New Project"
3. Connect your GitHub account
4. Select the `portfolio_site` repository
5. Vercel will auto-detect your settings
6. Add any environment variables needed
7. Click "Deploy"

## Project Structure Expected by Vercel
```
portfolio_site/
├── vercel.json          (✓ created)
├── .vercelignore        (✓ created)
├── api/                 (✓ created - serverless functions)
│   ├── health.js
│   └── [...path].js
├── frontend/
│   ├── package.json
│   ├── public/
│   ├── src/
│   └── (build script)
└── backend/             (Python backend - for reference)
```

## Important Notes

### Frontend
- Build command: `cd frontend && npm install && npm run build`
- Output directory: `frontend/build`
- Vercel serves this automatically

### Backend API
- Your FastAPI backend needs to be deployed separately (options below)
- Vercel functions forward requests to your backend
- Configure `BACKEND_URL` environment variable

### Backend Deployment Options

1. **Render.com** (Free tier available)
   - Push backend/ folder to GitHub
   - Connect to Render.com
   - Set Python environment

2. **Railway.app**
   - Deploy Python app easily
   - Free tier available

3. **Heroku** (Paid, but reliable)
   - Push to Heroku Git
   - Configure environment variables

4. **AWS Lambda + API Gateway**
   - More complex setup
   - Scales automatically

5. **DigitalOcean App Platform**
   - Simple deployment
   - Good for long-running services

## Verify Deployment

After deployment:
1. Visit your Vercel URL (e.g., https://your-project.vercel.app)
2. Check API health: https://your-project.vercel.app/api/health
3. Test API routes: Configure `REACT_APP_API_URL` to point to your backend

## Common Issues

### 404 on refresh
- Solved by vercel.json rewrites (already configured ✓)

### API calls failing
- Check `BACKEND_URL` environment variable
- Ensure backend is deployed and running
- Check CORS settings on FastAPI backend

### Build failures
- Check frontend/package.json for missing dependencies
- Ensure Node version compatibility
- Check build logs in Vercel dashboard

## Next Steps

1. Deploy frontend to Vercel (using CLI or GitHub integration)
2. Deploy FastAPI backend to Render.com, Railway, or similar
3. Configure `BACKEND_URL` environment variable in Vercel
4. Test the connection between frontend and backend
5. Monitor logs in Vercel dashboard for any errors
