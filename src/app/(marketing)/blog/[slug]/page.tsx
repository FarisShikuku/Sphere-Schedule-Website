import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  return {
    title: `Blog Post: ${params.slug} | Sphere Schedule`,
    description: 'Read this article from Sphere Schedule.',
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-text mb-6">
          Blog Post: {params.slug}
        </h1>
        <div className="bg-card border border-border rounded-xl p-8">
          <p className="text-text-2">Blog post content coming soon...</p>
        </div>
      </div>
    </div>
  );
}