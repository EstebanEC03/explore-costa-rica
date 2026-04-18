import { useParams, Link } from 'react-router-dom';
import { useTourDetail } from '../hooks/useTours';

export default function TourDetail() {
  const { id } = useParams<{ id: string }>();
  const { tour, loading, error } = useTourDetail(id);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
        <p className="text-on-surface-variant font-medium">Loading tour details...</p>
      </div>
    );
  }

  if (error || !tour) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <span className="material-symbols-outlined text-6xl text-error mb-4">error</span>
        <h1 className="text-3xl font-bold text-primary font-headline mb-2">Tour not found</h1>
        <p className="text-on-surface-variant mb-6">{error || 'The tour you are looking for does not exist.'}</p>
        <Link to="/tours" className="px-6 py-3 bg-primary text-on-primary rounded-full font-bold">
          Back to Tours
        </Link>
      </div>
    );
  }

  const guests = 2;
  const totalPrice = tour.price * guests;

  return (
    <div className="bg-background text-on-background min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/70 backdrop-blur-[20px] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/tours" className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-lowest shadow-[var(--shadow-ambient)] hover:bg-surface-bright transition-colors duration-300">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </Link>
          <div className="flex gap-4">
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-lowest shadow-[var(--shadow-ambient)] hover:bg-surface-bright transition-colors duration-300">
              <span className="material-symbols-outlined text-primary">favorite_border</span>
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-lowest shadow-[var(--shadow-ambient)] hover:bg-surface-bright transition-colors duration-300">
              <span className="material-symbols-outlined text-primary">share</span>
            </button>
          </div>
        </div>
      </header>

      <section
        className="relative w-full h-[665px] min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${tour.imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/80 via-[#012d1d]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="text-sm font-medium tracking-wide">{tour.location}</span>
              </div>
              <h1 className="font-headline text-5xl lg:text-7xl font-bold text-on-primary tracking-[-0.02em] mb-6 leading-[1.1]">
                {tour.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-24 relative">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-16">
            <section>
              <div className="flex flex-wrap items-center gap-6 mb-8 text-on-surface-variant font-medium">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">group</span>
                  <span>Max {tour.maxCapacity} people</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-on-surface">{tour.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">category</span>
                  <span>{tour.category}</span>
                </div>
              </div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6 tracking-[-0.02em]">The Experience</h2>
              <p className="text-lg text-on-surface-variant leading-[1.6]">
                {tour.description}
              </p>
            </section>

            <section className="p-10 rounded-[2rem] bg-surface-container-low">
              <h2 className="font-headline text-2xl font-bold text-primary mb-8 tracking-[-0.02em]">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                {tour.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-primary-container text-on-primary-container">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface">{item}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 mt-12 lg:mt-0 relative">
            <div className="sticky top-28 bg-surface-container-lowest rounded-[2rem] p-8 shadow-[var(--shadow-ambient)] flex flex-col gap-8 transition-colors duration-300 hover:bg-surface-bright">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-on-surface-variant text-sm font-medium mb-1">Price per person</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-headline font-bold text-primary">${tour.price}</span>
                    <span className="text-on-surface-variant text-sm">USD</span>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  tour.availableSpots > 0
                    ? 'bg-tertiary-container text-on-tertiary-container'
                    : 'bg-error-container text-on-error-container'
                }`}>
                  {tour.availableSpots > 0 ? `${tour.availableSpots} spots left` : 'Sold Out'}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-surface-container-high rounded-xl p-4">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Date</label>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface font-medium">Select a date</span>
                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                  </div>
                </div>
                <div className="bg-surface-container-high rounded-xl p-4">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Guests</label>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface font-medium">{guests} Adults</span>
                    <span className="material-symbols-outlined text-primary">group</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container-highest">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-on-surface font-bold text-lg">Total</span>
                  <span className="text-primary font-bold text-xl">${totalPrice} USD</span>
                </div>
                <button
                  disabled={tour.availableSpots === 0}
                  className="w-full h-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg shadow-[var(--shadow-ambient)] hover:shadow-[var(--shadow-ambient-lg)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {tour.availableSpots === 0 ? 'Sold Out' : 'Reserve Now'}
                </button>
                <p className="text-center text-xs text-on-surface-variant mt-4">You won't be charged yet.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
