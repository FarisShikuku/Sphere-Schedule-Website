import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Sphere Schedule',
  description: 'Choose the perfect plan for your team.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-text mb-4">Simple, Transparent Pricing</h1>
          <p className="text-text-2 text-lg max-w-2xl mx-auto">
            Choose the plan that works best for you and your team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="font-outfit text-2xl font-bold text-text mb-2">Free</div>
            <div className="text-4xl font-bold text-sphere mb-4">$0</div>
            <div className="text-text-2 text-sm mb-6">Perfect for individuals</div>
            <button className="w-full py-2 rounded-full border-2 border-border-2 text-text-2 hover:border-sphere hover:text-sphere transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}