import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid, LineChart, Wallet, Brain, Sparkles, Map, Trophy, Settings, X,
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

function NavItems({ onClick }) {
  return (
    <nav className="flex flex-col gap-1">
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/workspace'}
          onClick={onClick}
          className={({ isActive }) =>
            clsx(
              'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
              isActive
                ? 'bg-accent text-darktext'
                : 'text-light/80 hover:bg-white/10'
            )
          }
        >
          <Icon size={18} />
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
      <aside className="sticky top-24 hidden h-fit w-64 shrink-0 rounded-card-lg bg-dark border border-white/10 p-4 lg:block">
        <NavItems />
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
              className="relative z-10 h-full w-72 bg-dark p-4"
            >
              <button onClick={closeSidebar} className="mb-4 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <X size={16} />
              </button>
              <NavItems onClick={closeSidebar} />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
