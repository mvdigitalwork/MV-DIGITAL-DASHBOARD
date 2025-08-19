import React, { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

type Review = { 
  id:string; 
  author:string; 
  rating:number; 
  text:string; 
  date:string; 
  suggestion?:string 
}

const mock:Review[] = [
  {id:'1', author:'Aman', rating:5, text:'Great service and very professional team. Will definitely recommend!', date:'2025-08-10'},
  {id:'2', author:'Neha', rating:2, text:'Long wait time and the support was not very responsive.', date:'2025-08-12'},
  {id:'3', author:'Ravi', rating:4, text:'Good overall experience. Could improve speed of delivery.', date:'2025-08-15'},
  {id:'4', author:'Simran', rating:5, text:'Absolutely loved the quality of service. Keep it up!', date:'2025-08-17'},
  {id:'5', author:'Karan', rating:3, text:'Average experience, could be better.', date:'2025-08-18'},
]

const Reviews: React.FC = () => {
  const [rows, setRows] = useState<Review[]>(mock)
  const [active, setActive] = useState<Review | null>(null)
  const [reply, setReply] = useState('')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | 'positive' | 'negative'>('all')
  const [sort, setSort] = useState<'date' | 'rating'>('date')

  const total = rows.length
  const avg = (rows.reduce((s,r)=>s+r.rating,0)/total).toFixed(1)
  const positive = Math.round((rows.filter(r=>r.rating>=4).length/total)*100)

  const generateReply = (r:Review) => {
    const suggestion = r.rating >= 4 
      ? `Thank you ${r.author}! We're thrilled you enjoyed our service.` 
      : `Hi ${r.author}, we're sorry to hear this. Please reach out so we can resolve your concern.`
    setActive(r)
    setReply(suggestion)
  }

  const save = () => {
    if(!active) return
    setRows(rows.map(r => r.id === active.id ? {...r, suggestion:reply} : r))
    setActive(null)
    setReply('')
  }

  const renderStars = (count:number) => (
    <span style={{color:'gold'}}>{'★'.repeat(count)}{'☆'.repeat(5-count)}</span>
  )

  // --- Filter + Search + Sort logic ---
  const filtered = rows
    .filter(r => 
      r.author.toLowerCase().includes(search.toLowerCase()) ||
      r.text.toLowerCase().includes(search.toLowerCase())
    )
    .filter(r => {
      if(filter === 'positive') return r.rating >= 4
      if(filter === 'negative') return r.rating <= 2
      return true
    })
    .sort((a,b) => {
      if(sort === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime()
      if(sort === 'rating') return b.rating - a.rating
      return 0
    })

  // --- Chart Data ---
  const ratingCounts = [1,2,3,4,5].map(star => ({
    star,
    count: rows.filter(r => r.rating === star).length
  }))

  const COLORS = ['#ff4d4f','#ff7a45','#ffc53d','#73d13d','#36cfc9']

  return (
    <div>
      <h1>Google Business Profile Reviews</h1>
      <p className="sub">See customer feedback and craft AI-powered replies.</p>

      {/* --- Stats --- */}
      <div className="kpis" style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px,1fr))', gap:16, marginTop:16}}>
        <div className="card center"><strong style={{fontSize:22}}>{total}</strong><div>Total Reviews</div></div>
        <div className="card center"><strong style={{fontSize:22}}>{avg}</strong><div>Avg Rating</div></div>
        <div className="card center"><strong style={{fontSize:22}}>{positive}%</strong><div>Positive</div></div>
      </div>

      {/* --- Chart Section --- */}
      <div className="card" style={{marginTop:20}}>
        <h2>Ratings Distribution</h2>
        <div style={{display:'flex', flexWrap:'wrap', gap:20, marginTop:16}}>
          
          {/* Pie Chart */}
          <div style={{flex:1, minWidth:280, height:240}}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={ratingCounts} dataKey="count" nameKey="star" outerRadius={100} label>
                  {ratingCounts.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div style={{flex:1, minWidth:280, height:240}}>
            <ResponsiveContainer>
              <BarChart data={ratingCounts}>
                <XAxis dataKey="star" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#36cfc9" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>

      {/* --- Filters & Search --- */}
      <div style={{display:'flex', flexWrap:'wrap', gap:12, marginTop:20, alignItems:'center'}}>
        <input 
          type="text" 
          placeholder=" Search reviews..." 
          value={search} 
          onChange={e=>setSearch(e.target.value)}
          style={{
            flex:1,
            minWidth:180,
            padding:'8px 12px',
            borderRadius:12,
            border:'1px solid rgba(255,255,255,.1)',
            background:'rgba(255,255,255,.05)',
            color:'var(--text)'
          }}
        />
        <select value={filter} onChange={e=>setFilter(e.target.value as any)} style={{padding:8, borderRadius:12}}>
          <option value="all">All</option>
          <option value="positive"> Positive</option>
          <option value="negative"> Negative</option>
        </select>
        <select value={sort} onChange={e=>setSort(e.target.value as any)} style={{padding:8, borderRadius:12}}>
          <option value="date">Sort by Date</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {/* --- Reviews Table --- */}
      <div className="card" style={{overflowX:'auto', marginTop:20}}>
        <table style={{width:'100%', borderCollapse:'collapse'}}>
          <thead>
            <tr style={{textAlign:'left', fontSize:14, color:'var(--muted)'}}>
              <th style={{padding:10}}>Author</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Date</th>
              <th>AI Reply</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id} style={{borderTop:'1px solid rgba(255,255,255,.06)'}}>
                <td style={{padding:'10px 6px', display:'flex', alignItems:'center', gap:8}}>
                  <div style={{width:32, height:32, borderRadius:'50%', background:'var(--accent)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14}}>
                    {r.author.charAt(0)}
                  </div>
                  {r.author}
                </td>
                <td>{renderStars(r.rating)}</td>
                <td style={{maxWidth:280, whiteSpace:'pre-wrap'}}>{r.text}</td>
                <td style={{fontSize:13, color:'var(--muted)'}}>{r.date}</td>
                <td>
                  {r.suggestion 
                    ? <span className="chip" style={{fontSize:12, background:'rgba(0,255,128,0.1)', color:'lime'}}>{r.suggestion}</span> 
                    : <span className="chip">Pending</span>}
                </td>
                <td>
                  <button className="btn small" onClick={()=>generateReply(r)}> Reply</button>
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
          <p className="sub">Replying to <b>{active.author}</b>: "{active.text}"</p>
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
            <button className="btn" onClick={save}>Send</button>
            <button className="btn" onClick={()=>{setActive(null); setReply('')}}>✖ Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reviews
