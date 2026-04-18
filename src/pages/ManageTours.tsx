import { useState } from 'react';
import AdminSidebar from '../components/layout/AdminSidebar';
import { useTours } from '../hooks/useTours';
import { toursService } from '../services/toursService';

const PAGE_SIZE = 10;

export default function ManageTours() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);

  const { tours, total, totalPages, loading, error, refetch } = useTours({
    page,
    pageSize: PAGE_SIZE,
    search: search || undefined,
    category: category || undefined,
  });

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      await toursService.deleteTour(id);
      refetch();
    } catch (err) {
      alert('Failed to delete tour. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen">
      <AdminSidebar />
      <main className="ml-64 p-12 min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <nav className="flex text-xs text-on-surface-variant gap-2 mb-2 uppercase tracking-widest font-semibold">
              <span>Admin</span>
              <span>/</span>
              <span className="text-primary">Inventory</span>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary font-headline">Manage Tours</h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Create New Tour
            </button>
          </div>
        </header>

        <section className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex items-center gap-6">
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Search tours by name..."
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Category</label>
              <select
                className="bg-surface-container-high border-none rounded-lg text-xs font-medium py-2 px-3 focus:ring-2 focus:ring-primary/20"
                value={category}
                onChange={(e) => { setCategory(e.target.value); setPage(1); }}
              >
                <option value="">All Categories</option>
                <option value="Aventura">Aventura</option>
                <option value="Acuático">Acuático</option>
                <option value="Cultural">Cultural</option>
                <option value="Naturaleza">Naturaleza</option>
              </select>
            </div>
          </div>
          <div className="col-span-4 bg-tertiary-container p-6 rounded-xl shadow-sm flex items-center justify-between">
            <div>
              <p className="text-tertiary-fixed-dim text-xs font-bold uppercase tracking-widest mb-1">Live Inventory</p>
              <h3 className="text-2xl font-black text-on-tertiary-container">{total} Tours</h3>
            </div>
            <div className="relative flex items-center justify-center w-12 h-12">
              <span className="absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-20 animate-ping"></span>
              <span className="material-symbols-outlined text-tertiary-fixed text-3xl">sensors</span>
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
          <div className="py-16 bg-error-container/20 rounded-2xl text-center">
            <span className="material-symbols-outlined text-6xl text-error mb-4">error</span>
            <p className="text-on-surface-variant">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low text-on-surface-variant text-xs font-bold uppercase tracking-widest border-b border-outline-variant/10">
                <tr>
                  <th className="px-8 py-5">Tour Name</th>
                  <th className="px-6 py-5">Category</th>
                  <th className="px-6 py-5 text-right">Price (USD)</th>
                  <th className="px-6 py-5 text-center">Availability</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {tours.map((tour) => (
                  <tr key={tour.id} className="hover:bg-surface-bright transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <img className="w-12 h-12 rounded-lg object-cover shadow-sm" src={tour.imageUrl} alt={tour.title} />
                        <div>
                          <div className="font-bold text-on-surface group-hover:text-primary transition-colors">{tour.title}</div>
                          <div className="text-xs text-on-surface-variant">{tour.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold text-on-surface-variant">{tour.category}</span>
                    </td>
                    <td className="px-6 py-6 text-right font-medium text-on-surface">${tour.price.toFixed(2)}</td>
                    <td className="px-6 py-6 text-center">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        tour.availableSpots > 0
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-error-container text-on-error-container'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${tour.availableSpots > 0 ? 'bg-emerald-500' : 'bg-error'}`}></span>
                        {tour.availableSpots}/{tour.maxCapacity}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-surface-container-highest rounded-lg text-secondary transition-colors" title="Edit">
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(tour.id, tour.title)}
                          className="p-2 hover:bg-error-container/20 rounded-lg text-error transition-colors"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {tours.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-16 text-on-surface-variant">
                      No tours found. Try adjusting your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {totalPages > 1 && (
              <div className="px-8 py-4 bg-surface-container-low flex justify-between items-center text-xs font-medium text-on-surface-variant">
                <div>Showing <span className="font-bold text-on-surface">{tours.length}</span> of {total} tours</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container-highest disabled:opacity-50 transition-colors"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`px-3 py-1.5 rounded border border-outline-variant transition-colors ${
                        p === page ? 'bg-primary text-on-primary font-bold' : 'hover:bg-surface-container-highest'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container-highest disabled:opacity-50 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
