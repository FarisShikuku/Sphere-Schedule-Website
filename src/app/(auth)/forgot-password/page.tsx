'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-6">
      <div className="max-w-md w-full bg-card border border-border rounded-xl p-8">
        <div className="text-center mb-8">
          <h1 className="font-outfit text-2xl font-bold text-text">Forgot Password</h1>
          <p className="text-text-2 text-sm mt-2">Enter your email to reset your password</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-text-2 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-card-2 border border-border text-text focus:outline-none focus:border-sphere"
              placeholder="you@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-sphere to-purple-600 text-white font-semibold hover:translate-y-[-1px] transition-all"
          >
            Send Reset Link
          </button>
        </form>
        <button
          onClick={() => router.push('/login')}
          className="w-full mt-4 text-center text-sm text-sphere hover:underline"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}