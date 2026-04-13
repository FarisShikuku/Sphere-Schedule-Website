import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Sphere Schedule',
  description: 'Latest news and updates from Sphere Schedule.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-text mb-6 text-center">Blog</h1>
        <p className="text-text-2 text-center mb-12">
          Insights, tips, and updates from the Sphere team.
        </p>
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <p className="text-text-2">Blog posts coming soon...</p>
        </div>
      </div>
    </div>
  );
}