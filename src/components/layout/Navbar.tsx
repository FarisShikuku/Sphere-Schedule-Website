export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="container-shell flex items-center justify-between py-4 md:py-6">
        <div className="flex items-center gap-3 text-white text-glow">
          <div className="h-9 w-9 md:h-10 md:w-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-semibold">S</div>
          <div>
            <p className="text-base md:text-lg font-semibold">Sphere Schedule</p>
            <p className="text-[11px] md:text-xs text-white/70">Ambient command center</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">Flow</a>
          <a href="#pricing" className="hover:text-white">Plans</a>
          <a href="#stories" className="hover:text-white">Stories</a>
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <button className="text-xs md:text-sm px-3 md:px-4 py-2 rounded-full border border-white/30 text-white">Login</button>
          <button className="premium-cta text-xs md:text-sm px-4 md:px-6 py-2 md:py-3">Enter Sphere</button>
        </div>
      </div>
    </header>
  );
}
