import React, { useState } from 'react'
type Review = { id:string; author:string; rating:number; text:string; date:string; suggestion?:string }
const mock:Review[] = [
  {id:'1', author:'Aman', rating:5, text:'Great service!', date:'2025-08-10'},
  {id:'2', author:'Neha', rating:2, text:'Long wait time', date:'2025-08-12'},
]

const Reviews: React.FC = () => {
  const [rows, setRows] = useState<Review[]>(mock)
  const [active, setActive] = useState<Review | null>(null)
  const [reply, setReply] = useState('')

  const generateReply = (r:Review) => {
    const suggestion = r.rating >= 4 ? `Thank you ${r.author}! So glad you loved it.` : `Hi ${r.author}, we’re sorry. Please DM us so we can help.`
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
      <p className="sub">See reviews and generate AI replies (UI mock).</p>
      <div className="card" style={{overflowX:'auto'}}>
        <table style={{width:'100%', borderCollapse:'collapse'}}>
          <thead><tr style={{textAlign:'left'}}><th>Author</th><th>Rating</th><th>Review</th><th>Date</th><th>AI Reply</th><th></th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} style={{borderTop:'1px solid rgba(255,255,255,.06)'}}>
                <td>{r.author}</td>
                <td>{'★'.repeat(r.rating)}</td>
                <td>{r.text}</td>
                <td>{r.date}</td>
                <td>{r.suggestion ? <code className="inline">{r.suggestion}</code> : <span className="chip">Pending</span>}</td>
                <td><button className="btn" onClick={()=>generateReply(r)}>Generate Reply</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {active && (
        <div style={{marginTop:12}} className="card">
          <strong>AI Suggested Reply</strong>
          <p className="sub">{active.author}: {active.text}</p>
          <textarea value={reply} onChange={e=>setReply(e.target.value)} rows={4} style={{width:'100%', borderRadius:8, padding:12, background:'transparent'}} />
          <div style={{display:'flex', justifyContent:'flex-end', gap:12, marginTop:8}}>
            <button className="btn" onClick={save}>Save</button>
            <button className="btn" onClick={()=>{setActive(null); setReply('')}}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reviews
