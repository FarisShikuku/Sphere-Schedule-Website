export function Toast({ message = 'Saved', tone = 'success' }: { message?: string; tone?: 'success' | 'error' }) {
  const tones = { success: 'bg-emerald-600', error: 'bg-red-600' };
  return <div className={`rounded-full px-4 py-2 text-white text-sm ${tones[tone]}`}>{message}</div>;
}
