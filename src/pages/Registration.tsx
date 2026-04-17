import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Registration() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
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
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-primary/80 dark:text-black px-1" htmlFor="full_name">Full Name</label>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 outline-none"
                id="full_name"
                name="name"
                placeholder="Juan Costa"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-primary/80 dark:text-black px-1" htmlFor="reg_email">Email</label>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 outline-none"
                id="reg_email"
                name="email"
                type="email"
                placeholder="wanderer@puravida.com"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="flex items-center gap-1.5 px-1 mt-1">
                <span className="material-symbols-outlined text-[16px] text-secondary">info</span>
                <span className="text-xs text-secondary font-medium italic">Please enter a valid travel contact email.</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-primary/80 dark:text-black px-1" htmlFor="reg_password">Password</label>
              <div className="relative group">
                <input
                  className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 outline-none"
                  id="reg_password"
                  name="password"
                  type="password"
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                {formData.password.length >= 8 && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                )}
              </div>
              {formData.password.length >= 8 && (
                <div className="flex items-center gap-1.5 px-1 mt-1">
                  <span className="text-xs text-on-surface-variant">Strong security detected.</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-primary/80 dark:text-black px-1" htmlFor="confirm_password">Confirm Password</label>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 outline-none"
                id="confirm_password"
                name="confirmPassword"
                type="password"
                placeholder="••••••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95" type="submit">
                Register
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

        <div className="mt-12 flex justify-center items-center gap-4 opacity-60">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
            <span className="material-symbols-outlined text-[18px]">eco</span>
            Sustainability First
          </div>
          <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            Secure Access
          </div>
        </div>
      </main>

      <footer className="w-full mt-auto bg-emerald-50 py-8 px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-bold text-emerald-900 font-headline">Explore Costa Rica Tours</div>
          <div className="flex gap-8">
            <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Privacy Policy</a>
            <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Terms of Service</a>
            <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Travel Insurance</a>
          </div>
          <div className="text-emerald-700/60 text-sm">&copy; 2024 Explore Costa Rica Tours. Pura Vida.</div>
        </div>
      </footer>
    </div>
  );
}
