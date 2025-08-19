import React, { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts"

const BarMeter: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div style={{ display: "grid", gap: 6 }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div style={{ height: 10, background: "rgba(255,255,255,.08)", borderRadius: 999 }}>
      <div
        style={{ width: `${value}%`, height: "100%", background: "var(--accent)", borderRadius: 999 }}
      />
    </div>
  </div>
)

const weeklyData = [
  { week: "Mon", visitors: 120, reviews: 5 },
  { week: "Tue", visitors: 200, reviews: 7 },
  { week: "Wed", visitors: 180, reviews: 6 },
  { week: "Thu", visitors: 250, reviews: 9 },
  { week: "Fri", visitors: 300, reviews: 12 },
  { week: "Sat", visitors: 280, reviews: 10 },
  { week: "Sun", visitors: 350, reviews: 14 },
]

const funnelData = [
  { stage: "Views", value: 1000 },
  { stage: "Clicks", value: 400 },
  { stage: "Conversions", value: 120 },
]

const Insights: React.FC = () => {
  const [liveVisitors, setLiveVisitors] = useState(85)

  // Dummy realtime counter
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors((prev) => {
        let change = Math.floor(Math.random() * 10) - 5 // -5 to +5
        let updated = prev + change
        if (updated < 50) updated = 50
        if (updated > 200) updated = 200
        return updated
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const exportReport = (format: string) => {
    alert(`📊 Report exported as ${format}! (Dummy UI only)`)
  }

  return (
    <div>
      <h1>Insights</h1>
      <p className="sub">Profile score and SEO-readiness at a glance.</p>

      <section className="grid">
        {/* Profile Completeness */}
        <div className="card">
          <strong>Profile Completeness</strong>
          <BarMeter label="Business Info" value={95} />
          <BarMeter label="Photos & Media" value={70} />
          <BarMeter label="Review Replies" value={60} />
        </div>

        {/* Keywords */}
        <div className="card">
          <strong>Keyword Opportunities</strong>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>digital marketing agency near me</li>
            <li>social media marketing in Navi Mumbai</li>
            <li>website design & SEO services</li>
          </ul>
        </div>

        {/* Competitor */}
        <div className="card">
          <strong>Competitor Watch</strong>
          <p className="sub">
            2 competitors outrank you on photo updates. Post 3 images this week.
          </p>
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid" style={{ marginTop: 20 }}>
        <div className="card" style={{ height: 300 }}>
          <strong>Weekly Visitors & Reviews</strong>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.1)" />
              <XAxis dataKey="week" stroke="var(--muted)" />
              <YAxis stroke="var(--muted)" />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke="#4ade80" strokeWidth={2} />
              <Line type="monotone" dataKey="reviews" stroke="#60a5fa" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card" style={{ height: 300 }}>
          <strong>Engagement Funnel</strong>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={funnelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.1)" />
              <XAxis dataKey="stage" stroke="var(--muted)" />
              <YAxis stroke="var(--muted)" />
              <Tooltip />
              <Bar dataKey="value" fill="var(--accent)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Live Visitors */}
      <section style={{ marginTop: 20 }}>
        <div className="card" style={{ textAlign: "center", padding: 20 }}>
          <h2 style={{ margin: 0 }}> Live Visitors</h2>
          <p className="sub">Users currently viewing your business profile</p>
          <div style={{ fontSize: 42, fontWeight: 700, marginTop: 10, color: "var(--accent)" }}>
            {liveVisitors}
          </div>
        </div>
      </section>

      {/* Export Button */}
      <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
        <button className="btn" onClick={() => exportReport("PDF")}>
          📄 Export PDF
        </button>
        <button className="btn" onClick={() => exportReport("CSV")}>
          📊 Export CSV
        </button>
      </div>
    </div>
  )
}

export default Insights
