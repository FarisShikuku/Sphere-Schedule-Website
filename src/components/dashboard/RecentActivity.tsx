const items = [
  'Completed Design Review task',
  'Added new meeting with Sales',
  'Rescheduled client kickoff',
];

export function RecentActivity() {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-100">
      <h3 className="text-lg font-semibold">Recent Activity</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {items.map((i) => (
          <li key={i}>? {i}</li>
        ))}
      </ul>
    </div>
  );
}
