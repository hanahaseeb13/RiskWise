import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import Button from '../components/Button';
import FloatingBlobs from '../components/FloatingBlobs';
import useAuthStore from '../store/useAuthStore';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data.email);
    navigate('/workspace');
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-4 text-light">
      <FloatingBlobs />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass relative z-10 w-full max-w-md rounded-card-lg p-8 shadow-soft"
      >
        <Link to="/" className="font-display text-lg font-bold">RiskWise</Link>
        <h1 className="mt-6 font-display text-3xl font-bold">Welcome back</h1>
        <p className="mt-1 text-sm text-muted">Log in to keep an eye on your trading behavior.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register('email', { required: 'Email is required' })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register('password', { required: 'Password is required' })}
          />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted">
              <input type="checkbox" className="rounded accent-accent" defaultChecked />
              Remember me
            </label>
            <a href="#" className="text-accent hover:underline">Forgot password?</a>
          </div>
          <Button type="submit" size="lg" className="mt-2 w-full">Log In</Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="text-accent hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
}
