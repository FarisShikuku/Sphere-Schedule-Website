export function Footer() {
  return (
    <footer className="bg-midnight text-sand mt-24">
      <div className="container-shell py-16 grid gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold">Sphere Schedule</p>
          <p className="text-sm text-sand/70 mt-2">Plan every moment with clarity and calm.</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold">Product</p>
          <p className="text-sand/70">Features</p>
          <p className="text-sand/70">Pricing</p>
          <p className="text-sand/70">Integrations</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold">Company</p>
          <p className="text-sand/70">About</p>
          <p className="text-sand/70">Blog</p>
          <p className="text-sand/70">Careers</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold">Stay in the loop</p>
          <p className="text-sand/70">Monthly product updates and playbooks.</p>
          <div className="flex gap-2">
            <input className="flex-1 rounded-full px-4 py-2 text-slate-900" placeholder="Email" />
            <button className="px-4 py-2 rounded-full bg-teal/20 text-teal border border-teal/40">Join</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
