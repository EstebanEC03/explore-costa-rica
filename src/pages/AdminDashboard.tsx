import AdminSidebar from '../components/layout/AdminSidebar';

const metrics = [
  { label: 'Total Tours', value: '124', change: '+4%', icon: 'explore', iconBg: 'bg-emerald-50 text-emerald-900', changeBg: 'text-emerald-600' },
  { label: 'Active Reservations', value: '842', change: '+12%', icon: 'confirmation_number', iconBg: 'bg-sky-50 text-sky-900', changeBg: 'text-sky-600' },
  { label: 'New Users', value: '56', change: '+18%', icon: 'person_add', iconBg: 'bg-teal-50 text-teal-900', changeBg: 'text-teal-600' },
  { label: 'Monthly Revenue', value: '$42,920', change: '+8.2%', icon: 'payments', iconBg: 'bg-emerald-900 text-white', changeBg: 'text-emerald-900' },
];

const recentBookings = [
  { name: 'Cloud Forest Canopy', customer: 'Elena Rodriguez', status: 'PAID', statusBg: 'bg-emerald-100 text-emerald-900', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYXNJWoivop1JuptltbHi8Ccqn0_iQ7H97RHFihOE_KfzokQPkGHvEFQyZBgIf9n5tHVKAWiXvuF74HRPY_ic2l7xawW0P1QFTFkCfwWNNYvNL0CPymOag73teZ41QpHj5Xrjtz8886aBfO5WGNvjVcV3Tb2XVBqXIKh-d2b-Ncnik8giJJwE0f9SQXkOTbNDj1wRq8CeK3r3jwsUqA3hP6fSxHIHwbaKdWksbCL-6JiqY2xkriSFJDRKKQFOidzrfKQsXxioT8Peb' },
  { name: 'Arenal Volcano Hike', customer: 'Marcus Thorne', status: 'PAID', statusBg: 'bg-emerald-100 text-emerald-900', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-6uiSEwOVkwYfKaUJE5f69zl5H_TxNMB5nNH5NRT5BRWGKiJhyRgeMt1-4J2GS0m4-HmmQLc9DwmfiSXLdNn2TcwyUzu8kDpkK6eENVpbe1ALZekC1VgEiIUCrd8IZT-Lz9koPhFaWlMS-cpaTI55DhKwY1wLr6d3s-3LeQ5pzh4gYTuRtHOG9694Yb4ksSUjhqZ38zg2aZLME57FroK2cAGcUUCNZAQzGZ3BvquK5ctZD4U1_uh0hrO4KYiPmg87b-gMrWKjT0EJ' },
  { name: 'Manuel Antonio Escape', customer: 'Sarah Jenkins', status: 'PENDING', statusBg: 'bg-amber-100 text-amber-900', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUy-CPtEeDePwg3cZf0j5U-PRx3WBCAaUSvBjbGX8ji95txHUq0O7aOWT0ThezCl72jcNLxdt0tLaeZmeJ_BNn9OS828pNMCbwe1YNdf8hye2t3n1ntG8Kxm87NAVpekGzJlGsAzYxb9VO0SE5MqjKVvfT3zMIx_kiodAWOV1QjTBKiFlHKml052nsI2WnSWZ-rpPF9xeqLMjebHHByskTYt2A6xKdkTE15uEyjOtLpXo5IltKia21oSRfRy2eICCZeLH6ZWO-80uf' },
  { name: 'Tortuguero Kayak', customer: 'David Chen', status: 'PAID', statusBg: 'bg-emerald-100 text-emerald-900', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVLDwhTsQR_6weOySLN6_dqJyjVFhrOt4Q5XznkgM9HtTovAJ-wx5rY3DxWFXBWL1tNEBjOXJN0-ZKbUW3g2C2-dAco-ucVlNOWJ1UqMht3ZPZZa6A59x0KcuyNaSE35TlM8UhI62dTzYVRqn8kfgARfLx2ZJk9Cv2P43HCYgjwKdPUOpiIsduL-VWsW2K3BemFdWt4RNs9J5pJfj2FZ5QpCpqAatInkOqsC65zmJwHdyUDxs0KYe9ePpyhgYWlRueoX2P6yO9pGzE' },
  { name: 'Sunset Catamaran', customer: 'Lisa Vanders', status: 'CANCELLED', statusBg: 'bg-error-container text-on-error-container', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhbJCpH4dqkIuk0pCh1EdTNyhSsaXUVy0ILJGKXs-ZWWMa3E72jd6V5k55ngaZ7cgIMs8fllSNzMtUqGhUQBRvY2O9MiK2KIG81q5Duv7_b2hG4VarLxsL9GXKhR_OsXlYQCQlf37-BQuMqTUkvXOek8UCz1H-nckfcrYcTJotKCE68tD663L_gi0ghBxwxJyR9UPJ8HVH8NQ1sIM-DfQE8sWneK2TLkvxfmwgCVTOrDD1Hyh1cUFbnNOOMZ03zwlJ_CJ75xkmGwtv' },
];

const chartBars = [40, 55, 45, 70, 60, 85, 75, 95, 80, 65, 50, 60, 75, 90];

export default function AdminDashboard() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <AdminSidebar />
      <main className="ml-64 p-10 min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">Overview</h2>
            <p className="text-on-surface-variant mt-2 leading-relaxed">Welcome back. Here's what's happening across the rainforest today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full">
              <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></div>
              <span className="text-xs font-medium text-tertiary">Experience Pulse: High Activity</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
              <img
                alt="Admin Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtEMZVGG-bw97IK0vqgA_bDUs7uxCH5S1jmVl9n7lmByHdyhaKCJLH1PwGo8vDlV6T7DuNsl5z8PHitcdovCtz1kJM8uXfTiSW_qFEtT9ZbmKaqAZyQ7lDv9STre5m4gpxktcMHznkCk1FmuLYc0jNjPekmdbJ-KctqwZZ-N-SZd3HWELSGm_znxUOoMxx0SOPCq1eRAH3jowBpBZIHYSi6M7hZ5GOTep_HQXJMz4kumNI535Ug8OFp0CCE2kTUP-YRmhlRyb96AQi"
              />
            </div>
          </div>
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((m) => (
            <div key={m.label} className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:bg-surface-bright transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${m.iconBg}`}>
                  <span className="material-symbols-outlined">{m.icon}</span>
                </div>
                <span className={`text-xs font-bold ${m.changeBg}`}>{m.change}</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-1">{m.label}</p>
              <h3 className="text-2xl font-bold text-primary">{m.value}</h3>
            </div>
          ))}
        </div>

        {/* Charts & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="text-xl font-bold text-primary font-headline">Booking Trends</h4>
                <p className="text-sm text-on-surface-variant">Last 30 days performance</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-semibold bg-primary text-on-primary rounded-full">Bookings</button>
                <button className="px-3 py-1 text-xs font-semibold text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">Views</button>
              </div>
            </div>
            <div className="relative h-64 w-full mt-4 flex items-end gap-1">
              {chartBars.map((height, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm hover:bg-emerald-200 transition-all cursor-pointer ${
                    height === 95 ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-emerald-100/40'
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-medium uppercase tracking-wider px-1">
              <span>Oct 01</span>
              <span>Oct 15</span>
              <span>Oct 30</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
            <h4 className="text-xl font-bold text-primary mb-6 font-headline">Recent Bookings</h4>
            <div className="space-y-6">
              {recentBookings.map((b) => (
                <div key={b.name} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img alt="Tour" className="w-full h-full object-cover" src={b.imageUrl} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-primary truncate">{b.name}</h5>
                    <p className="text-xs text-on-surface-variant">{b.customer}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${b.statusBg}`}>{b.status}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 text-sm font-bold text-primary hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant/30">
              View All Transactions
            </button>
          </div>
        </div>

        {/* Secondary Insights */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden h-48 group">
            <img
              alt="Experience"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMVQX23jheNi23AnKcW6kKEdxWcKCuX1dHLAeAVP4K1lQL0867Hrb_mgmXUaRNshXSuX3RfCW8w22If5laMir8RD5Q2opuD-HVfRl5GRbFz5ZS3ET8fM_6VbuWNBhh3omNJgqtYqD5qREYZGywH_i3dTI5TqZsx-hoySAOrsKGeEFKTjwgZccG9mJutc-ocP_nqtU6fzDUw3VTRIeu7C-kRLXjFMszQZ7ywbTl2x_n0eqy7ke98zmutP_UKYcXSE0GEScmx0wUbESl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-[10px] font-black tracking-widest text-emerald-300 uppercase">Top Experience</span>
              <h4 className="text-xl font-bold text-white font-headline">Monteverde Night Walk</h4>
              <p className="text-emerald-50/70 text-sm mt-1">98% customer satisfaction this month.</p>
            </div>
          </div>
          <div className="bg-primary p-8 rounded-2xl flex flex-col justify-center text-on-primary">
            <span className="text-[10px] font-black tracking-widest text-emerald-300 uppercase mb-2">Inventory Alert</span>
            <h4 className="text-xl font-bold font-headline">Low Capacity: Osa Peninsula Safari</h4>
            <p className="text-emerald-100/70 text-sm mt-2 leading-relaxed">Only 4 spots remaining for the next 7 departures. Consider increasing price or opening new slots.</p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-2 bg-emerald-50 text-primary text-xs font-bold rounded-full hover:bg-emerald-200 transition-colors">Manage Slots</button>
              <button className="px-6 py-2 border border-emerald-50/20 text-xs font-bold rounded-full hover:bg-white/10 transition-colors">Dismiss</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
