'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Password reset successfully');
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-6">
      <div className="max-w-md w-full bg-card border border-border rounded-xl p-8">
        <div className="text-center mb-8">
          <h1 className="font-outfit text-2xl font-bold text-text">Reset Password</h1>
          <p className="text-text-2 text-sm mt-2">Enter your new password</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-text-2 mb-2">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-card-2 border border-border text-text focus:outline-none focus:border-sphere"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-text-2 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-card-2 border border-border text-text focus:outline-none focus:border-sphere"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-sphere to-purple-600 text-white font-semibold hover:translate-y-[-1px] transition-all"
          >
            Reset Password
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