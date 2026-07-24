import { useMemo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Card({
  children,
  className,
  variant = 'dark',
  elevated = false,
  as = 'div',
  ...props
}) {
  const Comp = useMemo(
    () => (typeof as === 'string' ? motion[as] || motion.div : motion(as)),
    [as]
  );

  const variants = {
    dark: 'bg-[#1E1E1E] border border-white/[0.08]',
    light: 'bg-light text-darktext border border-black/5',
    glass: 'glass',
    flat: 'bg-transparent border border-white/[0.06]',
  };

  return (
    <Comp
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={clsx(
        'rounded-2xl p-6 transition-colors duration-200',
        elevated && 'shadow-soft',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
