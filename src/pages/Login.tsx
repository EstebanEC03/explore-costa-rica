import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Invalid credentials. Please verify your email and password and try again.');
      return;
    }
    setError('');
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Tropical Background"
          className="w-full h-full object-cover scale-110 blur-sm brightness-95"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlMp4-Q2DL49Vo1L2XKg64GZMylFSRIQGiG4folQinjMN3VSmuIIvqgL-y13RocLCL47Y4f7E62m2eAhEQzF2vDYdvmwDlWjEOWms7FglNCoPstI9xRbjJkOsw7_hDhs6OUczzfL2dei8xmNvos0a6RMdQERTAAQ6DuitgIsxpXLJQDLs1Q7PXcDbthtD65bjQuIOf2vnpTPoF2mq8T7LVBHzj0IUkOjtq--qQ_r-ZghfswYzPt8liZ5UNlNcEwV5p_smyQsnFBpCg"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10"></div>
      </div>

      {/* Login Container */}
      <main className="relative z-10 w-full max-w-[460px]">
        <div className="glass-panel rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-10 md:p-12">
          {/* Branding */}
          <div className="flex flex-col items-center mb-10">
            <div className="bg-primary p-3 rounded-xl mb-4 shadow-lg">
              <span className="material-symbols-outlined text-on-primary text-3xl">nature_people</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tighter text-primary font-headline">Explore Costa Rica Tours</h1>
            <p className="text-on-surface-variant text-sm mt-1">Begin your curated journey</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-error-container/40 rounded-lg p-4 flex items-start gap-3 border border-error/10">
                <span className="material-symbols-outlined text-error text-xl">error</span>
                <p className="text-on-error-container text-xs font-medium leading-relaxed">{error}</p>
              </div>
            )}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 group-focus-within:text-primary transition-colors">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all text-on-surface placeholder:text-on-surface-variant/40"
                    id="email"
                    type="email"
                    placeholder="curator@pura-vida.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="password">Password</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 group-focus-within:text-primary transition-colors">lock</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all text-on-surface placeholder:text-on-surface-variant/40"
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/30 transition-all" type="checkbox" />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Remember me</span>
              </label>
              <a className="text-sm font-semibold text-secondary hover:underline underline-offset-4 decoration-secondary/30 transition-all" href="#">Forgot Password?</a>
            </div>

            <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300" type="submit">
              Sign In
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-on-surface/5 text-center">
            <p className="text-on-surface-variant text-sm">
              Don't have an account yet?
              <Link className="ml-1 font-bold text-primary hover:text-primary-container transition-colors" to="/register">Create an account</Link>
            </p>
          </div>
        </div>

        <footer className="mt-8 flex justify-center gap-6">
          <a className="text-[10px] uppercase tracking-widest font-bold text-on-primary/60 hover:text-on-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-[10px] uppercase tracking-widest font-bold text-on-primary/60 hover:text-on-primary transition-colors" href="#">Terms of Service</a>
        </footer>
      </main>
    </div>
  );
}
