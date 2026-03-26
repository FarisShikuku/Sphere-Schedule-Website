import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function BlogPostPage() {
  return (
    <main>
      <Navbar />
      <section className="container-shell py-20 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold">Designing calm schedules</h1>
        <p className="text-slate-500 mt-4">March 2026 ? 6 min read</p>
        <div className="mt-8 space-y-4 text-slate-700">
          <p>Sphere Schedule is built to reduce chaos by making planning a calmer, more adaptive experience.</p>
          <p>We focus on protecting focus time, reducing meeting overload, and keeping teams aligned.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
