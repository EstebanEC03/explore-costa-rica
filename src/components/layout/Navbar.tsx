import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-emerald-900 font-headline">
          Explore Costa Rica Tours
        </Link>
        <div className="hidden md:flex items-center gap-10">
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden md:block px-5 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-50/50 transition-all rounded-full">
            Sign In
          </Link>
          <Link to="/register" className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-white text-sm font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-95 active:scale-90 transition-transform">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
