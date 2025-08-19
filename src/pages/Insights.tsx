import React from 'react'


const Bar: React.FC<{label:string; value:number}> = ({label, value}) => (
<div style={{display:'grid', gap:6}}>
<div style={{display:'flex', justifyContent:'space-between'}}>
<span>{label}</span>
<span>{value}%</span>
</div>
<div style={{height:10, background:'rgba(255,255,255,.08)', borderRadius:999}}>
<div style={{width:`${value}%`, height:'100%', background:'var(--accent)', borderRadius:999}} />
</div>
</div>
)


const Insights: React.FC = () => {
return (
<div>
<h1>Insights</h1>
<p className="sub">Profile score and SEO-readiness at a glance.</p>
<section className="grid">
<div className="card">
<strong>Profile Completeness</strong>
<Bar label="Business Info" value={95} />
<Bar label="Photos & Media" value={70} />
<Bar label="Review Replies" value={60} />
</div>
<div className="card">
<strong>Keyword Opportunities</strong>
<ul style={{margin:0, paddingLeft:18}}>
<li>digital marketing agency near me</li>
<li>social media marketing in Navi Mumbai</li>
<li>website design & SEO services</li>
</ul>
</div>
<div className="card">
<strong>Competitor Watch</strong>
<p className="sub">2 competitors outrank you on photo updates. Post 3 images this week.</p>
</div>
</section>
</div>
)
}


export default Insights