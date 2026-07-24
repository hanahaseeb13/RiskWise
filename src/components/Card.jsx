import { useMemo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Card({
  children,
  className,
  variant = 'dark',
  hover = true,
  as = 'div',
  ...props
}) {
  const Comp = useMemo(
    () => (typeof as === 'string' ? motion[as] || motion.div : motion(as)),
    [as]
  );
  const variants = {
    dark: 'bg-dark border border-white/10',
    light: 'bg-light text-darktext border border-black/5',
    glass: 'glass',
  };
  return (
    <Comp
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={hover ? { y: -4 } : undefined}
      className={clsx(
        'rounded-card-lg p-6 shadow-soft',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
