'use client';

import { useState } from 'react';
import { useToast } from '@/contexts/ToastContext';

export function TasksPage() {
  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState('all');
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Morning Standup', project: 'Dev Team · Daily Sync', dueDate: 'Mar 25, 9:00 AM', priority: 'low', status: 'done' },
    { id: '2', title: 'Client Presentation', project: 'ABC Corp · Q1 Review', dueDate: 'Mar 25, 11:30 AM', priority: 'high', status: 'in-progress' },
    { id: '3', title: 'Project Review Session', project: 'Sphere Team · Phase 3', dueDate: 'Mar 25, 2:00 PM', priority: 'medium', status: 'todo' },
    { id: '4', title: 'Design System Audit', project: 'Design Studio', dueDate: 'Mar 26, 10:00 AM', priority: 'medium', status: 'todo' },
    { id: '5', title: 'Sprint Planning', project: 'Engineering · Week 12', dueDate: 'Mar 26, 9:30 AM', priority: 'high', status: 'todo' },
    { id: '6', title: 'Backend API Integration', project: 'Sphere ARIA', dueDate: 'Mar 27', priority: 'high', status: 'in-progress' },
    { id: '7', title: 'UI Mockup Review', project: 'Design · Mobile', dueDate: 'Mar 26, 2:00 PM', priority: 'low', status: 'todo' },
    { id: '8', title: 'Weekly Report', project: 'Management', dueDate: 'Mar 28', priority: 'low', status: 'blocked' },
  ]);

  const filters = [
    { id: 'all', label: 'All Tasks' },
    { id: 'today', label: 'Today' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
    { id: 'urgent', label: 'Urgent' },
    { id: 'week', label: 'This Week' },
  ];

  const toggleTaskStatus = (taskId: string) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, status: task.status === 'done' ? 'todo' : 'done' } : task
    ));
    const task = tasks.find(t => t.id === taskId);
    showToast(task?.status === 'done' ? 'Task reopened' : 'Task completed! ✓', task?.status === 'done' ? 'fa-rotate-left' : 'fa-check');
  };

  const getPriorityBadge = (priority: string) => {
    const config: Record<string, { color: string; bg: string; icon: string }> = {
      low: { color: '#2dd4a0', bg: 'rgba(45,212,160,0.12)', icon: 'fa-circle' },
      medium: { color: '#ffd166', bg: 'rgba(255,209,102,0.12)', icon: 'fa-circle' },
      high: { color: '#ff6b6b', bg: 'rgba(255,107,107,0.12)', icon: 'fa-fire' },
    };
    const c = config[priority];
    return (
      <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px', background: c.bg, color: c.color, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        <i className={`fas ${c.icon}`} style={{ fontSize: c.icon === 'fa-circle' ? '6px' : '8px' }}></i>
        {priority === 'high' ? 'High' : priority === 'medium' ? 'Medium' : 'Low'}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    const config: Record<string, { color: string; bg: string; label: string }> = {
      todo: { color: '#7c6cf8', bg: 'rgba(124,108,248,0.12)', label: 'To Do' },
      'in-progress': { color: '#ffd166', bg: 'rgba(255,209,102,0.12)', label: 'In Progress' },
      done: { color: '#2dd4a0', bg: 'rgba(45,212,160,0.12)', label: 'Completed' },
      blocked: { color: '#ff6b6b', bg: 'rgba(255,107,107,0.12)', label: 'Blocked' },
    };
    const c = config[status];
    return (
      <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px', background: c.bg, color: c.color }}>
        {c.label}
      </span>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '20px', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>My Tasks</div>
          <div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '2px' }}>24 tasks this week · 5 pending today</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => showToast('Filters applied!', 'fa-filter')} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'transparent', color: 'var(--text-2)', border: '1px solid var(--border-2)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.color = '#7c6cf8'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-2)'; }}>
            <i className="fas fa-filter" style={{ marginRight: '6px', fontSize: '10px' }}></i> Filter
          </button>
          <button onClick={() => showToast('New task created!', 'fa-plus')} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'linear-gradient(135deg, #7c6cf8, #a855f7)', color: 'white', border: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
            <i className="fas fa-plus" style={{ marginRight: '6px', fontSize: '10px' }}></i> Add Task
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {filters.map((filter) => (
          <button key={filter.id} onClick={() => setActiveFilter(filter.id)} style={{ padding: '5px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: activeFilter === filter.id ? '#7c6cf8' : 'var(--card)', color: activeFilter === filter.id ? 'white' : 'var(--text-2)', border: activeFilter === filter.id ? 'none' : '1px solid var(--border)', cursor: 'pointer' }} onMouseEnter={(e) => { if (activeFilter !== filter.id) { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.color = '#7c6cf8'; } }} onMouseLeave={(e) => { if (activeFilter !== filter.id) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; } }}>
            {filter.label}
          </button>
        ))}
      </div>

      {/* Tasks Table */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '30px 1fr 100px 80px 80px 70px', padding: '10px 12px', borderBottom: '1px solid var(--border)', background: 'var(--card-2)', fontSize: '10px', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase' }} className="max-md:grid-cols-[30px_1fr_70px_60px]">
          <div></div>
          <div>Task</div>
          <div className="hidden md:block">Due Date</div>
          <div>Priority</div>
          <div className="hidden sm:block">Status</div>
          <div>Actions</div>
        </div>

        {/* Rows */}
        {tasks.map((task) => (
          <div key={task.id} style={{ display: 'grid', gridTemplateColumns: '30px 1fr 100px 80px 80px 70px', padding: '10px 12px', borderBottom: '1px solid var(--border)', alignItems: 'center', cursor: 'pointer' }} className="max-md:grid-cols-[30px_1fr_70px_60px hover:bg-card-2" onClick={() => showToast('Task opened!', 'fa-external-link')}>
            <div>
              <button onClick={(e) => { e.stopPropagation(); toggleTaskStatus(task.id); }} style={{ width: '18px', height: '18px', borderRadius: '5px', border: task.status === 'done' ? '2px solid #2dd4a0' : '2px solid var(--border-2)', background: task.status === 'done' ? '#2dd4a0' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                {task.status === 'done' && <i className="fas fa-check" style={{ color: 'white', fontSize: '8px' }}></i>}
              </button>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: task.status === 'done' ? 'var(--text-3)' : 'var(--text)', textDecoration: task.status === 'done' ? 'line-through' : 'none' }}>{task.title}</div>
              <div style={{ fontSize: '10px', color: 'var(--text-2)', marginTop: '2px' }}>{task.project}</div>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-2)' }} className="hidden md:block">{task.dueDate}</div>
            <div>{getPriorityBadge(task.priority)}</div>
            <div className="hidden sm:block">{getStatusBadge(task.status)}</div>
            <div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button onClick={(e) => { e.stopPropagation(); showToast('Edit task', 'fa-pen'); }} style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'var(--card-3)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-3)' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#7c6cf8'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--card-3)'; e.currentTarget.style.color = 'var(--text-3)'; }}>
                  <i className="fas fa-pen" style={{ fontSize: '9px' }}></i>
                </button>
                <button onClick={(e) => { e.stopPropagation(); showToast('Task deleted', 'fa-trash'); }} style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'var(--card-3)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-3)' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#ff6b6b'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--card-3)'; e.currentTarget.style.color = 'var(--text-3)'; }}>
                  <i className="fas fa-trash" style={{ fontSize: '9px' }}></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}