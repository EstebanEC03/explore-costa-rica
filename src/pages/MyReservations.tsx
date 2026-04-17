import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const reservations = [
  {
    id: '1',
    title: 'Monteverde Cloud Forest Night Walk',
    date: 'October 24, 2024',
    guests: '2 Adults',
    status: 'upcoming' as const,
    confirmed: true,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHU3M0FEjfi2Y0qlnMcnShLD5JfDLDL-Irq-HTC2zcjbK6Rn7zTY1O2BqkoH5wCMbnrP4-nsr6BpeEqtvyOYq-YLMGU3dENgGZWFQJthE-CaxuUBtsDsq0C9E7HlyCSfY0XZkVs71vO_YdDe_bdnMxft8u9_Txecec6FNBbZxb5oj0EroyAsoxR7gZBxIxbc_6U4g6IyMWLq8O8aGSe4VwvCev8EjSuLXT_8tmLYcCsUuqeO-HPD7Qt1cn6DNIz5mW13uojlaljWtO',
  },
  {
    id: '2',
    title: 'Manuel Antonio Coastal Hike & Beach Day',
    date: 'August 12, 2024',
    guests: '4 Adults',
    status: 'completed' as const,
    confirmed: false,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_yd36DDhlgKXqAohD6_AXLq9kmSqrLxdKPWH_q_YdzDV0CI73sQw-kt0weTo2HgNeOnlWDxzHzq9xz7XCnEIJXEXirC2KUdMUF7rQ_QuBfCb3bQUOnCEJrUgHi4hLjD7Lghph0_dX44m_Z-mKQN1x_W2AR3SPDuVOKzCRD2tbvKtwyWJdckC1_TKa0bqZaXlJFh9wpN-SnKIywUVMHWdrCGwxuaG8HVR27KJQY_GnbnwUB9St50Jvuvoj4gJ2-_lWBvLDG01JBytE',
  },
  {
    id: '3',
    title: 'Arenal Volcano Thermal Springs & Spa',
    date: 'September 05, 2024',
    guests: '',
    status: 'cancelled' as const,
    confirmed: false,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQMQCKkxFNpXK0IW6PqDt1z6yFmjAO9q9HPgAI8gVEqtGcG_nxzjaMndY4Kf28vKAM4CX_0kJz7vBuh0mzvPlfGyFGOqxzQqeEYHIxQ-GZeT4IvtbP0i5ETnK_FurAaj4b6-IwbBvuOMoaqD0c_xzoxQ9_bQjOfdlS3qgHdVZCEdwpsI7RG7U9H0kFuzHIU0lwoFdJtBMq-DtK06XQGTYmQph62NWQse_ehKsTWXkjbPLMaSvG0ipXCq9YPIj6-QyeTzEdFijSq7UO',
  },
];

export default function MyReservations() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-12">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4 font-headline">My Reservations</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Welcome back, explorer. Here you can find all your upcoming adventures and past memories across the lush landscapes of Costa Rica.
          </p>
        </section>

        <div className="space-y-6">
          {reservations.map((res) => (
            <div
              key={res.id}
              className={`group p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center transition-all duration-300 ${
                res.status === 'cancelled'
                  ? 'bg-surface-container-lowest/60 border border-outline-variant/20'
                  : 'bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]'
              }`}
            >
              <div className={`relative w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0 ${
                res.status === 'completed' ? 'grayscale opacity-80' : res.status === 'cancelled' ? 'grayscale opacity-40' : ''
              }`}>
                <img alt={res.title} className="w-full h-full object-cover" src={res.imageUrl} />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  {res.status === 'upcoming' && (
                    <>
                      <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Upcoming</span>
                      {res.confirmed && (
                        <div className="flex items-center gap-1.5 bg-tertiary-container/10 px-2 py-1 rounded">
                          <span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                          <span className="text-tertiary text-xs font-semibold">Confirmed</span>
                        </div>
                      )}
                    </>
                  )}
                  {res.status === 'completed' && (
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Completed</span>
                  )}
                  {res.status === 'cancelled' && (
                    <span className="bg-error-container text-on-error-container text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Cancelled</span>
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-1 font-headline ${res.status === 'cancelled' ? 'text-on-surface/50' : 'text-primary'}`}>{res.title}</h3>
                <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-sm ${res.status === 'cancelled' ? 'text-on-surface-variant/50' : 'text-on-surface-variant'}`}>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    {res.date}
                  </span>
                  {res.guests && (
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">group</span>
                      {res.guests}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-outline-variant/10 flex md:flex-col items-center gap-4">
                {res.status === 'upcoming' && (
                  <Link to={`/tours/${res.id}`} className="w-full md:w-auto text-center px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-semibold text-sm hover:scale-[1.02] active:scale-95 transition-transform">
                    View Details
                  </Link>
                )}
                {res.status === 'completed' && (
                  <>
                    <a className="text-secondary font-semibold text-sm hover:underline" href="#">View Receipt</a>
                    <Link to="/tours" className="w-full md:w-auto text-center px-6 py-2.5 bg-secondary-container text-on-secondary-container rounded-full font-semibold text-sm hover:bg-secondary hover:text-on-secondary transition-colors">
                      Rebook Tour
                    </Link>
                  </>
                )}
                {res.status === 'cancelled' && (
                  <span className="text-xs italic text-on-surface-variant">Refunded on Sept 06</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
