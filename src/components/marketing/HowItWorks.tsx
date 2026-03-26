const steps = [
  { title: 'Connect calendars', desc: 'Sync with Google and Outlook in seconds.' },
  { title: 'Define focus zones', desc: 'Set deep work blocks and guardrails.' },
  { title: 'Let Sphere optimize', desc: 'Auto-prioritize tasks around your meetings.' },
];

export function HowItWorks() {
  return (
    <section id="how" className="container-shell py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-sand">A schedule that adapts with you.</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="glass rounded-3xl p-6 text-sand/90">
            <p className="text-xs text-teal">Phase {i + 1}</p>
            <h3 className="text-xl font-semibold mt-2">{s.title}</h3>
            <p className="text-sand/70 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
