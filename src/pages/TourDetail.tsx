import { Link } from 'react-router-dom';

export default function TourDetail() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Minimal Header */}
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

      {/* Hero */}
      <section
        className="relative w-full h-[665px] min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5UiEiyIs2Zdpk-g7RMm-Bc0GfIzeXTmGlq57PAYCqai_rcZcjw91TknqPjiQoN6GhMoZoOgsy-AAVUm2xsTgKbqhWbm1g--dzccD8Ez847h2libXf_RoB5lA1Buez0rJgZ994jVoLcqqz8J6gzn-vY3Uh4q--yIt27NpsmHN4ntZWLVeJ8dvZJDVGpbjWJtn_AB71HMW_iZys8efcRj2zHaB9WP7zJEfk3DgW6ydC_izJgntNnH7s5eLz9eJnmk5B7-Op7o919tE1')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/80 via-[#012d1d]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="text-sm font-medium tracking-wide">Tortuguero National Park</span>
              </div>
              <h1 className="font-headline text-5xl lg:text-7xl font-bold text-on-primary tracking-[-0.02em] mb-6 leading-[1.1]">
                Tortuguero Wildlife Safari
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-24 relative">
          {/* Left Column */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-16">
            {/* Overview */}
            <section>
              <div className="flex items-center gap-6 mb-8 text-on-surface-variant font-medium">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                  <span>4 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">group</span>
                  <span>Max 8 people</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-on-surface">4.9</span>
                  <span className="text-sm">(124 reviews)</span>
                </div>
              </div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6 tracking-[-0.02em]">The Experience</h2>
              <p className="text-lg text-on-surface-variant leading-[1.6] mb-6">
                Immerse yourself in the "Amazon of Costa Rica." This guided boat safari navigates the intricate network of freshwater creeks and lagoons within Tortuguero National Park. Far from the crowds, you'll slip quietly through dense rainforest corridors where the canopy teems with life.
              </p>
              <p className="text-lg text-on-surface-variant leading-[1.6]">
                Our expert naturalist guides possess an uncanny ability to spot hidden wildlife. Expect to encounter howler monkeys echoing through the trees, three-toed sloths resting in the branches, and a kaleidoscope of tropical birds including toucans and macaws.
              </p>
            </section>

            {/* What's Included */}
            <section className="p-10 rounded-[2rem] bg-surface-container-low">
              <h2 className="font-headline text-2xl font-bold text-primary mb-8 tracking-[-0.02em]">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  { icon: 'directions_boat', title: 'Eco-Friendly Boat', desc: 'Silent electric motors ensure minimal disturbance to wildlife.', included: true },
                  { icon: 'person_raised_hand', title: 'Expert Guide', desc: 'Bilingual naturalist with extensive local knowledge.', included: true },
                  { icon: 'local_drink', title: 'Refreshments', desc: 'Fresh tropical fruits and bottled water provided.', included: true },
                  { icon: 'close', title: 'Park Entrance Fee', desc: 'Not included ($15 USD payable at the gate).', included: false },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.included ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-1">{item.title}</h3>
                      <p className="text-sm text-on-surface-variant leading-[1.6]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Location */}
            <section>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6 tracking-[-0.02em]">Location</h2>
              <div className="w-full h-[400px] rounded-[2rem] overflow-hidden bg-surface-container-high relative">
                <img
                  alt="Map placeholder"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAMpU4bev-ZhQ7NoYgT6IrbNm0pxZDkQOwUbaoJ3Fnzb49mFjhveySxTtwiRpdfflbvDzwHhumiJ-bzbmKq7JUZ0friRj45XSJDy8MsMKwECfHGe3MbwNpm-F4FNEIBPJ6TjtGCpYKMuz3dlKy0m2ZbuUlFTUbjxCD9rzhMNJ8_tMHXysDprw0suMaUn_i3Omd9A5iIKYXW9ckM35K-G9Rhs2La2AssIL7yI62Uc7mgmzmXTpWJA4Vn4DkqqNEcfJ7ImXctwnGIvnv"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-surface-container-lowest text-primary px-6 py-3 rounded-full font-bold shadow-[var(--shadow-ambient)] hover:bg-surface-bright transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined">map</span>
                    View Interactive Map
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-5 xl:col-span-4 mt-12 lg:mt-0 relative">
            <div className="sticky top-28 bg-surface-container-lowest rounded-[2rem] p-8 shadow-[var(--shadow-ambient)] flex flex-col gap-8 transition-colors duration-300 hover:bg-surface-bright">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-on-surface-variant text-sm font-medium mb-1">Price per person</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-headline font-bold text-primary">$85</span>
                    <span className="text-on-surface-variant text-sm">USD</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-surface-container-high rounded-xl p-4 transition-shadow duration-300 cursor-text focus-within:shadow-[inset_0_0_0_2px_rgba(1,45,29,0.2)]">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Date</label>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface font-medium">Select a date</span>
                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                  </div>
                </div>
                <div className="bg-surface-container-high rounded-xl p-4 transition-shadow duration-300 cursor-text focus-within:shadow-[inset_0_0_0_2px_rgba(1,45,29,0.2)]">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Time</label>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface font-medium">Morning (6:00 AM)</span>
                    <span className="material-symbols-outlined text-primary">expand_more</span>
                  </div>
                </div>
                <div className="bg-surface-container-high rounded-xl p-4 transition-shadow duration-300 cursor-text focus-within:shadow-[inset_0_0_0_2px_rgba(1,45,29,0.2)]">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Guests</label>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface font-medium">2 Adults</span>
                    <span className="material-symbols-outlined text-primary">group</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container-highest">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-on-surface font-bold text-lg">Total</span>
                  <span className="text-primary font-bold text-xl">$170 USD</span>
                </div>
                <button className="w-full h-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg shadow-[var(--shadow-ambient)] hover:shadow-[var(--shadow-ambient-lg)] transition-all duration-300">
                  Reserve Now
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
