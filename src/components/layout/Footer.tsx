export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-surface-container-low transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-lg font-bold text-primary font-headline">Explore Costa Rica Tours</div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
            Crafting meaningful connections between travelers and the natural wonders of Costa Rica since 2012.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary">language</span>
            <span className="material-symbols-outlined text-primary">local_activity</span>
            <span className="material-symbols-outlined text-primary">photo_camera</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-primary font-bold uppercase text-xs tracking-widest">Company</h4>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">About Us</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Sustainability</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Partner Program</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Careers</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-primary font-bold uppercase text-xs tracking-widest">Resources</h4>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Travel Insurance</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Help Center</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-primary font-bold uppercase text-xs tracking-widest">Contact</h4>
          <p className="text-on-surface-variant text-sm">Calle 1, San Jose<br />Costa Rica</p>
          <p className="text-on-surface-variant text-sm">hello@explorecr.com</p>
          <p className="text-primary font-bold text-sm">+506 2222-3333</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-on-surface-variant text-sm">&copy; 2024 Explore Costa Rica Tours. Pura Vida.</span>
        <div className="flex gap-8">
          <span className="material-symbols-outlined text-outline-variant">eco</span>
          <span className="material-symbols-outlined text-outline-variant">nature</span>
          <span className="material-symbols-outlined text-outline-variant">forest</span>
        </div>
      </div>
    </footer>
  );
}
