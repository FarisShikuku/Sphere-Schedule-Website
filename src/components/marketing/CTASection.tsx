export function CTASection() {
  return (
    <section className="container-shell py-20">
      <div className="relative overflow-hidden rounded-[32px] glass p-12 text-sand">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-teal/30 via-transparent to-coral/30" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-semibold">Own your time again.</h2>
          <p className="text-sand/70 mt-2">Start your 14-day free trial and reclaim your schedule.</p>
          <button className="premium-cta mt-6">Start now</button>
        </div>
      </div>
    </section>
  );
}
