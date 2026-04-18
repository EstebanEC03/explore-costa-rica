import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú al hacer clic afuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/70 backdrop-blur-xl shadow-ambient">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-primary font-headline">
          Explore Costa Rica Tours
        </Link>
        <div className="hidden md:flex items-center gap-10"></div>
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

          {isAuthenticated && user ? (
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((open) => !open)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-surface-container-highest transition-colors"
              >
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="hidden md:block text-sm font-semibold text-primary">{user.name.split(' ')[0]}</span>
                <span className="material-symbols-outlined text-sm text-primary">expand_more</span>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/20 overflow-hidden">
                  <div className="px-4 py-3 border-b border-outline-variant/20">
                    <p className="text-sm font-bold text-on-surface">{user.name}</p>
                    <p className="text-xs text-on-surface-variant truncate">{user.email}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/my-reservations"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">confirmation_number</span>
                      My Reservations
                    </Link>
                    <Link
                      to="/notifications"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">notifications</span>
                      Notifications
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high transition-colors"
                      >
                        <span className="material-symbols-outlined text-lg">dashboard</span>
                        Admin Dashboard
                      </Link>
                    )}
                  </div>
                  <div className="border-t border-outline-variant/20 py-1">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-error hover:bg-error-container/20 transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">logout</span>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hidden md:block px-5 py-2 text-sm font-semibold text-primary hover:bg-surface-container-highest transition-all rounded-full">
                Sign In
              </Link>
              <Link to="/register" className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-95 active:scale-90 transition-transform">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
