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
    <aside className="sidebar card">
      <nav style={{display:'flex', flexDirection:'column', gap:8}}>
        {items.map(i => (
          <NavLink key={i.to} to={i.to} className={({isActive}) => 'side-link' + (isActive ? ' active' : '')}>
            <span style={{width:20, display:'inline-grid', placeItems:'center'}}>{i.icon}</span>
            <span>{i.label}</span>
          </NavLink>
        ))}
      </nav>

      <div style={{marginTop:18}} className="status">
        <span className="dot" /> Connected
      </div>
    </aside>
  )
}
export default Sidebar
