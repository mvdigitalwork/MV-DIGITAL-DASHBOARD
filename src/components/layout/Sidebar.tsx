import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconDashboard, IconMessage, IconPhoto, IconChart, IconPlug, IconReport, IconSettings } from '../../icon'

const items = [
  { to: '/', label: 'Dashboard', icon: <IconDashboard /> },
  { to: '/reviews', label: 'Reviews', icon: <IconMessage /> },
  { to: '/posts', label: 'Post Generator', icon: <IconPhoto /> },
  { to: '/insights', label: 'Insights', icon: <IconChart /> },
  { to: '/integrations', label: 'Integrations', icon: <IconPlug /> },
  { to: '/reports', label: 'Reports', icon: <IconReport /> },
  { to: '/settings', label: 'Settings', icon: <IconSettings /> },
]

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar card" style={{ width: 240, padding: 20 }}>
      {/* Logo / Header */}
      <div style={{ marginBottom: 24, fontWeight: 700, fontSize: 18, color: "var(--accent)" }}>
        MV DIGITAL WORK
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(i => (
          <NavLink
            key={i.to}
            to={i.to}
            className={({ isActive }) =>
              'side-link' + (isActive ? ' active' : '')
            }
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 12px',
              borderRadius: 12,
            }}
          >
            <span style={{ width: 20, display: 'inline-grid', placeItems: 'center' }}>
              {i.icon}
            </span>
            <span>{i.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer/Status */}
      <div style={{ marginTop: 20, fontSize: 14 }} className="status">
        <span className="dot" /> Connected
      </div>
    </aside>
  )
}

export default Sidebar
