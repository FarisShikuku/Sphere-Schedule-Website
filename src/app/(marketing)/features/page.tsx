import { Metadata } from 'next';
import { Features } from '@/components/marketing/Features';

export const metadata: Metadata = {
  title: 'Features | Sphere Schedule',
  description: 'Discover all the powerful features Sphere Schedule has to offer.',
};

export default function FeaturesPage() {
  return (
    <div className="pt-32">
      <Features />
    </div>
  );
}