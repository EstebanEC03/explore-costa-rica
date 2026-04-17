import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', path: '/admin' },
  { icon: 'calendar_month', label: 'Bookings', path: '#' },
  { icon: 'map', label: 'Tour Inventory', path: '/admin/tours' },
  { icon: 'group', label: 'Customer CRM', path: '#' },
  { icon: 'insights', label: 'Analytics', path: '#' },
  { icon: 'settings', label: 'Settings', path: '#' },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-6 shadow-2xl z-50 transition-colors duration-300 border-r border-outline-variant/20">
      <div className="px-6 mb-10">
        <h1 className="text-lg font-black text-primary tracking-widest uppercase font-headline">Admin Central</h1>
        <p className="text-xs text-on-surface-variant mt-1">Lush Curator Mode</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = item.path !== '#' && location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-4 mb-6">
        <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-[0.98] transition-transform">
          <span className="material-symbols-outlined text-sm">add</span>
          New Tour
        </button>
      </div>
      <div className="mt-auto border-t border-outline-variant/20 pt-4 space-y-1">
        <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="text-sm font-medium">Help Center</span>
        </a>
        <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-lg mx-2 px-4 py-3 flex items-center gap-3 transition-all" href="#">
          <span className="material-symbols-outlined">logout</span>
          <span className="text-sm font-medium">Logout</span>
        </a>
      </div>
    </aside>
  );
}
