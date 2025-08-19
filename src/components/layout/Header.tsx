import React from 'react'

const Header: React.FC = () => {
  return (
    <header
      className="nav container"
      style={{
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,.06)',
      }}
    >
      {/* Brand */}
      <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div className="logo" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 600, fontSize: 16 }}>MV Digital Work</span>
          <small style={{ color: 'var(--muted)', fontWeight: 500 }}>AI Marketing</small>
        </div>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Search Box */}
        <input
          placeholder="Search businesses, reviews, posts..."
          style={{
            padding: '8px 14px',
            borderRadius: 12,
            background: 'var(--card)',
            border: '1px solid rgba(255,255,255,.08)',
            color: 'var(--text)',
            outline: 'none',
            width: 320,
            fontSize: 14,
          }}
        />

        {/* Create Button */}
        <button
          className="btn"
          style={{
            padding: '8px 16px',
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          + Create
        </button>

        {/* Profile */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>Hi, Admin</div>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'grid',
              placeItems: 'center',
              color: '#000',
              fontWeight: 700,
            }}
          >
            A
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
