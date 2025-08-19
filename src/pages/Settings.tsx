import React from 'react'

const Field: React.FC<{label:string; children:React.ReactNode}> = ({label, children}) => (
  <label style={{display:'grid', gap:6}}>
    <span style={{color:'var(--muted)', fontSize:13, fontWeight:500}}>{label}</span>
    {children}
  </label>
)

const inputStyle: React.CSSProperties = {
  width:'100%',
  background:'transparent',
  color:'var(--text)',
  border:'1px solid rgba(255,255,255,.12)',
  borderRadius:10,
  padding:'10px 12px',
  fontSize:14
}

const Settings: React.FC = () => (
  <div style={{display:'grid', gap:20, maxWidth:1000, margin:'0 auto'}}>
    <div>
      <h1 style={{marginBottom:4}}>Settings</h1>
      <p className="sub">Update your business details, preferences & account security.</p>
    </div>

    <div className="card" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:28, padding:'24px'}}>
      
      {/* Left Column */}
      <div style={{display:'grid', gap:20}}>
        {/* Avatar Upload */}
        <div style={{display:'flex', alignItems:'center', gap:16}}>
          <div
            style={{
              width:64,
              height:64,
              borderRadius:'50%',
              background:'var(--accent)',
              display:'grid',
              placeItems:'center',
              fontWeight:700,
              fontSize:20,
              color:'#000'
            }}
          >
            A
          </div>
          <div style={{display:'grid', gap:6}}>
            <strong style={{fontSize:14}}>Profile Avatar</strong>
            <p className="sub" style={{margin:0}}>Upload your logo or profile picture.</p>
            <button className="btn" style={{width:'fit-content', padding:'6px 14px', fontSize:13}}>
              Upload
            </button>
          </div>
        </div>

        <hr style={{border:'none', borderTop:'1px solid rgba(255,255,255,.08)'}}/>

        {/* Business Details */}
        <Field label="Business Name">
          <input style={inputStyle} placeholder="MV Digital Work"/>
        </Field>
        <Field label="Category">
          <input style={inputStyle} placeholder="Marketing Agency"/>
        </Field>
        <Field label="Address">
          <input style={inputStyle} placeholder="Navi Mumbai, IN"/>
        </Field>
      </div>

      {/* Right Column */}
      <div style={{display:'grid', gap:20}}>
        {/* Preferences */}
        <Field label="Email Notifications">
          <select style={inputStyle}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </Field>

        <Field label="Theme">
          <select style={inputStyle}>
            <option>Dark</option>
            <option>Light</option>
          </select>
        </Field>

        <hr style={{border:'none', borderTop:'1px solid rgba(255,255,255,.08)'}}/>

        {/* Password Change */}
        <div style={{display:'grid', gap:12}}>
          <h3 style={{margin:0, fontSize:15}}>Change Password</h3>
          <Field label="Current Password">
            <input type="password" style={inputStyle} placeholder="••••••••"/>
          </Field>
          <Field label="New Password">
            <input type="password" style={inputStyle} placeholder="Enter new password"/>
          </Field>
          <Field label="Confirm New Password">
            <input type="password" style={inputStyle} placeholder="Re-enter new password"/>
          </Field>
          <div style={{display:'flex', justifyContent:'flex-end'}}>
            <button className="btn">Update Password</button>
          </div>
        </div>
      </div>
    </div>

    {/* Integrations Section */}
    <div className="card" style={{padding:'20px 24px', display:'grid', gap:16}}>
      <h3 style={{margin:0, fontSize:16}}>Integrations</h3>
      <p className="sub" style={{marginTop:-6}}>Connect your business with external platforms.</p>
      
      <div style={{display:'grid', gap:12}}>
        {["Google Business Profile","Instagram","Facebook","WhatsApp"].map((service) => (
          <div key={service} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 12px', border:'1px solid rgba(255,255,255,.08)', borderRadius:10}}>
            <span style={{fontSize:14}}>{service}</span>
            <button className="btn" style={{fontSize:13, padding:'6px 14px'}}>Connect</button>
          </div>
        ))}
      </div>
    </div>

    {/* Action Buttons */}
    <div style={{display:'flex', justifyContent:'flex-end', gap:12}}>
      <button className="btn" style={{background:'var(--card)', border:'1px solid rgba(255,255,255,.15)'}}>Cancel</button>
      <button className="btn">Save Changes</button>
    </div>
  </div>
)

export default Settings
