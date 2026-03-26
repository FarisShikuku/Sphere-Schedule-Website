import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';

const tasks = [
  { title: 'Design new onboarding flow', priority: 'High' },
  { title: 'Prep Q2 roadmap review', priority: 'Medium' },
  { title: 'Send client follow-up', priority: 'Low' },
];

export default function TasksPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <Button>New Task</Button>
      </div>
      <div className="stagger grid gap-4">
        {tasks.map((t) => (
          <div key={t.title} className="p-5 rounded-2xl bg-white border border-slate-100 flex items-center justify-between">
            <div>
              <p className="font-medium">{t.title}</p>
              <p className="text-xs text-slate-500">Due today</p>
            </div>
            <Chip tone={t.priority == 'High' ? 'warning' : 'neutral'}>{t.priority}</Chip>
          </div>
        ))}
      </div>
    </div>
  );
}
