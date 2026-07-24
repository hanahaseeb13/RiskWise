import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import Button from '../components/Button';
import FloatingBlobs from '../components/FloatingBlobs';
import useAuthStore from '../store/useAuthStore';

export default function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const signup = useAuthStore((s) => s.signup);
  const navigate = useNavigate();
  const password = watch('password');

  const onSubmit = (data) => {
    signup(data.name, data.email);
    navigate('/workspace');
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-4 py-10 text-light">
      <FloatingBlobs />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass relative z-10 w-full max-w-md rounded-card-lg p-8 shadow-soft"
      >
        <Link to="/" className="font-display text-lg font-bold">RiskWise</Link>
        <h1 className="mt-6 font-display text-3xl font-bold">Create your account</h1>
        <p className="mt-1 text-sm text-muted">Start understanding the behavior behind your trades.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-4">
          <Input
            label="Name"
            placeholder="Your full name"
            error={errors.name?.message}
            {...register('name', { required: 'Name is required' })}
          />
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
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'At least 6 characters' },
            })}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            error={errors.confirm?.message}
            {...register('confirm', {
              required: 'Please confirm your password',
              validate: (v) => v === password || 'Passwords do not match',
            })}
          />
          <Button type="submit" size="lg" className="mt-2 w-full">Create Account</Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-accent hover:underline">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
}
