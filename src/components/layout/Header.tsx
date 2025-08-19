import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="nav container" style={{paddingTop:12, paddingBottom:12}}>
      <div className="brand">
        <div className="logo" />
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>MV Digital Work</span>
          <small style={{color:'var(--muted)', fontWeight:500}}>AI Marketing</small>
        </div>
      </div>

      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <input
          placeholder="Search businesses, reviews, posts..."
          style={{
            padding:'8px 12px',
            borderRadius:12,
            background:'var(--card)',
            border:'1px solid rgba(255,255,255,.06)',
            color:'var(--text)',
            outline:'none',
            width:320
          }}
        />
        <button className="btn">+ Create</button>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <div style={{fontSize:13, color:'var(--muted)'}}>Hi, Admin</div>
          <div style={{width:36, height:36, borderRadius:999, background:'var(--accent)', display:'grid', placeItems:'center', color:'#000', fontWeight:700}}>A</div>
        </div>
      </div>
    </header>
  )
}
export default Header
