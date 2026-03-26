const stats = [
  { label: 'Users onboarded', value: '24k+' },
  { label: 'Meetings optimized', value: '500k' },
  { label: 'Hours saved', value: '1.8M' },
];

export function Stats() {
  return (
    <section className="container-shell py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-3xl p-6 text-sand/90 text-center">
            <p className="text-3xl font-semibold">{s.value}</p>
            <p className="text-sm text-sand/60 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
