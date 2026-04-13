'use client';

import { useState } from 'react';
import { useToast } from '@/contexts/ToastContext';

export function CalendarPage() {
  const { showToast } = useToast();
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2));

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const days = [];
    for (let i = firstDay - 1; i >= 0; i--) days.push({ day: prevMonthDays - i, isCurrentMonth: false });
    for (let i = 1; i <= daysInMonth; i++) days.push({ day: i, isCurrentMonth: true, isToday: i === 25 && month === 2 && year === 2026 });
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) days.push({ day: i, isCurrentMonth: false });
    return days;
  };

  const eventDays: Record<number, string[]> = { 9: ['#7c6cf8'], 11: ['#2dd4a0', '#ff6b8a'], 15: ['#ffd166'], 17: ['#7c6cf8'], 19: ['#ff6b6b', '#7c6cf8'], 20: ['#2dd4a0'], 22: ['#7c6cf8'], 25: ['#7c6cf8', '#ff6b6b', '#ffd166'], 26: ['#2dd4a0'], 28: ['#ff6b8a'] };
  const upcomingEvents = [{ day: 25, month: 'MAR', title: 'Client Presentation', time: '11:30 AM', location: 'ABC Corp' }, { day: 26, month: 'MAR', title: 'Sprint Planning', time: '9:30 AM', location: 'Remote' }, { day: 28, month: 'MAR', title: 'Weekly Retrospective', time: '3:00 PM', location: 'Office' }];
  const agendaItems = [{ time: '9:00', title: '✅ Team Standup', duration: '30 min', location: 'Room A', color: '#2dd4a0' }, { time: '11:30', title: '🔥 Client Presentation', duration: '90 min', location: 'ABC Corp', color: '#ff6b6b' }, { time: '14:00', title: '📋 Project Review', duration: '60 min', location: 'Remote', color: '#7c6cf8' }, { time: '16:30', title: '🎨 Design Feedback', duration: '45 min', location: 'Design Studio', color: '#ffd166' }];

  const calendarDays = getCalendarDays();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '20px', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>Calendar</div>
          <div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '2px' }}>March 2026</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => showToast('View changed', 'fa-calendar')} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'transparent', color: 'var(--text-2)', border: '1px solid var(--border-2)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.color = '#7c6cf8'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-2)'; }}>
            <i className="fas fa-list" style={{ marginRight: '6px', fontSize: '10px' }}></i> Week View
          </button>
          <button onClick={() => showToast('Event created!', 'fa-plus')} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'linear-gradient(135deg, #7c6cf8, #a855f7)', color: 'white', border: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
            <i className="fas fa-plus" style={{ marginRight: '6px', fontSize: '10px' }}></i> Add Event
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="lg:grid-cols-[1fr_280px]">
        {/* Main Calendar */}
        <div>
          {/* Month Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '16px', fontWeight: 800, color: 'var(--text)' }}>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button onClick={() => { setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)); showToast('Previous month', 'fa-calendar'); }} style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-2)' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#7c6cf8'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.color = 'var(--text-2)'; }}><i className="fas fa-chevron-left" style={{ fontSize: '10px' }}></i></button>
              <button onClick={() => { setCurrentMonth(new Date(2026, 2)); showToast('Jumped to today', 'fa-calendar-day'); }} style={{ padding: '0 12px', height: '28px', borderRadius: '8px', background: 'var(--card)', border: '1px solid var(--border)', fontSize: '11px', fontWeight: 600, color: 'var(--text-2)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#7c6cf8'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.color = 'var(--text-2)'; }}>Today</button>
              <button onClick={() => { setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)); showToast('Next month', 'fa-calendar'); }} style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-2)' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#7c6cf8'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.color = 'var(--text-2)'; }}><i className="fas fa-chevron-right" style={{ fontSize: '10px' }}></i></button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', background: 'var(--card-2)', borderBottom: '1px solid var(--border)', padding: '8px' }}>
              {weekDays.map((day) => (<div key={day} style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-3)', textAlign: 'center' }}>{day}</div>))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '6px', gap: '2px' }}>
              {calendarDays.map((day, index) => {
                const hasEvents = eventDays[day.day];
                return (
                  <button key={index} onClick={() => showToast(`March ${day.day}`, 'fa-calendar-day')} style={{ aspectRatio: '1.2', padding: '4px', borderRadius: '8px', cursor: 'pointer', background: day.isToday ? 'linear-gradient(135deg, #7c6cf8, #a855f7)' : 'transparent', boxShadow: day.isToday ? '0 2px 8px rgba(124,108,248,0.3)' : 'none' }} onMouseEnter={(e) => { if (!day.isToday) e.currentTarget.style.background = 'var(--card-2)'; }} onMouseLeave={(e) => { if (!day.isToday) e.currentTarget.style.background = 'transparent'; }}>
                    <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '11px', fontWeight: 700, color: day.isToday ? 'white' : (day.isCurrentMonth ? 'var(--text)' : 'var(--text-3)') }}>{day.day}</div>
                    {hasEvents && (<div style={{ display: 'flex', gap: '2px', marginTop: '2px', justifyContent: 'center' }}>{hasEvents.map((color, i) => (<div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: color }}></div>))}</div>)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Agenda */}
          <div style={{ marginTop: '16px' }}>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>Wednesday, March 25</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {agendaItems.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ flexShrink: 0, width: '45px', textAlign: 'right' }}><div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-2)' }}>{item.time}</div><div style={{ width: '1px', height: '20px', margin: '4px auto 0', background: item.color }}></div></div>
                  <div style={{ flex: 1, background: 'var(--card-2)', border: '1px solid var(--border)', borderRadius: '10px', padding: '8px 10px', borderLeft: `2px solid ${item.color}` }}><div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>{item.title}</div><div style={{ display: 'flex', gap: '8px', marginTop: '3px', fontSize: '10px', color: 'var(--text-2)' }}><span><i className="fas fa-clock" style={{ marginRight: '2px', fontSize: '8px' }}></i> {item.duration}</span><span><i className="fas fa-map-marker-alt" style={{ marginRight: '2px', fontSize: '8px' }}></i> {item.location}</span></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Upcoming Events */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}><span style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Upcoming</span><button style={{ fontSize: '10px', fontWeight: 600, color: '#7c6cf8', background: 'none', border: 'none', cursor: 'pointer' }}>See all</button></div>
            {upcomingEvents.map((event, idx) => (<div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}><div style={{ textAlign: 'center', minWidth: '40px', background: 'rgba(124,108,248,0.1)', borderRadius: '8px', padding: '4px' }}><div style={{ fontFamily: 'var(--font-outfit)', fontSize: '14px', fontWeight: 800, color: '#7c6cf8' }}>{event.day}</div><div style={{ fontSize: '8px', fontWeight: 600, color: 'var(--text-3)' }}>{event.month}</div></div><div><div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>{event.title}</div><div style={{ fontSize: '10px', color: 'var(--text-2)' }}>{event.time} · {event.location}</div></div></div>))}
          </div>

          {/* Progress */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px' }}>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>Progress</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}><span style={{ fontSize: '11px', color: 'var(--text-2)' }}>Tasks Done</span><span style={{ fontSize: '11px', fontWeight: 700, color: '#7c6cf8' }}>75%</span></div><div style={{ height: '4px', background: 'var(--card-3)', borderRadius: '2px', overflow: 'hidden' }}><div style={{ height: '100%', width: '75%', background: 'linear-gradient(90deg, #7c6cf8, #a855f7)', borderRadius: '2px' }}></div></div></div>
              <div><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}><span style={{ fontSize: '11px', color: 'var(--text-2)' }}>Meetings Attended</span><span style={{ fontSize: '11px', fontWeight: 700, color: '#2dd4a0' }}>3/4</span></div><div style={{ height: '4px', background: 'var(--card-3)', borderRadius: '2px', overflow: 'hidden' }}><div style={{ height: '100%', width: '75%', background: 'linear-gradient(90deg, #2dd4a0, #22d3ee)', borderRadius: '2px' }}></div></div></div>
              <div><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}><span style={{ fontSize: '11px', color: 'var(--text-2)' }}>Focus Hours</span><span style={{ fontSize: '11px', fontWeight: 700, color: '#ff6b8a' }}>6.5h</span></div><div style={{ height: '4px', background: 'var(--card-3)', borderRadius: '2px', overflow: 'hidden' }}><div style={{ height: '100%', width: '65%', background: 'linear-gradient(90deg, #ff6b8a, #ffd166)', borderRadius: '2px' }}></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}