import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/70 backdrop-blur-xl shadow-ambient">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-primary font-headline">
          Explore Costa Rica Tours
        </Link>
        <div className="hidden md:flex items-center gap-10">
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-primary hover:bg-surface-container-highest transition-colors flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <Link to="/login" className="hidden md:block px-5 py-2 text-sm font-semibold text-primary hover:bg-surface-container-highest transition-all rounded-full">
            Sign In
          </Link>
          <Link to="/register" className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-95 active:scale-90 transition-transform">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
