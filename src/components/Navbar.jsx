import { Menu, Search } from 'lucide-react';
import useUIStore from '../store/useUIStore';
import useTradeStore from '../store/useTradeStore';
import NotificationMenu from './NotificationMenu';
import useAuthStore from '../store/useAuthStore';

export default function Navbar() {
  const { toggleSidebar } = useUIStore();
  const cash = useTradeStore((s) => s.cash);
  const { user } = useAuthStore();

  return (
    <header className="sticky top-4 z-30 mb-6 flex items-center gap-3 rounded-card-lg glass px-4 py-3 shadow-soft">
      <button
        onClick={toggleSidebar}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-dark border border-white/10 lg:hidden"
      >
        <Menu size={18} />
      </button>

      <div className="hidden flex-1 items-center gap-2 rounded-2xl bg-dark/60 border border-white/10 px-4 py-2 sm:flex">
        <Search size={16} className="text-muted" />
        <input
          placeholder="Search assets…"
          className="w-full bg-transparent text-sm placeholder:text-muted focus:outline-none"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden rounded-2xl bg-dark border border-white/10 px-4 py-2 text-sm font-medium sm:block">
          Cash ₹{cash.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
        </div>
        <NotificationMenu />
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple font-display text-sm font-semibold">
          {(user?.name || 'T').slice(0, 1).toUpperCase()}
        </div>
      </div>
    </header>
  );
}
