import type { ReactNode } from 'react';

export function Modal({ open, title, children }: { open: boolean; title?: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-glow">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
