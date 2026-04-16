import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const featuredTours = [
  {
    id: '1',
    title: 'Manuel Antonio Coastal Hike',
    duration: '4 Hours',
    price: 85,
    badge: 'Most Popular',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_6evXMe2yLZfuHlIzILOjOi_qF3RfDrGps9b17_3NHUGcl97oaQI4iwPZWKZGorFtq2JUkR0MRd_446JUTH0svBNb3sFokYjgK8FY6rIi-oxEIs2BjDnBJGngk-fc4T31hN_ryna054NAFQ13ZH3jSHDzufCtTmLkQRmapyrekh9lkTsSWzfhGtUTu2nU67lQ5mL54BLL10T7nfwsToVmW9wWg7QYLcVQQ-GVAUrp4WX4phkfpOn_wkmC6tatqhDJ5g2ZLbuYxGDv',
  },
  {
    id: '2',
    title: 'Arenal Volcano Lava Trek',
    duration: '6 Hours',
    price: 110,
    badge: 'Top Rated',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCWtNwpZMUfVuUx8jJ66H51glJJ7TNan13uPCkEE5RhCO38f_Y2PXkASIVrYd0CP6RwY3msDjcusTKreYSPb_L84IorOFyTERWcA6rx2X5xGIHI9dK1Yhfm2O-p2bEf8ovYWDHpR0F_A9zZEwrk6hQVydn-B3yTRpBVnTfFwL6Kxzpgx5W5WnJ6Ye5G8B2EMLZu00ELc9y7QHPxZkUBNImy4dkvVIBTsMQf2HNB5V0G_SsPHrz4FqDIzAQKpWzKL7OysPhtJdbwO-T',
  },
  {
    id: '3',
    title: 'Monteverde Cloud Forest Canopy',
    duration: '3 Hours',
    price: 95,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYrTZzEZKBzH5geAY45padh45RJthQXtV7svn2jdniDqmfdly4kUr-jfBTkJIAOUTWwXp9w87PR_NFJWTpLToNAlwOGElankiVKPlSPMzlQC4N1nyyYp3PfYr5z1E8PC8sffPTWj_WCI6Ode5-MvrN9875JHaqIhOtsjw7_VrQ_IIuDSMYwpTXahqWl61Uk8R0yYBTEPrezkwgT0yVJoOU9rU8AXngSbRZwYy-VG9pHkumo1Ji5esOMe4mlL_yQTx858CB_EI_xNe_',
  },
  {
    id: '4',
    title: 'Tortuguero Wildlife Canal Safari',
    duration: '8 Hours',
    price: 135,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHsyksAGEDr-FxC1wmv2CIpoqaljSxgiFCwHEA7MeHSOtG08wqe-qzFvH_0iZR1HSqJFXMWXaJQypkmza4ht61G5rgqKCuEmmu_kLakVmsHaWDIq8GhNqD_1Z8hahNmRyY9hYfZgqBbKKgVA2t4hIvshVCfSBLKj9sVR22wXfp5SnpeFGpckQplOUVSKyOG7U7uBO3QsBz6nTzLysWszwGtDKv6WWki5CS8HTIkeExYUe8J8jLkTHjj2dl1MVjIx_wMoMg4BocYphM',
  },
];

export default function Home() {
  return (
    <div className="bg-background text-on-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Lush Costa Rican Rainforest"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUWekZf4WOnmd_YKZHG_xhzzo8DmJuPpwp_TmYCuhxVmEqF2oED3Wak3oqKgF5y5ZTlJrcDhIisGMLMEWlDNEnMyNddsi269vwe4qzuaB_xZ4In6VcCKq2Pk4XZI9i-L2ixfEmutsOmvq0DnhD-zSPSVv2MLkXl_uX_uWAteLWl8KJfAqR6mA_dW7j9fb0aj2zFZquNgmFmv-udq4JUqFJdGpsPGZW_po-u5lsWc3vtwe32JjPer7W_d5T4Pks6eAYMxsrt5RDRAOR"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8 font-headline">
                Discover the <br /><span className="text-tertiary-fixed">Pura Vida</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-medium max-w-lg">
                Curated journeys through the heart of the tropics. From volcanic summits to secluded pacific coves, embrace the spirit of Costa Rica.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/tours" className="px-8 py-4 bg-white text-primary text-sm font-bold rounded-full shadow-xl hover:bg-surface-container-lowest transition-all">
                  Explore Tours
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 rounded-2xl bg-surface-container-lowest shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-outline-variant/15 flex flex-col items-start gap-6">
                <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>nature_people</span>
                </div>
                <h3 className="text-2xl font-bold text-primary font-headline">Expert Guides</h3>
                <p className="text-on-surface-variant leading-relaxed">Local experts who reveal the secrets of the forest floor and the history of our vibrant culture.</p>
              </div>
              <div className="p-10 rounded-2xl bg-surface-container-lowest shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-outline-variant/15 flex flex-col items-start gap-6">
                <div className="w-14 h-14 bg-secondary-fixed rounded-xl flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                </div>
                <h3 className="text-2xl font-bold text-primary font-headline">Eco-Friendly</h3>
                <p className="text-on-surface-variant leading-relaxed">Carbon-neutral travel that respects our delicate ecosystems and supports sustainable local communities.</p>
              </div>
              <div className="p-10 rounded-2xl bg-surface-container-lowest shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-outline-variant/15 flex flex-col items-start gap-6">
                <div className="w-14 h-14 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                </div>
                <h3 className="text-2xl font-bold text-primary font-headline">Seamless Booking</h3>
                <p className="text-on-surface-variant leading-relaxed">Thoughtfully planned itineraries and high-touch support, so you can focus on the adventure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tours */}
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs">Curated Selections</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-4 leading-tight font-headline">Featured Expeditions</h2>
              <p className="text-on-surface-variant mt-4 text-lg">Hand-picked experiences that capture the raw beauty of the Costa Rican landscape.</p>
            </div>
            <Link to="/tours" className="group flex items-center gap-2 text-primary font-bold text-sm">
              View all tours
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTours.map((tour) => (
              <Link to={`/tours/${tour.id}`} key={tour.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500">
                <div className="h-64 relative overflow-hidden">
                  <img alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={tour.imageUrl} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-tertiary-container uppercase tracking-wide">
                      <span className="material-symbols-outlined text-[14px]">schedule</span> {tour.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 leading-snug font-headline">{tour.title}</h3>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-xs text-on-surface-variant block">Starting at</span>
                      <span className="text-lg font-black text-primary">${tour.price}</span>
                    </div>
                    <span className="px-4 py-2 bg-surface-container-high group-hover:bg-primary group-hover:text-white transition-colors rounded-lg text-xs font-bold">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
