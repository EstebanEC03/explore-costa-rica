import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useTours } from '../hooks/useTours';
import { toursService } from '../services/toursService';
import type { TourCategory } from '../types/tour';

const PAGE_SIZE = 8;

export default function ToursList() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<TourCategory[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    toursService.getCategories()
      .then((res) => setCategories(res.data))
      .catch(() => setCategories([]));
  }, []);

  const { tours, total, totalPages, loading, error } = useTours({
    page,
    pageSize: PAGE_SIZE,
    search: debouncedSearch || undefined,
    category: category || undefined,
    location: location || undefined,
  });

  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setLocation('');
    setPage(1);
  };

  return (
    <div className="bg-background text-on-background">
      <Navbar />
      <main className="max-w-screen-2xl mx-auto px-8 pt-12 pb-24">
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4 font-headline">Curated Experiences</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Discover the heartbeat of the tropics. From volcanic ridges to hidden coastal reefs, find your path through the emerald soul of Costa Rica.
          </p>
        </header>

        <section className="mb-12 sticky top-20 z-40">
          <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex flex-col lg:flex-row items-center gap-4 border border-outline-variant/10">
            <div className="relative flex-grow w-full lg:w-auto">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full pl-12 pr-4 py-3 bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-on-surface"
                placeholder="Search destinations or activities..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="relative group min-w-[160px]">
                <select
                  className="appearance-none w-full bg-surface-container-high border-none rounded-xl py-3 px-4 pr-10 text-on-surface-variant font-medium cursor-pointer focus:ring-2 focus:ring-primary/20"
                  value={category}
                  onChange={(e) => { setCategory(e.target.value); setPage(1); }}
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name} ({cat.count})</option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
              </div>
              <div className="relative group min-w-[160px]">
                <select
                  className="appearance-none w-full bg-surface-container-high border-none rounded-xl py-3 px-4 pr-10 text-on-surface-variant font-medium cursor-pointer focus:ring-2 focus:ring-primary/20"
                  value={location}
                  onChange={(e) => { setLocation(e.target.value); setPage(1); }}
                >
                  <option value="">All Provinces</option>
                  <option value="San José">San José</option>
                  <option value="Alajuela">Alajuela</option>
                  <option value="Guanacaste">Guanacaste</option>
                  <option value="Puntarenas">Puntarenas</option>
                  <option value="Limón">Limón</option>
                  <option value="Heredia">Heredia</option>
                  <option value="Cartago">Cartago</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
              </div>
              <button
                onClick={clearFilters}
                className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">filter_alt_off</span>
                Clear
              </button>
            </div>
          </div>
        </section>

        {loading && (
          <div className="py-20 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
            <p className="text-on-surface-variant font-medium">Loading tours...</p>
          </div>
        )}

        {error && !loading && (
          <div className="py-16 flex flex-col items-center bg-error-container/20 rounded-2xl">
            <span className="material-symbols-outlined text-6xl text-error mb-4">error</span>
            <h4 className="text-2xl font-bold text-error font-headline mb-2">Something went wrong</h4>
            <p className="text-on-surface-variant">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {tours.map((tour) => (
                <Link to={`/tours/${tour.id}`} key={tour.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="h-64 overflow-hidden relative">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={tour.imageUrl} alt={tour.title} />
                    {tour.availableSpots > 0 && (
                      <div className="absolute top-4 left-4 bg-tertiary-container/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                        <div className="w-2 h-2 bg-tertiary-fixed rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-on-tertiary-container uppercase tracking-widest">{tour.availableSpots} spots</span>
                      </div>
                    )}
                    {tour.availableSpots === 0 && (
                      <div className="absolute top-4 left-4 bg-error-container/80 backdrop-blur-md px-3 py-1 rounded-full">
                        <span className="text-xs font-bold text-on-error-container uppercase tracking-widest">Sold Out</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary font-headline">{tour.title}</h3>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-sm font-bold">{tour.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span>{tour.duration}</span>
                      <span className="mx-1">·</span>
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span className="truncate">{tour.location}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Starting at</p>
                        <p className="text-xl font-extrabold text-primary">${tour.price.toFixed(2)}</p>
                      </div>
                      <span className="bg-primary text-on-primary p-3 rounded-full group-hover:bg-primary-container transition-colors">
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              {tours.length === 0 && (
                <div className="col-span-full py-16 flex flex-col items-center">
                  <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">sentiment_dissatisfied</span>
                  <h4 className="text-2xl font-bold text-primary font-headline">No tours found</h4>
                  <p className="text-on-surface-variant">Try adjusting your filters to discover more of Costa Rica.</p>
                  <button className="mt-6 text-secondary font-bold underline decoration-secondary/30 hover:decoration-secondary" onClick={clearFilters}>
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            {tours.length > 0 && totalPages > 1 && (
              <div className="mt-20 flex flex-col items-center">
                <p className="text-sm text-on-surface-variant mb-6 font-medium tracking-wide">
                  Showing {tours.length} of {total} experiences
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-12 h-12 rounded-full font-bold transition-colors ${
                          p === page ? 'bg-primary text-on-primary' : 'hover:bg-surface-container'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
