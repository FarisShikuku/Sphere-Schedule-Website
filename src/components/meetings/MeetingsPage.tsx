'use client';

import { useState } from 'react';
import { useToast } from '@/contexts/ToastContext';

export function MeetingsPage() {
  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState('today');

  const filters = [{ id: 'today', label: 'Today' }, { id: 'week', label: 'This Week' }, { id: 'upcoming', label: 'Upcoming' }, { id: 'past', label: 'Past' }];

  const meetings = [
    { id: '1', title: 'Client Presentation — Q1 Review', org: 'ABC Corporation', time: '11:30 AM – 1:00 PM', location: 'ABC Corp Office', status: 'live', participants: ['F', 'J', 'M', 'R'], participantCount: 3 },
    { id: '2', title: 'Project Phase 3 Review', org: 'Sphere Team', time: '2:00 PM – 3:00 PM', location: 'Remote', status: 'upcoming', participants: ['F', 'K', 'L'], participantCount: 5 },
    { id: '3', title: 'Morning Standup', org: 'Dev Team', time: '9:00 AM – 9:30 AM', location: 'Conference Room A', status: 'done', participants: ['F', 'M'], participantCount: 6 },
    { id: '4', title: 'Design Feedback Session', org: 'Design Studio', time: '4:30 PM – 5:15 PM', location: 'Design Studio', status: 'upcoming', participants: ['J', 'R', 'F'], participantCount: 2 },
  ];

  const getStatusBadge = (status: string) => {
    const config: Record<string, { color: string; bg: string; label: string; icon: string }> = {
      live: { color: '#ff6b6b', bg: 'rgba(255,107,107,0.15)', label: '● LIVE', icon: 'fa-circle' },
      upcoming: { color: '#7c6cf8', bg: 'rgba(124,108,248,0.15)', label: 'Upcoming', icon: 'fa-clock' },
      done: { color: '#2dd4a0', bg: 'rgba(45,212,160,0.15)', label: 'Done', icon: 'fa-check' },
    };
    const c = config[status];
    return (<span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px', background: c.bg, color: c.color, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><i className={`fas ${c.icon}`} style={{ fontSize: c.icon === 'fa-circle' ? '7px' : '9px' }}></i>{c.label}</span>);
  };

  const participantColors = ['#7c6cf8', '#ff6b8a', '#2dd4a0', '#ffd166', '#22d3ee'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div><div style={{ fontFamily: 'var(--font-outfit)', fontSize: '20px', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>Meetings</div><div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '2px' }}>4 scheduled today · 1 live now</div></div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => showToast('Meeting link copied!', 'fa-link')} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'transparent', color: 'var(--text-2)', border: '1px solid var(--border-2)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.color = '#7c6cf8'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-2)'; }}><i className="fas fa-link" style={{ marginRight: '6px', fontSize: '10px' }}></i> My Link</button>
          <button onClick={() => showToast('Meeting scheduled!', 'fa-video')} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'linear-gradient(135deg, #7c6cf8, #a855f7)', color: 'white', border: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}><i className="fas fa-plus" style={{ marginRight: '6px', fontSize: '10px' }}></i> Schedule Meeting</button>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>{filters.map((filter) => (<button key={filter.id} onClick={() => setActiveFilter(filter.id)} style={{ padding: '5px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: activeFilter === filter.id ? '#7c6cf8' : 'var(--card)', color: activeFilter === filter.id ? 'white' : 'var(--text-2)', border: activeFilter === filter.id ? 'none' : '1px solid var(--border)', cursor: 'pointer' }} onMouseEnter={(e) => { if (activeFilter !== filter.id) { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.color = '#7c6cf8'; } }} onMouseLeave={(e) => { if (activeFilter !== filter.id) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; } }}>{filter.label}</button>))}</div>

      {/* Meetings Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }} className="md:grid-cols-2">
        {meetings.map((meeting) => (
          <div key={meeting.id} style={{ background: 'var(--card)', border: meeting.status === 'live' ? '1px solid rgba(255,107,107,0.3)' : '1px solid var(--border)', borderRadius: '12px', padding: '14px', cursor: 'pointer' }} onClick={() => showToast('Meeting details', 'fa-info-circle')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div><div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>{meeting.title}</div><div style={{ fontSize: '10px', color: 'var(--text-2)', marginTop: '2px' }}>{meeting.org}</div></div>
              {getStatusBadge(meeting.status)}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '8px', fontSize: '10px', color: 'var(--text-2)' }}><span><i className="fas fa-clock" style={{ marginRight: '3px', fontSize: '9px' }}></i> {meeting.time}</span><span><i className="fas fa-map-marker-alt" style={{ marginRight: '3px', fontSize: '9px' }}></i> {meeting.location}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '10px' }}>{meeting.participants.map((initial, i) => (<div key={i} style={{ width: '24px', height: '24px', borderRadius: '7px', background: participantColors[i % participantColors.length], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: 'white', marginLeft: i > 0 ? '-6px' : '0', border: '2px solid var(--card)' }}>{initial}</div>))}{meeting.participantCount > 0 && <span style={{ fontSize: '9px', color: 'var(--text-2)', marginLeft: '4px' }}>+{meeting.participantCount}</span>}</div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button onClick={(e) => { e.stopPropagation(); showToast(meeting.status === 'live' ? 'Rescheduled!' : 'Details', meeting.status === 'live' ? 'fa-calendar' : 'fa-info-circle'); }} style={{ flex: 1, padding: '6px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '10px', fontWeight: 600, background: 'var(--card-2)', color: 'var(--text-2)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.color = '#7c6cf8'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}>{meeting.status === 'live' ? 'Reschedule' : 'Details'}</button>
              <button onClick={(e) => { e.stopPropagation(); showToast(meeting.status === 'live' ? 'Joining meeting…' : 'Link copied!', meeting.status === 'live' ? 'fa-video' : 'fa-link'); }} style={{ flex: 1, padding: '6px', borderRadius: '8px', fontSize: '10px', fontWeight: 600, background: meeting.status === 'live' ? 'linear-gradient(135deg, #7c6cf8, #a855f7)' : 'var(--card-2)', color: meeting.status === 'live' ? 'white' : 'var(--text-2)', border: meeting.status === 'live' ? 'none' : '1px solid var(--border)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}><i className={`fas ${meeting.status === 'live' ? 'fa-video' : 'fa-link'}`} style={{ fontSize: '9px' }}></i>{meeting.status === 'live' ? 'Join' : 'Copy Link'}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}