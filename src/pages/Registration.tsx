import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Registration() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): string | null => {
    if (!formData.name.trim()) return 'Please enter your full name.';
    if (!formData.email.trim()) return 'Please enter your email.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email address.';
    if (formData.password.length < 8) return 'Password must be at least 8 characters long.';
    if (formData.password !== formData.confirmPassword) return 'Passwords do not match.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    try {
      await register(formData);
      navigate('/', { replace: true });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to register. Please try again.';
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Tropical Background"
          className="w-full h-full object-cover scale-110 blur-sm brightness-95"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlMp4-Q2DL49Vo1L2XKg64GZMylFSRIQGiG4folQinjMN3VSmuIIvqgL-y13RocLCL47Y4f7E62m2eAhEQzF2vDYdvmwDlWjEOWms7FglNCoPstI9xRbjJkOsw7_hDhs6OUczzfL2dei8xmNvos0a6RMdQERTAAQ6DuitgIsxpXLJQDLs1Q7PXcDbthtD65bjQuIOf2vnpTPoF2mq8T7LVBHzj0IUkOjtq--qQ_r-ZghfswYzPt8liZ5UNlNcEwV5p_smyQsnFBpCg"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#012d1d]/20 via-transparent to-[#006399]/10"></div>
      </div>

      <main className="relative z-10 w-full max-w-[480px] px-6 py-12">
        <div className="flex flex-col items-center mb-10">
          <div className="bg-primary p-3 rounded-xl mb-4 shadow-lg flex items-center justify-center">
            <img src="/favicon.svg" alt="Explore Costa Rica Logo" className="w-8 h-8" />
          </div>
          <h1 className="font-headline text-3xl font-extrabold tracking-tighter text-primary dark:text-white mb-2">Explore Costa Rica Tours</h1>
          <p className="text-on-surface-variant dark:text-white font-medium">Begin your curated tropical journey</p>
        </div>

        <div className="glass-panel dark:!bg-white/70 dark:text-black rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 md:p-10">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
            {error && (
              <div className="bg-error-container/40 rounded-lg p-4 flex items-start gap-3 border border-error/10" role="alert">
                <span className="material-symbols-outlined text-error text-xl">error</span>
                <p className="text-on-error-container text-xs font-medium leading-relaxed">{error}</p>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-primary/80 dark:text-black px-1" htmlFor="full_name">Full Name</label>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 outline-none disabled:opacity-60"
                id="full_name"
                name="name"
                placeholder="Juan Costa"
                type="text"
                value={formData.name}
                onChange={handleChange}
                disabled={submitting}
                autoComplete="name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-primary/80 dark:text-black px-1" htmlFor="reg_email">Email</label>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 outline-none disabled:opacity-60"
                id="reg_email"
                name="email"
                type="email"
                placeholder="wanderer@puravida.com"
                value={formData.email}
                onChange={handleChange}
                disabled={submitting}
                autoComplete="email"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-primary/80 dark:text-black px-1" htmlFor="reg_password">Password</label>
              <div className="relative group">
                <input
                  className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 outline-none disabled:opacity-60"
                  id="reg_password"
                  name="password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={submitting}
                  autoComplete="new-password"
                  required
                />
                {formData.password.length >= 8 && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                )}
              </div>
              {formData.password.length > 0 && formData.password.length < 8 && (
                <span className="text-xs text-error px-1">Password must be at least 8 characters.</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-primary/80 dark:text-black px-1" htmlFor="confirm_password">Confirm Password</label>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 outline-none disabled:opacity-60"
                id="confirm_password"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={submitting}
                autoComplete="new-password"
                required
              />
              {formData.confirmPassword.length > 0 && formData.password !== formData.confirmPassword && (
                <span className="text-xs text-error px-1">Passwords do not match.</span>
              )}
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <button
                className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                type="submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  'Register'
                )}
              </button>
              <div className="text-center">
                <Link className="text-secondary dark:text-blue-600 font-semibold hover:underline transition-all text-sm" to="/login">Already have an account? Sign In</Link>
              </div>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-outline-variant/15 text-center">
            <p className="text-[12px] text-on-surface-variant dark:text-gray-900 leading-relaxed">
              By joining, you agree to our{' '}
              <a className="text-primary font-bold hover:text-secondary transition-colors" href="#">Terms and Conditions</a>{' '}
              and our{' '}
              <a className="text-primary font-bold hover:text-secondary transition-colors" href="#">Privacy Policy</a>.
              Your adventure is protected.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
