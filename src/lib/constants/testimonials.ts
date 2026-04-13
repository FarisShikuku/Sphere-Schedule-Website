export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Sphere Schedule has completely transformed how our team manages projects. The AI scheduling saves us hours every week!',
    avatar: '/assets/images/testimonials/avatar-1.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Jamie Chen',
    role: 'CEO',
    company: 'StartupFlow',
    content: 'Finally, a scheduling tool that actually understands how teams work. The unified calendar is a game-changer.',
    avatar: '/assets/images/testimonials/avatar-2.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Marcus Williams',
    role: 'Team Lead',
    company: 'DevStudio',
    content: 'The meeting hub and appointment features have made client coordination seamless. Highly recommended!',
    avatar: '/assets/images/testimonials/avatar-3.jpg',
    rating: 4,
  },
];