import React from 'react'

const Header: React.FC = () => {
  return (
    <header
      className="nav"
      style={{
        width: '100%',
        padding: '14px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,.08)',
        background: 'var(--card)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Brand */}
      <div
        className="brand"
        style={{ display: 'flex', alignItems: 'center', gap: 10 }}
      >
        <div
          className="logo"
          style={{
            width: 36,
            height: 36,
            borderRadius: 12, // ✅ consistent rounded square
            background: 'linear-gradient(135deg, #64d2ff, #3ddc97)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{ fontWeight: 600, fontSize: 16 }}>MV Digital Work</span>
          <small style={{ color: 'var(--muted)', fontWeight: 500 }}>
            AI Marketing
          </small>
        </div>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        {/* Search Box */}
        <input
          placeholder="Search businesses, reviews, posts..."
          style={{
            padding: '9px 14px',
            borderRadius: 8, // ✅ softer but uniform
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
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
            padding: '9px 18px',
            borderRadius: 8, // ✅ same as input
            fontSize: 14,
            fontWeight: 500,
            background:
              'linear-gradient(135deg, rgba(100,210,255,0.2), rgba(61,220,151,0.2))',
            border: '1px solid rgba(255,255,255,0.1)',
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
              borderRadius: '50%', // ✅ avatar circle
              background: 'var(--accent)',
              display: 'grid',
              placeItems: 'center',
              color: '#000',
              fontWeight: 700,
              boxShadow: '0 0 0 2px rgba(255,255,255,0.1)',
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
