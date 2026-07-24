import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid, LineChart, Wallet, Brain, Sparkles, Map, Trophy, Settings, X, ShieldHalf,
} from 'lucide-react';
import useUIStore from '../store/useUIStore';
import clsx from 'clsx';

const links = [
  { to: '/workspace', label: 'Workspace', icon: LayoutGrid },
  { to: '/workspace/market', label: 'Market', icon: LineChart },
  { to: '/workspace/portfolio', label: 'Portfolio', icon: Wallet },
  { to: '/behavior', label: 'Behavior', icon: Brain },
  { to: '/insights', label: 'Insights', icon: Sparkles },
  { to: '/journey', label: 'Journey', icon: Map },
  { to: '/achievements', label: 'Achievements', icon: Trophy },
  { to: '/settings', label: 'Settings', icon: Settings },
];

function Brand() {
  return (
    <div className="flex items-center gap-2 px-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-darktext">
        <ShieldHalf size={16} strokeWidth={2.5} />
      </div>
      <span className="font-display text-base font-semibold tracking-tight">RiskWise</span>
    </div>
  );
}

function NavItems({ onClick }) {
  return (
    <nav className="flex flex-col gap-0.5">
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/workspace'}
          onClick={onClick}
          className={({ isActive }) =>
            clsx(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              isActive
                ? 'bg-white/[0.08] text-accent'
                : 'text-light/60 hover:bg-white/[0.05] hover:text-light/90'
            )
          }
        >
          <Icon size={17} strokeWidth={2} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function Sidebar() {
  const { sidebarOpen, closeSidebar } = useUIStore();
  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-white/[0.08] bg-[#161616] px-3 py-6 lg:flex">
        <Brand />
        <div className="mt-8">
          <NavItems />
        </div>
      </aside>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="absolute inset-0 bg-black/60" onClick={closeSidebar} />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative z-10 flex h-full w-72 flex-col border-r border-white/[0.08] bg-[#161616] px-3 py-6"
            >
              <div className="flex items-center justify-between px-2">
                <Brand />
                <button onClick={closeSidebar} className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-light/70">
                  <X size={15} />
                </button>
              </div>
              <div className="mt-8">
                <NavItems onClick={closeSidebar} />
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
