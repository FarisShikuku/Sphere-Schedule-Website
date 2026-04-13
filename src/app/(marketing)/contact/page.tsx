import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Sphere Schedule',
  description: 'Get in touch with the Sphere Schedule team.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-text mb-6 text-center">Contact Us</h1>
        <p className="text-text-2 text-center mb-12">
          Have questions? We'd love to hear from you.
        </p>
        <div className="bg-card border border-border rounded-xl p-8">
          <p className="text-center text-text-2">Contact form coming soon...</p>
        </div>
      </div>
    </div>
  );
}