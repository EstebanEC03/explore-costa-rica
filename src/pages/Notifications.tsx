import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const notifications = [
  {
    id: '1',
    title: 'Booking Confirmed!',
    message: 'Your Manuel Antonio National Park tour for next Tuesday has been successfully confirmed. Get ready for an incredible wildlife journey!',
    time: '2 mins ago',
    ref: 'Ref: #CR-2049',
    icon: 'calendar_month',
    iconBg: 'bg-primary text-on-primary',
    isNew: true,
    filled: true,
  },
  {
    id: '2',
    title: 'Eco-Traveler Badge Earned',
    message: "Congratulations! You've offset your carbon footprint for 3 consecutive trips. Check your profile to see your new digital badge.",
    time: 'Oct 12',
    icon: 'eco',
    iconBg: 'bg-tertiary-container text-tertiary-fixed-dim',
    isNew: false,
    category: 'Achievement',
  },
  {
    id: '3',
    title: 'Weather Advisory',
    message: 'Minor schedule adjustment: Due to heavy tropical rainfall, the Afternoon Kayak tour has been shifted to 8:00 AM tomorrow.',
    time: 'Oct 11',
    icon: 'warning',
    iconBg: 'bg-error-container text-on-error-container',
    isNew: false,
    action: 'Review Change',
    category: 'Safety First',
  },
  {
    id: '4',
    title: 'New Secret Spot Unlocked',
    message: "Based on your love for birdwatching, we've added a new private trail in the Cloud Forest exclusively for premium members.",
    time: 'Oct 10',
    icon: 'map',
    iconBg: 'bg-secondary-container text-on-secondary-container',
    isNew: false,
    location: 'Monteverde',
  },
];

export default function Notifications() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <p className="text-secondary font-semibold tracking-widest text-xs uppercase">Activity Stream</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-headline">Notifications</h1>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-medium hover:bg-surface-container-highest transition-colors">
              Mark all as read
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-xl">settings</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`group flex gap-5 p-6 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                notif.isNew
                  ? 'bg-surface-container-highest/40 hover:bg-surface-container-highest/60'
                  : 'bg-surface-container-low hover:bg-surface-container-high'
              }`}
            >
              {notif.isNew && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${notif.iconBg}`}>
                <span className="material-symbols-outlined" style={notif.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}>{notif.icon}</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`text-lg font-bold ${notif.isNew ? 'text-primary' : 'text-on-surface'}`}>{notif.title}</h3>
                  {notif.isNew ? (
                    <span className="text-xs font-medium text-secondary bg-secondary-fixed px-2 py-0.5 rounded-full">NEW</span>
                  ) : (
                    <span className="text-xs font-medium text-outline">{notif.time}</span>
                  )}
                </div>
                <p className="text-on-surface-variant text-sm md:text-base mb-3 max-w-2xl leading-relaxed">{notif.message}</p>
                <div className="flex items-center gap-4 text-xs font-medium text-outline">
                  {notif.isNew && notif.time && (
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">schedule</span> {notif.time}
                    </span>
                  )}
                  {notif.ref && (
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">confirmation_number</span> {notif.ref}
                    </span>
                  )}
                  {notif.action && (
                    <button className="text-xs font-bold text-secondary hover:underline transition-all">{notif.action}</button>
                  )}
                  {notif.category && (
                    <>
                      {notif.action && <div className="w-1 h-1 rounded-full bg-outline-variant"></div>}
                      <span className="flex items-center gap-1.5 uppercase tracking-wider">{notif.category}</span>
                    </>
                  )}
                  {notif.location && (
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">explore</span> {notif.location}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white rounded-full transition-all text-outline hover:text-error">
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            </div>
          ))}

          {/* Action Card */}
          <div className="mt-8 p-8 rounded-3xl bg-primary text-on-primary flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-tertiary-container/20 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            <div className="relative z-10 space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-bold font-headline">Never miss an update</h4>
              <p className="text-on-primary/80 text-sm">Enable push notifications on your mobile device for real-time tour updates.</p>
            </div>
            <button className="relative z-10 bg-surface-container-lowest text-primary px-8 py-3 rounded-full font-bold hover:bg-surface transition-colors shadow-lg shadow-black/10">
              Enable Now
            </button>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 text-on-surface-variant font-semibold hover:text-primary transition-colors group">
            Load previous notifications
            <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">keyboard_arrow_down</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
