import AdminSidebar from '../components/layout/AdminSidebar';

const tours = [
  {
    id: '1',
    name: 'Cloud Forest Canopy Walk',
    location: 'Monteverde, Costa Rica',
    category: 'Adventure',
    price: 145,
    status: 'Active' as const,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKSY3PqOmgV7ojptINRFg8S1BGUsTpdkrOl0k5of4gVtNQhOrwCU4ZAzNlnWT4Xal7MzKbnh7vsK4Y18npVtnHl21Pza_9wNQ-C64rL7-61Y2cL7KLyMY8Uxu4SsV-h8g3KisrvGMOvvUbc-iM-eMfzFo501Ap0OekJhDWS2yR9LnK-o0GHtEHWJlAaXHCJx24I5_JYUQDCdAnltXoifxxFrAGzLoXBzjwtCJGtO_qChfT_4Lp7HU7NLU1rERRzhcpk20JMze0W1f0',
  },
  {
    id: '2',
    name: 'La Fortuna Waterfall Hike',
    location: 'Arenal Volcano Region',
    category: 'Eco-Tourism',
    price: 89,
    status: 'Active' as const,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQA1tFRm5DeYOdkRmG6O3gsMKXivIUWROBN2NF_CaSeUw2mNyDO_rBqRFm1-QCTqWsLR2SM1w94pB62HqAvoLoVrbaFdND8qqpKdmjVuqwLHaloehfaMHtxULGV0G-YF2RKHoIEAz0cbJkdteFpVWiW3xoXfmKplIyH7MbYbqybwK3f7Py0Awiel_6fXGmlG9a8fPGu6V_meGnV1Xb96Imr8w1CLjPVI9a4ye9BMzYk8scH3S0wkBKNuYjjWNIczKK_FchKwa9_K68',
  },
  {
    id: '3',
    name: 'Manuel Antonio Hidden Beaches',
    location: 'Quepos Coastline',
    category: 'Beach',
    price: 120,
    status: 'Draft' as const,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7fy1-OeX5h9iYiDmcaXgylohevZPQUCH12oClbhJsSmOJIFATxrrUbyTspiUq8L67t8O4g1waux40SnF97bMtzsWRTS664n5jViX2Tu6Txv_Sw3iCQ2KwSIxOnqQkiz_52eUzB2Ba36iKMvbjWxTOneg88RNgDdMYlAQC7zfwEzaRvPfxxC3Z2y2NRTjxV4l4TL0nygZqaNNUC8vg7WanSZaaHg0NchOLNgfN84TB8zypSRQI8pA6udatnOY3FzI89OvoS69VjVfx',
  },
  {
    id: '4',
    name: 'Sloth & Wildlife Safari',
    location: 'Tortuguero National Park',
    category: 'Eco-Tourism',
    price: 110,
    status: 'Active' as const,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4XZQn4_94qGgn6d6T9C_-JGQugcMXqh7R4Mh3wBenNRsrbgkbsouq53bNIUbmE60nTLgDAGY8XFmO2wM3Pe0GpY7XCl21ZO18Aic_jQjyLjESx4SV8r7ihLe7GuveD2b7kVRtEFajJFa0dP95pCoLyPnmgebxWppaAKIXu5gtQwsj8hmSKKUCM1Ri_XrFTp9jJVCNoOyOJ_i7I_ViEV3asjwA02n525U03Jev4y__NFMobMDmn4RjH5KL1oqfhNZU98xMpcKCmxE8',
  },
];

export default function ManageTours() {
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
            <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-secondary-container/80 transition-colors">
              <span className="material-symbols-outlined text-lg">download</span>
              Export CSV
            </button>
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Create New Tour
            </button>
          </div>
        </header>

        {/* Filters & Stats */}
        <section className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex items-center gap-6">
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Search tours by name..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Category</label>
              <select className="bg-surface-container-high border-none rounded-lg text-xs font-medium py-2 px-3 focus:ring-2 focus:ring-primary/20">
                <option>All Categories</option>
                <option>Adventure</option>
                <option>Eco-Tourism</option>
                <option>Beach</option>
                <option>Volcano</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Status</label>
              <select className="bg-surface-container-high border-none rounded-lg text-xs font-medium py-2 px-3 focus:ring-2 focus:ring-primary/20">
                <option>Active Only</option>
                <option>Archived</option>
                <option>Draft</option>
              </select>
            </div>
          </div>
          <div className="col-span-4 bg-tertiary-container p-6 rounded-xl shadow-sm flex items-center justify-between">
            <div>
              <p className="text-tertiary-fixed-dim text-xs font-bold uppercase tracking-widest mb-1">Live Inventory</p>
              <h3 className="text-2xl font-black text-on-tertiary-container">42 Active Tours</h3>
            </div>
            <div className="relative flex items-center justify-center w-12 h-12">
              <span className="absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-20 animate-ping"></span>
              <span className="material-symbols-outlined text-tertiary-fixed text-3xl">sensors</span>
            </div>
          </div>
        </section>

        {/* Table */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low text-on-surface-variant text-xs font-bold uppercase tracking-widest border-b border-outline-variant/10">
              <tr>
                <th className="px-8 py-5">Tour Name</th>
                <th className="px-6 py-5">Category</th>
                <th className="px-6 py-5 text-right">Price (USD)</th>
                <th className="px-6 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {tours.map((tour) => (
                <tr key={tour.id} className="hover:bg-surface-bright transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img className="w-12 h-12 rounded-lg object-cover shadow-sm" src={tour.imageUrl} alt={tour.name} />
                      <div>
                        <div className="font-bold text-on-surface group-hover:text-primary transition-colors">{tour.name}</div>
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
                      tour.status === 'Active'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${tour.status === 'Active' ? 'bg-emerald-500' : 'bg-outline'}`}></span>
                      {tour.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg text-secondary transition-colors" title="Edit">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-2 hover:bg-error-container/20 rounded-lg text-error transition-colors" title="Delete">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-8 py-4 bg-surface-container-low flex justify-between items-center text-xs font-medium text-on-surface-variant">
            <div>Showing <span className="font-bold text-on-surface">1 - 4</span> of 42 tours</div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container-highest disabled:opacity-50 transition-colors" disabled>Previous</button>
              <button className="px-3 py-1.5 rounded border border-outline-variant bg-primary text-on-primary font-bold">1</button>
              <button className="px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container-highest transition-colors">2</button>
              <button className="px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container-highest transition-colors">3</button>
              <button className="px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container-highest transition-colors">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
