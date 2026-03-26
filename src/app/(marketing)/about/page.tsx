import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="container-shell py-20">
        <p className="text-sm text-primary">About</p>
        <h1 className="text-4xl md:text-5xl font-semibold mt-3">We build calm scheduling systems.</h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          Sphere Schedule was built to help teams find flow in a world of constant meetings and shifting priorities.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {['Clarity', 'Trust', 'Momentum'].map((value) => (
            <div key={value} className="p-6 rounded-2xl bg-white border border-slate-100">
              <h3 className="text-xl font-semibold">{value}</h3>
              <p className="text-slate-600 mt-2">Guiding principle for every product decision we make.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
