'use client';

import { AuthPage } from '@/components/marketing/AuthPage';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const handleLogin = (name: string) => {
    localStorage.setItem('userName', name);
    router.push('/dashboard');
  };

  const handleSignup = (name: string) => {
    localStorage.setItem('userName', name);
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