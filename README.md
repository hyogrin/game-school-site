# Game School Site (Next.js + FastAPI)

This is the complete template for the "게임학교" website:
- Next.js 14 (App Router) + React + TypeScript + TailwindCSS
- FastAPI backend for records & player stats
- Ready for Vercel (frontend) and any container-friendly host (backend)

## Quick Start
```bash
# Frontend
cd game-school-site
pnpm install # or npm install
cp .env.local.example .env.local
pnpm dev # or npm run dev
# http://localhost:3000
```

```bash
# Backend
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload --port 8080
# http://localhost:8080/health
```

## Deploy (Frontend)
- Push to GitHub → Vercel "Import Git Repository"
- Set `NEXT_PUBLIC_API_BASE_URL` in Vercel Project → Settings → Environment Variables

## Deploy (Backend)
- Render / Railway / Fly.io / Cloud Run / Azure App Service with Dockerfile in /backend
- Restrict CORS to your Vercel/custom domain
