import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';

const Input = forwardRef(function Input(
  { label, error, type = 'text', className, ...props },
  ref
) {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (show ? 'text' : 'password') : type;

  return (
    <label className="block w-full">
      {label && (
        <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
          {label}
        </span>
      )}
      <div className="relative">
        <input
          ref={ref}
          type={inputType}
          className={clsx(
            'w-full rounded-2xl bg-dark/60 border border-white/10 px-4 py-3 text-light placeholder:text-muted/60',
            'focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/50 transition',
            error && 'border-danger focus:ring-danger/60',
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-light"
            tabIndex={-1}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <span className="mt-1 block text-xs text-danger">{error}</span>}
    </label>
  );
});

export default Input;
