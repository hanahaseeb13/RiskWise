import { useMemo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const variants = {
  primary: 'bg-accent text-darktext hover:shadow-glow',
  dark: 'bg-dark text-light border border-white/10 hover:bg-white/10',
  outline: 'bg-transparent border border-white/20 text-light hover:bg-white/10',
  danger: 'bg-danger text-white hover:brightness-110',
  purple: 'bg-purple text-white hover:brightness-110',
  ghost: 'bg-transparent text-muted hover:text-light',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-sm rounded-2xl',
  lg: 'px-8 py-4 text-base rounded-2xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as = 'button',
  ...props
}) {
  // `as` can be a plain HTML tag string ('button', 'a') or a component (e.g. React Router's Link).
  // motion['button'] works via framer-motion's string-keyed proxy, but motion[SomeComponent]
  // does not — components need to be wrapped with motion(SomeComponent) instead.
  const Comp = useMemo(
    () => (typeof as === 'string' ? motion[as] || motion.button : motion(as)),
    [as]
  );
  return (
    <Comp
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={clsx(
        'font-display font-semibold inline-flex items-center justify-center gap-2 transition-shadow',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
