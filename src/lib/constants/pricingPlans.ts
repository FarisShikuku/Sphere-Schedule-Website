export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year';
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'month',
    description: 'Perfect for individuals getting started',
    features: [
      'Up to 100 tasks',
      'Basic calendar',
      '5 meetings per month',
      '3 appointments per week',
      'Email support',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 12,
    period: 'month',
    description: 'Best for professionals and small teams',
    features: [
      'Unlimited tasks',
      'Advanced calendar sync',
      'Unlimited meetings',
      'Unlimited appointments',
      'AI scheduling assistant',
      'Priority support',
    ],
    isPopular: true,
    buttonText: 'Start Pro',
  },
  {
    id: 'business',
    name: 'Business',
    price: 29,
    period: 'month',
    description: 'For growing teams and organizations',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Admin dashboard',
      'API access',
      'SSO integration',
      '24/7 phone support',
    ],
    buttonText: 'Contact Sales',
  },
];