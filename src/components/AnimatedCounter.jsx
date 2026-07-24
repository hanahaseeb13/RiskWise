import { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

export default function AnimatedCounter({ value = 0, prefix = '', suffix = '', decimals = 0 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals));
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.2, ease: 'easeOut' });
    return controls.stop;
  }, [value]);

  useEffect(() => {
    const unsub = rounded.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Number(v).toLocaleString('en-IN')}${suffix}`;
      }
    });
    return unsub;
  }, [rounded, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
