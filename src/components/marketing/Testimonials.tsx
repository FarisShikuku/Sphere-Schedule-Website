const quotes = [
  { name: 'Maya Chen', role: 'Product Lead', text: 'Sphere turned our chaos into a calm, shared rhythm.' },
  { name: 'Jonas Lee', role: 'Founder', text: 'Our meetings dropped 30% once we rolled this out.' },
  { name: 'Priya Patel', role: 'Ops Manager', text: 'The scheduling automation saves us hours every week.' },
];

export function Testimonials() {
  return (
    <section id="stories" className="container-shell py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-sand">Loved by modern teams.</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {quotes.map((q, idx) => (
          <div key={q.name} className={`glass rounded-3xl p-6 text-sand/90 ${idx == 1 ? 'translate-y-6' : ''}`}>
            <p className="text-sand/70">?{q.text}?</p>
            <p className="mt-4 font-semibold">{q.name}</p>
            <p className="text-sm text-sand/60">{q.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
