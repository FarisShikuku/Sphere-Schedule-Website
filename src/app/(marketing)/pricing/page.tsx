import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const plans = [
  { name: 'Starter', price: '$12', desc: 'For solo planners' },
  { name: 'Team', price: '$24', desc: 'Best for teams', highlight: true },
  { name: 'Enterprise', price: 'Custom', desc: 'Advanced security & support' },
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <section className="container-shell py-20">
        <h1 className="text-4xl md:text-5xl font-semibold">Pricing that grows with you.</h1>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`p-6 rounded-2xl border ${p.highlight ? 'border-primary shadow-glow' : 'border-slate-200'} bg-white`}>
              <p className="text-sm text-primary">{p.name}</p>
              <p className="text-3xl font-semibold mt-3">{p.price}</p>
              <p className="text-slate-600 mt-2">{p.desc}</p>
              <button className={`mt-6 w-full py-2 rounded-full ${p.highlight ? 'bg-primary text-white' : 'border border-slate-200'}`}>
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
