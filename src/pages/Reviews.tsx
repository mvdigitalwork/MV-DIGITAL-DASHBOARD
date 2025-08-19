import React, { useState } from 'react'

type Review = { 
  id:string; 
  author:string; 
  rating:number; 
  text:string; 
  date:string; 
  suggestion?:string 
}

const mock:Review[] = [
  {id:'1', author:'Aman', rating:5, text:'Great service!', date:'2025-08-10'},
  {id:'2', author:'Neha', rating:2, text:'Long wait time', date:'2025-08-12'},
]

const Reviews: React.FC = () => {
  const [rows, setRows] = useState<Review[]>(mock)
  const [active, setActive] = useState<Review | null>(null)
  const [reply, setReply] = useState('')

  const total = rows.length
  const avg = (rows.reduce((s,r)=>s+r.rating,0)/total).toFixed(1)
  const positive = Math.round((rows.filter(r=>r.rating>=4).length/total)*100)

  const generateReply = (r:Review) => {
    const suggestion = r.rating >= 4 
      ? `Thank you ${r.author}! So glad you loved it.` 
      : `Hi ${r.author}, we’re sorry. Please DM us so we can help.`
    setActive(r)
    setReply(suggestion)
  }

  const save = () => {
    if(!active) return
    setRows(rows.map(r => r.id === active.id ? {...r, suggestion:reply} : r))
    setActive(null)
    setReply('')
  }

  return (
    <div>
      <h1>Reviews</h1>
      <p className="sub">See customer feedback and craft AI-powered replies.</p>

      {/* --- Stats --- */}
      <div className="kpis">
        <div className="card"><strong>{total}</strong><div>Total Reviews</div></div>
        <div className="card"><strong>{avg}</strong><div>Avg Rating</div></div>
        <div className="card"><strong>{positive}%</strong><div>Positive</div></div>
      </div>

      {/* --- Reviews Table --- */}
      <div className="card" style={{overflowX:'auto', marginTop:24}}>
        <table style={{width:'100%', borderCollapse:'collapse'}}>
          <thead>
            <tr style={{textAlign:'left', fontSize:14, color:'var(--muted)'}}>
              <th>Author</th><th>Rating</th><th>Review</th><th>Date</th><th>AI Reply</th><th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} style={{borderTop:'1px solid rgba(255,255,255,.06)'}}>
                <td style={{padding:'10px 6px'}}>{r.author}</td>
                <td style={{color:'var(--accent)'}}>{'★'.repeat(r.rating)}</td>
                <td style={{maxWidth:220}}>{r.text}</td>
                <td>{r.date}</td>
                <td>
                  {r.suggestion 
                    ? <code className="inline">{r.suggestion}</code> 
                    : <span className="chip">Pending</span>}
                </td>
                <td>
                  <button className="btn" onClick={()=>generateReply(r)}>Generate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Active Reply Editor --- */}
      {active && (
        <div style={{marginTop:20}} className="card">
          <strong>AI Suggested Reply</strong>
          <p className="sub">{active.author}: {active.text}</p>
          <textarea 
            value={reply} 
            onChange={e=>setReply(e.target.value)} 
            rows={4} 
            style={{
              width:'100%',
              borderRadius:12,
              padding:12,
              marginTop:10,
              background:'rgba(255,255,255,.04)',
              border:'1px solid rgba(255,255,255,.12)',
              color:'var(--text)'
            }} 
          />
          <div style={{display:'flex', justifyContent:'flex-end', gap:12, marginTop:12}}>
            <button className="btn" onClick={save}>💾 Save</button>
            <button className="btn" onClick={()=>{setActive(null); setReply('')}}>✖ Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reviews
