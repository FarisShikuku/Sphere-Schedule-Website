import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sphere Schedule',
  description: 'Learn about Sphere Schedule and our mission to revolutionize scheduling.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-text mb-6">About Sphere Schedule</h1>
        <p className="text-text-2 text-lg mb-8">
          We're on a mission to transform how teams manage their time and schedules.
        </p>
        <div className="prose prose-invert">
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
}