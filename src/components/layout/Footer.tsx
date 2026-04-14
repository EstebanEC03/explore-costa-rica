export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-emerald-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-lg font-bold text-emerald-900 font-headline">Explore Costa Rica Tours</div>
          <p className="text-emerald-700/60 text-sm leading-relaxed max-w-xs">
            Crafting meaningful connections between travelers and the natural wonders of Costa Rica since 2012.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-emerald-900">language</span>
            <span className="material-symbols-outlined text-emerald-900">local_activity</span>
            <span className="material-symbols-outlined text-emerald-900">photo_camera</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-emerald-900 font-bold uppercase text-xs tracking-widest">Company</h4>
          <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">About Us</a>
          <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Sustainability</a>
          <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Partner Program</a>
          <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Careers</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-emerald-900 font-bold uppercase text-xs tracking-widest">Resources</h4>
          <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Privacy Policy</a>
          <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Terms of Service</a>
          <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Travel Insurance</a>
          <a className="text-emerald-700/60 hover:text-emerald-900 transition-colors text-sm" href="#">Help Center</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-emerald-900 font-bold uppercase text-xs tracking-widest">Contact</h4>
          <p className="text-emerald-700/60 text-sm">Calle 1, San Jose<br />Costa Rica</p>
          <p className="text-emerald-700/60 text-sm">hello@explorecr.com</p>
          <p className="text-emerald-900 font-bold text-sm">+506 2222-3333</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-emerald-900/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-emerald-700/60 text-sm">&copy; 2024 Explore Costa Rica Tours. Pura Vida.</span>
        <div className="flex gap-8">
          <span className="material-symbols-outlined text-emerald-900/30">eco</span>
          <span className="material-symbols-outlined text-emerald-900/30">nature</span>
          <span className="material-symbols-outlined text-emerald-900/30">forest</span>
        </div>
      </div>
    </footer>
  );
}
