# RiskWise

AI-powered Behavioral Trading Risk Analysis platform — premium fintech SaaS frontend.

## Stack
React 19 · Vite · Tailwind CSS · React Router DOM · Framer Motion · Zustand · Axios · React Hook Form · Recharts · Lucide React · clsx

## Getting started
```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

## Pages
Landing, Login, Signup, Workspace (+ Market, Portfolio), Behavior, AI Intervention (modal), Insights, Journey, Achievements, Settings.

## Notes
- All data is mocked in `src/mock/` — no backend required.
- State is managed with Zustand stores in `src/store/`.
- Placing a large BUY order (qty > 15) on the Workspace page triggers the AI Intervention modal, simulating a behavioral nudge.
