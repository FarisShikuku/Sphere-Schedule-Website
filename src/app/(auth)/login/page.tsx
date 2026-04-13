'use client';

import { AuthPage } from '@/components/marketing/AuthPage';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const handleLogin = (name: string) => {
    const user = {
      id: '1',
      firstName: name,
      lastName: '',
      email: `${name.toLowerCase()}@sphere.dev`,
      role: 'admin',
      plan: 'pro',
      timezone: 'Africa/Lagos',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    localStorage.setItem('sphere_user', JSON.stringify(user));
    router.push('/dashboard');
  };

  const handleSignup = (name: string) => {
    const user = {
      id: '1',
      firstName: name,
      lastName: '',
      email: `${name.toLowerCase()}@sphere.dev`,
      role: 'admin',
      plan: 'pro',
      timezone: 'Africa/Lagos',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    localStorage.setItem('sphere_user', JSON.stringify(user));
    router.push('/dashboard');
  };

  return (
    <AuthPage
      onBack={handleBack}
      onLogin={handleLogin}
      onSignup={handleSignup}
    />
  );
}