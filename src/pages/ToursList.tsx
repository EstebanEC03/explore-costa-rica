import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const toursData = [
  { id: '1', title: 'Arenal Hanging Bridges', rating: 4.9, duration: '4 Hours', price: 85, available: true, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz8cq1zW-nkV5FV0zkPyAPqr3UwjfrZmeubSkpibUml9kIB7kcrD591IotOEN4LBN9Mf-9_UyMXt9uhOXDZZsucPyn1fZcwAOfSP_CywcUFFispq9Wu-fy9dyoyAuN2c9nZH-3eRzviTrlYMl5zxhifmeY0A6sYgm3NBiLccRWaxPEVWQANbSk-CODKSqJiOAGFjAONwOWiz7PynCoJ5c6Lvdg1EgQjhJZX8WGoLy0DhCs9jcxnSQkiZR2cQin2HE605mp9CsJzTTu' },
  { id: '2', title: 'Manuel Antonio Wildlife', rating: 4.8, duration: '6 Hours', price: 110, available: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB34hjvmktMkGFOEGGfE5Vq3_bNtjBdeGQOu-nMH7lPuVDVW1TD9q77Uz1BFujXm6uz9qOqegyyAKfeIZHBp5dFlGmIS6XUsd4JrWNFe_fg0TOyIIvvonnqVziPt6O_RACifMWBSKHx3aqHyb-jsinNlToMkTCXm_NV7xnsDnj7g4SezI4q9ih1bsg-JDfqIlOjoaOKE1bbME0hK4ZoBo_bJ1bGtvgYzlZ0wjNce7p7jmz0JmvtgRhqtnUm56xq6s3IPGpSeTOSpZlE' },
  { id: '3', title: 'Santa Teresa Surf Safari', rating: 5.0, duration: 'Full Day', price: 150, available: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9J86-T_7__a0AMBN5E8gOjaPZsG012ybohh5PZ5WTiAaLOA8AR_xR5VyjencnufngyGHgrtIfcuIcD7gba-zQ_K3_zoQxglrwmJbcLPuQxniHiWUMhKIxDhrNhG2aV_CIDouf95KFfZWu2a7OQhs042mYDPhjiAHKLTk7fZPQKQhy-URSm3nB1KrpBTnb4akMaODptmNl63UPDM0yWITJ2cQixx1AF_Mj1NLst_HdKNmV7KEbGPQC5VjDEWFyS7Q8lCOrroup7gwS' },
  { id: '4', title: 'Pacuare White Water', rating: 4.9, duration: '8 Hours', price: 195, available: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMV7As4OEig6Wa1aA4hl_oDcobQLzxyGmkR4OneoF_rkEcPOZrN7ZFo9BINoX4UdXQc_uet22uSPEj8MXKL_sHLdx4z4QJsdlagH4DFDBKfSbkDaSf8BS_W_y1-CGQCPvCoPZe-9xOWAGXmDuiWPncPIyeeO9LMfSN0yW7auczwH8F69CNvVYJc6cx7p-BKteTlVRWwCG3TcrHB_C7OXS3Odd5JxTp6DyS65HGgXN8NTpwFIupj_kSwCPwKNNUI65xcM1EvjCg1_85' },
  { id: '5', title: 'Monteverde Cloud Walk', rating: 4.7, duration: '3 Hours', price: 65, available: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC53cetOz-IuixYVkdbItAUP_ww4oVAXao0zk504-xUr_WhazPF5zgjKm2uA8a9u_dh0dYc1WknQn-eiamWlv_0qezynpchv0AnMUgVN5gxH8lbs9D2ZS2RhZtQqqOyE5a0PVzqWglrL2kr5cYaDQSv0Jcabkhk9km_lg-W3kn3cSHvfnGZdzDRTXLUe24Ztj9opgChXGgHSh7TR4HcSmi0pRA4bYS1cMRpmpbTCyCP96cFgA0T4DDCSWAK4qoL4G4ugbmMWckeLJKf' },
  { id: '6', title: 'Tabacon Hot Springs', rating: 4.9, duration: '5 Hours', price: 125, available: true, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdVQS-9icnHyOaHXwB_c0gqkwxTBjbmbBzBK9YgKbzeAgdQpt2yXK7EW0I_SbmdCXhqwlb6uYODCieFbUfw5g9HhNqAMMv9j5BIWBuR-Ao-_2rpmm1wmkr4oRL0YZFXZFufWViDA6yQ1C7mA0GMAeKzrpmzi1LVIUBsYTAz0-e-2E3hj_Du8LWDGNiwcX6Sqvc0L5K3bsB_X3dKnFKCL0ity9yrJVLOBZEM5QaZt7yxudh8FUG3bikFE3xgwuyA_GkEd0E4yhJFi_6' },
  { id: '7', title: 'Tortuguero Canal Tour', rating: 4.6, duration: '3 Hours', price: 70, available: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWZ2iktOoMTSTYqblT1fu-dQ_UWuDddFovK3wfiU_h2GbKGUK7LTEuxOINRoN2qxzXxoqGN3OB1aM3omWUQQF9MgbE62zdObST_y6-2zkbMjI8c5CFViFdukRvVLjzsMdDgCmwT2r1ok8glZuicTL7isJA3hkZ-s87GCPOMGCJrN_dP7us_Tk_o-SEk8Wq3fEJd4unN-gdFrDJqQ5ew3n9aSCKcuJK5hGM8BfL9TmvQ3VyeAIEM3X4719YzHAJL7YEQO_-An67jTZq' },
  { id: '8', title: 'Marino Ballena Discovery', rating: 4.8, duration: '5 Hours', price: 95, available: false, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVQ8zqJ39Qs1DTHuaRX4T4ExPc58hsflxuWJEmU1srWYSvyU4b-SWsBF_yVDC5QnBE3He3VA5cjMqwKUyvC-g4IUHJxPh5NzyjvPYUOtdSwMcmLWPUXdz16q1imtD3fEu1F1k0fMWTKCUf35vZF62eRGkeuBvZPzPWZv3v21E31WVju3fEubm_xndLXQbw5fTHaQHCW1aUx0ixB0PNgT285aqOuPeXApvULfEu2uOSOlCDpgi0mH82wEJgjIvSxQsU-IlA7o26nNs4' },
];

export default function ToursList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [province, setProvince] = useState('');

  const filteredTours = toursData.filter((tour) =>
    tour.title.toLowerCase().includes(search.toLowerCase())
  );

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

        {/* Filters */}
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
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Category</option>
                  <option>Adventure</option>
                  <option>Relaxation</option>
                  <option>Wildlife</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
              </div>
              <div className="relative group min-w-[160px]">
                <select
                  className="appearance-none w-full bg-surface-container-high border-none rounded-xl py-3 px-4 pr-10 text-on-surface-variant font-medium cursor-pointer focus:ring-2 focus:ring-primary/20"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                >
                  <option value="">Province</option>
                  <option>San Jose</option>
                  <option>Alajuela</option>
                  <option>Guanacaste</option>
                  <option>Puntarenas</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
              </div>
              <div className="relative min-w-[160px]">
                <input className="w-full bg-surface-container-high border-none rounded-xl py-3 px-4 text-on-surface-variant font-medium focus:ring-2 focus:ring-primary/20" type="date" />
              </div>
              <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'wght' 700" }}>filter_alt</span>
                Apply
              </button>
            </div>
          </div>
        </section>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTours.map((tour) => (
            <Link to={`/tours/${tour.id}`} key={tour.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={tour.imageUrl} alt={tour.title} />
                {tour.available && (
                  <div className="absolute top-4 left-4 bg-tertiary-container/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-tertiary-fixed rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-on-tertiary-container uppercase tracking-widest">Available Now</span>
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
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Starting at</p>
                    <p className="text-xl font-extrabold text-primary">${tour.price.toFixed(2)}</p>
                  </div>
                  <span className="bg-primary text-white p-3 rounded-full group-hover:bg-primary-container transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {filteredTours.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center">
              <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">sentiment_dissatisfied</span>
              <h4 className="text-2xl font-bold text-primary font-headline">No tours found</h4>
              <p className="text-on-surface-variant">Try adjusting your filters to discover more of Costa Rica.</p>
              <button className="mt-6 text-secondary font-bold underline decoration-secondary/30 hover:decoration-secondary" onClick={() => setSearch('')}>
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex flex-col items-center">
          <p className="text-sm text-on-surface-variant mb-6 font-medium tracking-wide">Showing {filteredTours.length} of 42 experiences</p>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-2">
              <button className="w-12 h-12 rounded-full bg-primary text-on-primary font-bold">1</button>
              <button className="w-12 h-12 rounded-full hover:bg-surface-container transition-colors font-bold">2</button>
              <button className="w-12 h-12 rounded-full hover:bg-surface-container transition-colors font-bold">3</button>
              <span className="mx-2 text-on-surface-variant">...</span>
              <button className="w-12 h-12 rounded-full hover:bg-surface-container transition-colors font-bold">6</button>
            </div>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
