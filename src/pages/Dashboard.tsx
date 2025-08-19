import React from 'react'

const KPI: React.FC<{title:string, value:string}> = ({title, value}) => (
  <div className="card">
    <strong>{value}</strong>
    <div style={{color:'var(--muted)'}}>{title}</div>
  </div>
)

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p className="sub">Overview of profile score, reviews, posts and growth.</p>

      <div className="kpis">
        <KPI title="Profile Score" value="92%" />
        <KPI title="Reviews Analyzed" value="350+" />
        <KPI title="Posts Created" value="120+" />
      </div>

      <section className="grid">
        <div className="card">
          <strong>Action Items</strong>
          <ul>
            <li>Reply 4 new reviews</li>
            <li>Schedule 2 posts</li>
          </ul>
        </div>
        <div className="card">
          <strong>AI Suggestions</strong>
          <p className="sub">Post about today’s offer & ask customers for photos.</p>
        </div>
        <div className="card">
          <strong>Performance</strong>
          <p className="sub">Week over week +18%</p>
        </div>
      </section>
    </div>
  )
}
export default Dashboard
