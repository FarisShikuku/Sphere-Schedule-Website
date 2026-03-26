import { Toggle } from '@/components/ui/Toggle';
import { Select } from '@/components/ui/Select';

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-100">
          <p className="font-medium">Appearance</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-slate-600">Dark mode</span>
            <Toggle checked />
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-100">
          <p className="font-medium">Notifications</p>
          <div className="mt-4">
            <Select label="Email digest" />
          </div>
        </div>
      </div>
    </div>
  );
}
