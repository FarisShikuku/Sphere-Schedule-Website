'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/lib/types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USER: User = {
  id: '1',
  firstName: 'Faris',
  lastName: 'Developer',
  email: 'faris@sphere.dev',
  role: 'admin',
  plan: 'pro',
  timezone: 'Africa/Lagos',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved session
    const savedUser = localStorage.getItem('sphere_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Mock login - in production, this would call your API
    await new Promise(resolve => setTimeout(resolve, 800));
    setUser(MOCK_USER);
    localStorage.setItem('sphere_user', JSON.stringify(MOCK_USER));
    setIsLoading(false);
  };

  const signup = async (firstName: string, lastName: string, email: string, password: string) => {
    setIsLoading(true);
    // Mock signup - in production, this would call your API
    await new Promise(resolve => setTimeout(resolve, 800));
    const newUser = { ...MOCK_USER, firstName, lastName, email };
    setUser(newUser);
    localStorage.setItem('sphere_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sphere_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}