'use client';

import { useState } from 'react';
import { useToast } from '@/contexts/ToastContext';

export function DashboardPage() {
  const { showToast } = useToast();
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Team Standup Meeting', time: '9:00 AM', location: 'Room A', priority: '#2dd4a0', completed: true },
    { id: '2', title: 'Client Presentation', time: '11:30 AM', location: 'ABC Corp', priority: '#ff6b6b', completed: false },
    { id: '3', title: 'Project Review Session', time: '2:00 PM', location: 'Remote', priority: '#7c6cf8', completed: false },
    { id: '4', title: 'Design Feedback Session', time: '4:30 PM', location: 'Design Studio', priority: '#ffd166', completed: false },
  ]);

  const toggleTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
    const task = tasks.find(t => t.id === taskId);
    showToast(task?.completed ? 'Task reopened' : 'Task completed! ✓', task?.completed ? 'fa-rotate-left' : 'fa-check');
  };

  const stats = [
    { icon: 'list-check', value: '24', label: 'Total Tasks', trend: '+3 today', color: '#7c6cf8', bg: 'rgba(124,108,248,0.12)' },
    { icon: 'check-double', value: '18', label: 'Completed', trend: '75% rate', color: '#2dd4a0', bg: 'rgba(45,212,160,0.12)' },
    { icon: 'video', value: '4', label: 'Meetings Today', trend: 'Next in 45m', color: '#ffd166', bg: 'rgba(255,209,102,0.12)' },
    { icon: 'fire-flame-curved', value: '92%', label: 'Productivity', trend: '+5% vs last week', color: '#ff6b8a', bg: 'rgba(255,107,138,0.12)' },
  ];

  const weekDays = [
    { name: 'MON', num: 23, dots: ['#7c6cf8'] },
    { name: 'TUE', num: 24, dots: ['#ff6b8a', '#2dd4a0'] },
    { name: 'WED', num: 25, dots: [], isToday: true },
    { name: 'THU', num: 26, dots: ['#ffd166'] },
    { name: 'FRI', num: 27, dots: ['#7c6cf8'] },
    { name: 'SAT', num: 28, dots: [] },
    { name: 'SUN', num: 29, dots: [] },
  ];

  const agendaItems = [
    { time: '9:00', title: '✅ Team Standup', duration: '30 min', location: 'Room A', color: '#2dd4a0' },
    { time: '11:30', title: '🔥 Client Presentation', duration: '90 min', location: 'ABC Corp', color: '#ff6b6b' },
    { time: '2:00', title: '📋 Project Review', duration: '60 min', location: 'Remote', color: '#7c6cf8' },
    { time: '4:30', title: '🎨 Design Feedback', duration: '45 min', location: 'Design Studio', color: '#ffd166' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '20px', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>
            Good morning, <span style={{ color: '#7c6cf8' }}>Faris</span> 👋
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '2px' }}>
            Here's what's on your plate today — Wednesday, March 25
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => showToast('New task created!', 'fa-plus')}
            style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'transparent', color: 'var(--text-2)', border: '1px solid var(--border-2)', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.color = '#7c6cf8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-2)'; }}
          >
            <i className="fas fa-plus" style={{ marginRight: '6px', fontSize: '10px' }}></i> New Task
          </button>
          <button
            onClick={() => showToast('Focus mode activated!', 'fa-bolt')}
            style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'linear-gradient(135deg, #7c6cf8, #a855f7)', color: 'white', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(124,108,248,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <i className="fas fa-bolt" style={{ marginRight: '6px', fontSize: '10px' }}></i> Focus Mode
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`fas fa-${stat.icon}`} style={{ color: stat.color, fontSize: '14px' }}></i>
              </div>
              <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '24px', fontWeight: 800, color: 'var(--text)' }}>{stat.value}</div>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-2)', marginBottom: '4px' }}>{stat.label}</div>
            <div style={{ fontSize: '10px', color: '#2dd4a0', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <i className="fas fa-arrow-up" style={{ fontSize: '8px' }}></i> {stat.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Mid Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Banner */}
        <div style={{ background: 'linear-gradient(135deg, #5e4ff0, #7C3AED, #A855F7)', borderRadius: '12px', padding: '16px 20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>🎯 Client Presentation in 45 minutes</div>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Quarterly review with ABC Corporation is coming up.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => showToast('Focus session started!', 'fa-bolt')} style={{ padding: '5px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: 'white', color: '#5e4ff0', border: 'none', cursor: 'pointer' }}><i className="fas fa-bolt" style={{ marginRight: '4px' }}></i> Focus</button>
              <button onClick={() => showToast('Joining meeting...', 'fa-video')} style={{ padding: '5px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', cursor: 'pointer' }}><i className="fas fa-video" style={{ marginRight: '4px' }}></i> Join</button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px' }}>
          <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>Quick Actions</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            {[
              { icon: 'plus', label: 'New Task', color: '#7c6cf8', bg: 'rgba(124,108,248,0.12)' },
              { icon: 'video', label: 'Meeting', color: '#2dd4a0', bg: 'rgba(45,212,160,0.12)' },
              { icon: 'calendar-plus', label: 'Appointment', color: '#ffd166', bg: 'rgba(255,209,102,0.12)' },
              { icon: 'sticky-note', label: 'Note', color: '#ff6b8a', bg: 'rgba(255,107,138,0.12)' },
            ].map((item) => (
              <button key={item.label} onClick={() => showToast(`${item.label} created!`, `fa-${item.icon}`)} style={{ padding: '8px', borderRadius: '10px', background: 'var(--card-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.transform = 'translateY(-1px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`fas fa-${item.icon}`} style={{ color: item.color, fontSize: '12px' }}></i>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-2)' }}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Week Strip */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>This Week</span>
          <button style={{ fontSize: '11px', fontWeight: 600, color: '#7c6cf8', background: 'none', border: 'none', cursor: 'pointer' }}>Full Calendar →</button>
        </div>
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto' }}>
          {weekDays.map((day) => (
            <div key={day.name} style={{ flexShrink: 0, minWidth: '52px', background: day.isToday ? 'linear-gradient(135deg, #7c6cf8, #a855f7)' : 'var(--card-2)', border: day.isToday ? 'none' : '1px solid var(--border)', borderRadius: '10px', padding: '8px 6px', textAlign: 'center' }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: day.isToday ? 'rgba(255,255,255,0.7)' : 'var(--text-3)', marginBottom: '3px' }}>{day.name}</div>
              <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '14px', fontWeight: 800, color: day.isToday ? 'white' : 'var(--text)', marginBottom: '3px' }}>{day.num}</div>
              <div style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
                {day.dots.map((dot, i) => (<div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: dot }}></div>))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Today's Tasks */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Today's Tasks</span>
            <button style={{ fontSize: '11px', fontWeight: 600, color: '#7c6cf8', background: 'none', border: 'none', cursor: 'pointer' }}>View All →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {tasks.map((task) => (
              <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => toggleTask(task.id)} style={{ width: '18px', height: '18px', borderRadius: '5px', border: task.completed ? '2px solid #2dd4a0' : '2px solid var(--border-2)', background: task.completed ? '#2dd4a0' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  {task.completed && <i className="fas fa-check" style={{ color: 'white', fontSize: '8px' }}></i>}
                </button>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: task.completed ? 'var(--text-3)' : 'var(--text)', textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</div>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '2px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '9px', padding: '2px 6px', borderRadius: '10px', background: 'rgba(124,108,248,0.12)', color: '#7c6cf8' }}><i className="fas fa-clock" style={{ marginRight: '2px', fontSize: '7px' }}></i> {task.time}</span>
                    <span style={{ fontSize: '9px', padding: '2px 6px', borderRadius: '10px', background: 'rgba(45,212,160,0.12)', color: '#2dd4a0' }}><i className="fas fa-map-marker-alt" style={{ marginRight: '2px', fontSize: '7px' }}></i> {task.location}</span>
                  </div>
                </div>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: task.priority }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Today's Schedule</span>
            <button style={{ fontSize: '11px', fontWeight: 600, color: '#7c6cf8', background: 'none', border: 'none', cursor: 'pointer' }}>Calendar →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {agendaItems.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flexShrink: 0, width: '45px', textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-2)' }}>{item.time}</div>
                  <div style={{ width: '1px', height: '20px', margin: '4px auto 0', background: item.color }}></div>
                </div>
                <div style={{ flex: 1, background: 'var(--card-2)', border: '1px solid var(--border)', borderRadius: '10px', padding: '8px 10px', borderLeft: `2px solid ${item.color}` }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>{item.title}</div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '3px', fontSize: '10px', color: 'var(--text-2)' }}>
                    <span><i className="fas fa-clock" style={{ marginRight: '2px', fontSize: '8px' }}></i> {item.duration}</span>
                    <span><i className="fas fa-map-marker-alt" style={{ marginRight: '2px', fontSize: '8px' }}></i> {item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}