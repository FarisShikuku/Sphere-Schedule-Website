const features = [
  { title: 'Adaptive schedules', desc: 'Plans that reshuffle gently when life moves.' },
  { title: 'Focus guardrails', desc: 'Soft boundaries that protect deep work.' },
  { title: 'Ambient timeline', desc: 'Time flows in a fluid, readable arc.' },
  { title: 'Team clarity', desc: 'Share intent and availability instantly.' },
];

export function Features() {
  return (
    <section id="features" className="container-shell py-20">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <p className="text-sm text-sand/70">Features</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-sand">Everything you need to run on time.</h2>
        </div>
        <button className="px-5 py-2 rounded-full border border-sand/30 text-sand/90 hover:border-teal/50">Explore all</button>
      </div>
      <div className="mt-12 relative">
        <div className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-teal/15 blur-3xl" />
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, idx) => (
            <div key={f.title} className={`glass rounded-3xl p-6 text-sand/90 ${idx % 2 == 0 ? 'translate-y-4' : ''}`}>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-sand/70 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
