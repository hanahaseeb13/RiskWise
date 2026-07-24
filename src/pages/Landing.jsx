import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, ShieldCheck, TrendingUp, Sparkles, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import FloatingBlobs from '../components/FloatingBlobs';

const features = [
  {
    icon: Brain,
    title: 'Behavioral Risk Engine',
    desc: 'AI reads your trading patterns to surface FOMO, loss aversion and overconfidence before they cost you.',
  },
  {
    icon: ShieldCheck,
    title: 'Gentle Interventions',
    desc: 'Real-time nudges that interrupt impulsive trades without getting in the way of good decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Intelligence',
    desc: 'Track growth, allocation and risk trend side by side with your actual holdings.',
  },
  {
    icon: Sparkles,
    title: 'Journey & Achievements',
    desc: 'A behavioral health score that rewards discipline, not just returns.',
  },
];

const steps = [
  { title: 'Connect your trades', desc: 'Link your workspace and let RiskWise observe your patterns.' },
  { title: 'Get behavioral scoring', desc: 'Every session is scored across FOMO, discipline and confidence.' },
  { title: 'Act on gentle nudges', desc: 'Interventions arrive exactly when a decision looks impulsive.' },
  { title: 'Track your growth', desc: 'Watch your Behavioral Health Score climb over weeks, not days.' },
];

const testimonials = [
  { name: 'Ananya R.', role: 'Swing Trader, Bengaluru', quote: 'The FOMO warning has saved me from at least four bad entries this quarter.' },
  { name: 'Karthik M.', role: 'F&O Trader, Mumbai', quote: 'Seeing my risk score next to my P&L changed how I size positions.' },
  { name: 'Divya S.', role: 'Long-term Investor, Pune', quote: 'Journey and achievements make discipline feel like progress, not punishment.' },
];

const faqs = [
  { q: 'Is RiskWise a broker?', a: 'No. RiskWise is a behavioral analytics layer that sits alongside your existing trading workspace.' },
  { q: 'How is my risk score calculated?', a: 'We use SHAP-based explainability over trade frequency, leverage changes and loss streaks.' },
  { q: 'Can I dismiss an intervention?', a: 'Yes — interventions are gentle nudges, not blockers. You stay in control of every trade.' },
];

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className="w-full rounded-3xl bg-dark border border-white/10 p-5 text-left"
    >
      <div className="flex items-center justify-between">
        <span className="font-display font-semibold">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={18} />
        </motion.span>
      </div>
      {open && <p className="mt-3 text-sm text-muted">{a}</p>}
    </button>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-bg text-light">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl font-bold">RiskWise</span>
        <nav className="hidden items-center gap-8 text-sm text-light/80 md:flex">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-light/80 hover:text-light">Log in</Link>
          <Button as={Link} to="/signup" size="sm">Sign Up</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-10">
        <FloatingBlobs />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-bold leading-tight sm:text-7xl"
          >
            Trade sharper. <span className="text-gradient">Trade aware.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg text-light/80"
          >
            RiskWise reads the behavior behind every trade — FOMO, overconfidence, loss aversion —
            and steps in with gentle, well-timed interventions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Button as={Link} to="/signup" size="lg">Start Free</Button>
            <Button as={Link} to="/login" size="lg" variant="outline">Log in</Button>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { label: 'Risk Score Tracked', value: '24/7' },
            { label: 'Behavioral Factors', value: '12+' },
            { label: 'Avg. Discipline Gain', value: '+38%' },
          ].map((s) => (
            <Card key={s.label} variant="glass" className="text-center">
              <p className="font-display text-3xl font-bold text-accent">{s.value}</p>
              <p className="mt-1 text-sm text-light/70">{s.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold">Built for the trader inside your trades</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <Card key={title}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold">How it works</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <Card key={s.title} variant="light" className="text-darktext">
                <span className="font-display text-3xl font-bold text-purple">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-darktext/70">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold">Traders trust their patterns here</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} variant="glass">
                <p className="text-sm text-light/90">“{t.quote}”</p>
                <p className="mt-4 font-display font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl font-bold text-center">Frequently asked</h2>
          <div className="mt-8 flex flex-col gap-3">
            {faqs.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display font-semibold">RiskWise</span>
          <p className="text-sm text-light/60">© 2026 RiskWise. Trade aware.</p>
        </div>
      </footer>
    </div>
  );
}
