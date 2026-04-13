'use client';

import { Suspense } from 'react';
import { AuthPage } from '@/components/marketing/AuthPage';
import { useRouter } from 'next/navigation';

function RegisterContent() {
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

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-text">Loading...</div>
      </div>
    }>
      <RegisterContent />
    </Suspense>
  );
}