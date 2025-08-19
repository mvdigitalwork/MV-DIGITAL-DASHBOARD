import React from 'react'


const IntegrationCard: React.FC<{title:string; connected?:boolean; desc:string}> = ({title, connected, desc}) => (
<div className="card" style={{display:'grid', gap:8}}>
<strong>{title}</strong>
<p className="sub" style={{margin:0}}>{desc}</p>
<div style={{display:'flex', gap:12}}>
<button className="btn">{connected? 'Reconnect' : 'Connect'}</button>
{connected && <span className="chip">Connected</span>}
</div>
</div>
)


const Integrations: React.FC = () => (
<div>
<h1>Integrations</h1>
<p className="sub">Connect your Google Business Profile and social accounts.</p>
<section className="grid">
<IntegrationCard title="Google Business Profile" desc="Sync reviews, photos & profile info." connected />
<IntegrationCard title="Facebook" desc="Post content directly to your page." />
<IntegrationCard title="Instagram" desc="Publish reels and posts from the app." />
</section>
</div>
)


export default Integrations