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
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-white/[0.08] bg-[#161616]/95 px-5 py-3.5 backdrop-blur sm:px-8">
      <button
        onClick={toggleSidebar}
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-light/80 lg:hidden"
      >
        <Menu size={17} />
      </button>

      <div className="hidden flex-1 max-w-sm items-center gap-2 rounded-lg bg-white/[0.05] border border-white/[0.06] px-3.5 py-2 sm:flex">
        <Search size={15} className="text-muted" />
        <input
          placeholder="Search assets…"
          className="w-full bg-transparent text-sm placeholder:text-muted focus:outline-none"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden rounded-lg border border-white/[0.08] px-3.5 py-2 text-sm font-medium text-light/90 sm:block">
          Cash&nbsp;<span className="text-teal">₹{cash.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
        </div>
        <NotificationMenu />
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple font-display text-sm font-semibold">
          {(user?.name || 'T').slice(0, 1).toUpperCase()}
        </div>
      </div>
    </header>
  );
}
