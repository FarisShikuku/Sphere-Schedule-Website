export function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <div className="section-dim" />
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl animate-glowPulse z-0" />
      <div className="absolute top-20 left-[-10%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl animate-glowPulse z-0" />

      <div className="container-shell pt-12 md:pt-16 pb-20 md:pb-24 hero-grid hero-layer">
        <div className="space-y-5 md:space-y-6 stagger">
          <p className="text-xs md:text-sm tracking-widest text-white/80">SPHERE SCHEDULE</p>
          <h1 className="text-3xl md:text-6xl font-semibold leading-tight text-white text-glow">
            Calm control for time, focus, and momentum.
          </h1>
          <p className="text-base md:text-lg text-white/75 max-w-xl">
            A personal command center that keeps your days spacious, coordinated, and quietly powerful.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="premium-cta text-xs md:text-sm px-4 md:px-6 py-2 md:py-3">Begin with clarity</button>
            <button className="px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/30 text-white text-xs md:text-sm">View live flow</button>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-white/70">
            <span>10k+ teams</span>
            <span>99.9% uptime</span>
            <span>2 min setup</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -right-6 h-24 w-24 md:h-28 md:w-28 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl animate-floaty" />
          <div className="rounded-[28px] glass glow p-5 md:p-6">
            <div className="rounded-2xl bg-midnight/70 border border-white/10 p-5 md:p-6 text-white">
              <p className="text-[11px] md:text-xs text-white/70">Now flowing</p>
              <p className="text-xl md:text-2xl font-semibold mt-2">Time blocks orbiting in sync</p>
              <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-2 md:gap-3">
                <span className="px-3 py-2 rounded-full bg-white/10 text-white text-xs">Focus</span>
                <span className="px-3 py-2 rounded-full bg-white/10 text-white text-xs">Meetings</span>
                <span className="px-3 py-2 rounded-full bg-white/10 text-white text-xs">Recovery</span>
              </div>
              <div className="mt-4 md:mt-6 h-24 md:h-28 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                <div className="absolute top-3 md:top-4 left-4 md:left-6 px-3 py-2 rounded-full bg-white/10 text-white text-[10px] md:text-xs">09:00 Deep work</div>
                <div className="absolute top-10 md:top-12 left-16 md:left-20 px-3 py-2 rounded-full bg-white/10 text-white text-[10px] md:text-xs">11:30 Sync</div>
                <div className="absolute top-16 md:top-20 left-8 md:left-10 px-3 py-2 rounded-full bg-white/10 text-white text-[10px] md:text-xs">14:00 Reset</div>
              </div>
            </div>
            <div className="mt-3 md:mt-4 grid grid-cols-2 gap-3">
              <div className="glass rounded-2xl p-3 md:p-4 text-white/90">
                <p className="text-[11px] md:text-xs">Weekly focus</p>
                <p className="text-lg md:text-xl font-semibold">12h 40m</p>
              </div>
              <div className="glass rounded-2xl p-3 md:p-4 text-white/90 focus-mode">
                <p className="text-[11px] md:text-xs">Focus mode</p>
                <p className="text-lg md:text-xl font-semibold">Active</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 left-6 glass rounded-2xl p-3 md:p-4 text-white/90 animate-floaty">
            <p className="text-[11px] md:text-xs">Timeline drift</p>
            <p className="text-base md:text-lg font-semibold">+8 mins gained</p>
          </div>
        </div>
      </div>
    </section>
  );
}
