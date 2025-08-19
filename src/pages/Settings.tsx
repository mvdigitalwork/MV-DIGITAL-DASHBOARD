import React from 'react'


const Field: React.FC<{label:string; children:React.ReactNode}> = ({label, children}) => (
<label style={{display:'grid', gap:6}}>
<span style={{color:'var(--muted)'}}>{label}</span>
{children}
</label>
)


const inputStyle: React.CSSProperties = {width:'100%', background:'transparent', color:'var(--text)', border:'1px solid rgba(255,255,255,.12)', borderRadius:12, padding:12}


const Settings: React.FC = () => (
<div>
<h1>Settings</h1>
<p className="sub">Your business details & preferences.</p>
<div className="card" style={{display:'grid', gap:12}}>
<Field label="Business Name"><input style={inputStyle} placeholder="MV Digital Work"/></Field>
<Field label="Category"><input style={inputStyle} placeholder="Marketing Agency"/></Field>
<Field label="Address"><input style={inputStyle} placeholder="Navi Mumbai, IN"/></Field>
<div style={{display:'flex', gap:12, justifyContent:'flex-end'}}>
<button className="btn">Save</button>
</div>
</div>
</div>
)


export default Settings