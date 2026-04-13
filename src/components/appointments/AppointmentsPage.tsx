'use client';

import { useState } from 'react';
import { useToast } from '@/contexts/ToastContext';

export function AppointmentsPage() {
  const { showToast } = useToast();

  const todayAppointments = [
    { id: '1', title: 'Client Onboarding Call', time: '9:00', duration: '30 min', location: 'Video Call', client: 'Sarah Mitchell', type: 'Onboarding', status: 'completed', color: '#2dd4a0' },
    { id: '2', title: 'Quarterly Business Review', time: '11:30', duration: '90 min', location: 'ABC Corp HQ', client: 'ABC Corporation', type: 'Business', status: 'in-progress', color: '#ff6b6b' },
    { id: '3', title: '1:1 Mentorship Session', time: '14:00', duration: '60 min', location: 'Zoom', client: 'James Okoye', type: 'Mentoring', status: 'upcoming', color: '#7c6cf8' },
    { id: '4', title: 'Design Consultation', time: '16:30', duration: '45 min', location: 'Design Studio', client: 'Remi Adisa', type: 'Design', status: 'upcoming', color: '#ffd166' },
  ];

  const tomorrowAppointments = [
    { id: '5', title: 'Product Strategy Meeting', time: '10:00', duration: '60 min', location: 'Remote', client: 'Product Team', type: 'Strategy', status: 'upcoming', color: '#ff6b8a' },
  ];

  const getStatusBadge = (status: string) => {
    const config: Record<string, { color: string; bg: string; label: string }> = {
      completed: { color: '#2dd4a0', bg: 'rgba(45,212,160,0.12)', label: 'Completed' },
      'in-progress': { color: '#ffd166', bg: 'rgba(255,209,102,0.12)', label: 'In Progress' },
      upcoming: { color: '#7c6cf8', bg: 'rgba(124,108,248,0.12)', label: 'Upcoming' },
    };
    const c = config[status];
    return (
      <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '20px', background: c.bg, color: c.color }}>
        {c.label}
      </span>
    );
  };

  // Fixed: Use full day names instead of single letters to avoid duplicate keys
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2;
    return { day: day > 0 && day <= 31 ? day : day <= 0 ? 31 + day : day - 31, isCurrentMonth: day > 0 && day <= 31 };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '20px', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>
            Appointments
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '2px' }}>
            6 appointments this week
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => showToast('Booking link copied!', 'fa-link')}
            style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'transparent', color: 'var(--text-2)', border: '1px solid var(--border-2)', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.color = '#7c6cf8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-2)'; }}
          >
            <i className="fas fa-share-alt" style={{ marginRight: '6px', fontSize: '10px' }}></i> Share Link
          </button>
          <button
            onClick={() => showToast('Appointment booked!', 'fa-plus')}
            style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: 'linear-gradient(135deg, #7c6cf8, #a855f7)', color: 'white', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <i className="fas fa-plus" style={{ marginRight: '6px', fontSize: '10px' }}></i> New
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="lg:grid-cols-[1fr_260px]">
        {/* Appointments List */}
        <div>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '8px' }}>
            Today · March 25
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {todayAppointments.map((apt) => (
              <div
                key={apt.id}
                onClick={() => showToast('Appointment details opened', 'fa-clock')}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '10px 12px', cursor: 'pointer' }}
                className="hover:translate-x-0.5"
              >
                <div style={{ width: '3px', height: '40px', borderRadius: '2px', background: apt.color, flexShrink: 0 }}></div>
                <div style={{ flexShrink: 0, minWidth: '60px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 800, color: 'var(--text)' }}>{apt.time}</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-2)' }}>{apt.duration}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '2px' }}>{apt.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '9px', color: 'var(--text-2)' }}>
                    <span><i className="fas fa-video" style={{ marginRight: '2px', fontSize: '8px' }}></i> {apt.location}</span>
                    <span><i className="fas fa-user" style={{ marginRight: '2px', fontSize: '8px' }}></i> {apt.client}</span>
                    <span><i className="fas fa-tag" style={{ marginRight: '2px', fontSize: '8px' }}></i> {apt.type}</span>
                  </div>
                </div>
                <div>{getStatusBadge(apt.status)}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--text-3)', margin: '16px 0 8px' }}>
            Tomorrow · March 26
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tomorrowAppointments.map((apt) => (
              <div
                key={apt.id}
                onClick={() => showToast('Appointment details opened', 'fa-clock')}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '10px 12px', cursor: 'pointer' }}
                className="hover:translate-x-0.5"
              >
                <div style={{ width: '3px', height: '40px', borderRadius: '2px', background: apt.color, flexShrink: 0 }}></div>
                <div style={{ flexShrink: 0, minWidth: '60px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 800, color: 'var(--text)' }}>{apt.time}</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-2)' }}>{apt.duration}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '2px' }}>{apt.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '9px', color: 'var(--text-2)' }}>
                    <span><i className="fas fa-video" style={{ marginRight: '2px', fontSize: '8px' }}></i> {apt.location}</span>
                    <span><i className="fas fa-users" style={{ marginRight: '2px', fontSize: '8px' }}></i> {apt.client}</span>
                    <span><i className="fas fa-tag" style={{ marginRight: '2px', fontSize: '8px' }}></i> {apt.type}</span>
                  </div>
                </div>
                <div>{getStatusBadge(apt.status)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Calendar */}
        <div>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px', marginBottom: '12px' }}>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>
              March 2026
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '8px' }}>
              {weekDays.map((day) => (
                <div key={day} style={{ textAlign: 'center', fontSize: '9px', fontWeight: 700, color: 'var(--text-3)', padding: '4px 0' }}>
                  {day}
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
              {calendarDays.map((day, i) => (
                <button
                  key={`cal-day-${i}`}
                  onClick={() => showToast(`March ${day.day} selected`, 'fa-calendar-day')}
                  style={{
                    textAlign: 'center',
                    padding: '4px 0',
                    borderRadius: '6px',
                    fontSize: '10px',
                    background: day.day === 25 && day.isCurrentMonth ? 'linear-gradient(135deg, #7c6cf8, #a855f7)' : 'transparent',
                    color: day.day === 25 && day.isCurrentMonth ? 'white' : day.isCurrentMonth ? 'var(--text)' : 'var(--text-3)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!(day.day === 25 && day.isCurrentMonth)) {
                      e.currentTarget.style.background = 'var(--card-2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(day.day === 25 && day.isCurrentMonth)) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {day.day}
                </button>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px' }}>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
              Your booking link
            </div>
            <div style={{ background: 'var(--card-2)', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px', fontSize: '10px', color: 'var(--text-2)', fontFamily: 'monospace' }}>
              sphere.app/book/faris
            </div>
            <button
              onClick={() => showToast('Link copied!', 'fa-copy')}
              style={{
                width: '100%',
                marginTop: '8px',
                padding: '6px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #7c6cf8, #a855f7)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <i className="fas fa-copy" style={{ marginRight: '4px', fontSize: '9px' }}></i> Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}