import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const notifications = [
  { id: 1, title: 'FOMO risk detected', desc: 'Your trade frequency spiked 40% today.', time: '2h ago' },
  { id: 2, title: 'Achievement unlocked', desc: 'Five Disciplined Trades badge earned.', time: '1d ago' },
  { id: 3, title: 'Weekly insight ready', desc: 'Your Behavioral Health Score improved.', time: '2d ago' },
];

export default function NotificationMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-dark border border-white/10 hover:bg-white/10"
      >
        <Bell size={18} />
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            className="glass absolute right-0 z-40 mt-3 w-80 rounded-3xl p-3 shadow-soft"
          >
            <p className="px-2 py-1 text-xs uppercase tracking-wide text-muted">Notifications</p>
            {notifications.map((n) => (
              <div key={n.id} className="rounded-2xl p-3 hover:bg-white/5">
                <p className="text-sm font-medium">{n.title}</p>
                <p className="text-xs text-muted">{n.desc}</p>
                <p className="mt-1 text-[10px] text-muted/70">{n.time}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
