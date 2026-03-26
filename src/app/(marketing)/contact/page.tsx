import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="container-shell py-20">
        <h1 className="text-4xl md:text-5xl font-semibold">Let?s talk scheduling.</h1>
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-slate-600">Reach out and we?ll get back within 24 hours.</p>
            <div className="mt-6 space-y-4">
              <Input label="Email" placeholder="you@company.com" />
              <Input label="Subject" placeholder="Partnership" />
              <Textarea label="Message" placeholder="Tell us about your workflow" />
              <Button>Send message</Button>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-100">
            <p className="text-sm text-slate-500">Office</p>
            <p className="text-lg font-semibold mt-2">Nairobi, Kenya</p>
            <p className="text-slate-600 mt-2">Mon - Fri ? 9am - 6pm</p>
            <div className="mt-6 p-4 rounded-xl bg-slate-50">support@sphereschedule.com</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
