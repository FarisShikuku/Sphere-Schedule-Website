'use client';

import { useToast } from '@/contexts/ToastContext';

export function AnalyticsPage() {
  const { showToast } = useToast();

  const weeklyData = [{ day: 'MON', height: 40, label: 'MON' }, { day: 'TUE', height: 70, label: 'TUE' }, { day: 'WED', height: 90, label: 'WED ▲', isToday: true }, { day: 'THU', height: 60, label: 'THU' }, { day: 'FRI', height: 80, label: 'FRI' }, { day: 'SAT', height: 25, label: 'SAT' }, { day: 'SUN', height: 15, label: 'SUN' }];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div><div style={{ fontFamily: 'var(--font-outfit)', fontSize: '20px', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>Analytics</div><div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '2px' }}>Productivity insights — Week of March 25</div></div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {[{ icon: 'fire-flame-curved', value: '92%', label: 'Productivity Score', trend: '+5% this week', color: '#7c6cf8', bg: 'rgba(124,108,248,0.12)' }, { icon: 'check-double', value: '75%', label: 'Task Completion', trend: '18 of 24', color: '#2dd4a0', bg: 'rgba(45,212,160,0.12)' }, { icon: 'brain', value: '6.5h', label: 'Focus Time', trend: '+1.2h vs avg', color: '#22d3ee', bg: 'rgba(34,211,238,0.12)' }, { icon: 'handshake', value: '12', label: 'Meetings This Week', trend: 'Same as last week', color: '#ffd166', bg: 'rgba(255,209,102,0.12)' }].map((stat) => (
          <div key={stat.label} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}><i className={`fas fa-${stat.icon}`} style={{ color: stat.color, fontSize: '14px' }}></i></div>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '24px', fontWeight: 800, color: 'var(--text)' }}>{stat.value}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-2)', marginBottom: '4px' }}>{stat.label}</div>
            <div style={{ fontSize: '10px', color: '#2dd4a0', display: 'flex', alignItems: 'center', gap: '3px' }}><i className="fas fa-arrow-up" style={{ fontSize: '8px' }}></i> {stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Weekly Activity Chart */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}><span style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Weekly Activity</span><button onClick={() => showToast('Export report', 'fa-download')} style={{ fontSize: '10px', fontWeight: 600, color: '#7c6cf8', background: 'none', border: 'none', cursor: 'pointer' }}><i className="fas fa-download" style={{ marginRight: '4px', fontSize: '9px' }}></i> Export</button></div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '140px' }}>
          {weeklyData.map((item) => (<div key={item.day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}><div style={{ width: '100%', background: item.isToday ? 'linear-gradient(to top, #7c6cf8, #a855f7)' : 'rgba(124,108,248,0.5)', borderRadius: '4px 4px 0 0', height: `${item.height}%`, cursor: 'pointer' }} onClick={() => showToast(`${item.label} activity details`, 'fa-chart-line')}></div><div style={{ fontSize: '9px', fontWeight: 600, color: item.isToday ? '#7c6cf8' : 'var(--text-3)' }}>{item.label}</div></div>))}
        </div>
      </div>

      {/* Additional Insights */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }} className="md:grid-cols-2">
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>Task Distribution</div>
          {[{ label: 'Completed', value: 18, total: 24, color: '#2dd4a0' }, { label: 'In Progress', value: 4, total: 24, color: '#ffd166' }, { label: 'Todo', value: 2, total: 24, color: '#7c6cf8' }].map((item) => (<div key={item.label} style={{ marginBottom: '10px' }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}><span style={{ fontSize: '11px', color: 'var(--text-2)' }}>{item.label}</span><span style={{ fontSize: '11px', fontWeight: 700, color: item.color }}>{item.value}/{item.total}</span></div><div style={{ height: '4px', background: 'var(--card-3)', borderRadius: '2px', overflow: 'hidden' }}><div style={{ height: '100%', width: `${(item.value / item.total) * 100}%`, background: item.color, borderRadius: '2px' }}></div></div></div>))}
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>Productivity Tips</div>
          {[{ icon: 'clock', text: 'Your most productive hours are 9 AM - 12 PM', color: '#7c6cf8' }, { icon: 'check-circle', text: 'You completed 75% of tasks this week', color: '#2dd4a0' }, { icon: 'chart-line', text: 'Focus time increased by 15% this month', color: '#ff6b8a' }, { icon: 'lightbulb', text: 'Schedule deep work blocks for better results', color: '#ffd166' }].map((tip, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', background: 'var(--card-2)', borderRadius: '10px', marginBottom: '8px', cursor: 'pointer' }} onClick={() => showToast(tip.text, 'fa-lightbulb')}><div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${tip.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className={`fas fa-${tip.icon}`} style={{ color: tip.color, fontSize: '12px' }}></i></div><span style={{ fontSize: '11px', color: 'var(--text-2)' }}>{tip.text}</span></div>))}
        </div>
      </div>
    </div>
  );
}