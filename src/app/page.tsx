'use client';

import { useState, useEffect } from 'react';
import { LandingPage } from '@/components/marketing/LandingPage';
import { AuthPage } from '@/components/marketing/AuthPage';
import { AppLayout } from '@/components/layout/AppLayout';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { AuthProvider } from '@/contexts/AuthContext';

export default function Home() {
  const [view, setView] = useState<'landing' | 'auth' | 'app'>('landing');

  useEffect(() => {
    const savedUser = localStorage.getItem('sphere_user');
    if (savedUser) {
      setView('app');
    }
  }, []);

  const handleShowAuth = () => setView('auth');
  const handleShowLanding = () => setView('landing');
  
  const handleLogin = (name: string) => {
    const user = { id: '1', firstName: name, lastName: '', email: `${name.toLowerCase()}@sphere.dev`, role: 'admin', plan: 'pro', timezone: 'Africa/Lagos', createdAt: new Date(), updatedAt: new Date() };
    localStorage.setItem('sphere_user', JSON.stringify(user));
    setView('app');
  };

  const handleSignup = (name: string) => {
    const user = { id: '1', firstName: name, lastName: '', email: `${name.toLowerCase()}@sphere.dev`, role: 'admin', plan: 'pro', timezone: 'Africa/Lagos', createdAt: new Date(), updatedAt: new Date() };
    localStorage.setItem('sphere_user', JSON.stringify(user));
    setView('app');
  };

  if (view === 'landing') {
    return <LandingPage onGetStarted={handleShowAuth} onSignIn={handleShowAuth} />;
  }

  if (view === 'auth') {
    return <AuthPage onBack={handleShowLanding} onLogin={handleLogin} onSignup={handleSignup} />;
  }

  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <AppLayout />
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}