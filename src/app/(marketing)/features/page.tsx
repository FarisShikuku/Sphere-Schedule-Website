import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const items = [
  { title: 'Adaptive calendar', desc: 'Auto rebalances tasks when meetings move.' },
  { title: 'Focus guardrails', desc: 'Protect deep work with dynamic blocks.' },
  { title: 'Unified workspace', desc: 'Tasks, meetings, and appointments in one view.' },
  { title: 'Team insights', desc: 'Understand bandwidth before you schedule.' },
];

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />
      <section className="container-shell py-20">
        <h1 className="text-4xl md:text-5xl font-semibold">Features built for momentum.</h1>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-2xl bg-white border border-slate-100">
              <h3 className="text-xl font-semibold">{i.title}</h3>
              <p className="text-slate-600 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
