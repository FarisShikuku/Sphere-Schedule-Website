import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const posts = [
  { title: 'Designing calm schedules', date: 'March 2026' },
  { title: 'How to protect deep work', date: 'February 2026' },
  { title: 'The end of status meetings', date: 'January 2026' },
];

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <section className="container-shell py-20">
        <h1 className="text-4xl md:text-5xl font-semibold">Sphere Journal</h1>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="p-6 rounded-2xl bg-white border border-slate-100">
              <p className="text-xs text-slate-500">{p.date}</p>
              <h3 className="text-xl font-semibold mt-3">{p.title}</h3>
              <button className="mt-4 text-sm text-primary">Read more</button>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
