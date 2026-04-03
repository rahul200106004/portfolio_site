# Vercel Build Fix - TODO

- [x] Step 1: Created portfolio_site/backend/local_server.py with FastAPI server content (hidden from Vercel detector)
- [ ] Step 2: Remove old backend/server.py (git rm)
- [ ] Step 3: Commit and push: git add . && git commit -m "Fix Vercel FastAPI detection: rename backend/server.py to local_server.py" && git push
- [ ] Step 4: Redeploy: vercel --prod
- [ ] Step 5: Verify build succeeds in Vercel dashboard
