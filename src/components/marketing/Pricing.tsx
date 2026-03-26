const plans = [
  { name: 'Starter', price: '$12', desc: 'For solo planners', features: ['Unlimited tasks', 'Basic automations'] },
  { name: 'Team', price: '$24', desc: 'Best for teams', features: ['Shared calendars', 'Team insights'], highlight: true },
  { name: 'Enterprise', price: 'Let\'s talk', desc: 'Custom scale', features: ['SAML SSO', 'Custom SLAs'] },
];

export function Pricing() {
  return (
    <section id="pricing" className="container-shell py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-sand">Pricing that scales with you.</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className={`glass rounded-3xl p-6 text-sand/90 ${p.highlight ? 'border border-teal/60 glow' : ''}`}>
            <p className="text-sm text-teal">{p.name}</p>
            <p className="text-3xl font-semibold mt-3">{p.price}</p>
            <p className="text-sand/70 mt-2">{p.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-sand/70">
              {p.features.map((f) => (
                <li key={f}>? {f}</li>
              ))}
            </ul>
            <button className={`mt-6 w-full py-2 rounded-full ${p.highlight ? 'bg-teal/20 text-teal border border-teal/40' : 'border border-sand/30 text-sand/90'}`}>
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
