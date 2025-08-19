import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard: React.FC = () => {
  // Main weekly performance (realistic dummy)
  const weekly = [
    { name: "Mon", reviews: 6, posts: 1, reach: 1400 },
    { name: "Tue", reviews: 9, posts: 2, reach: 1800 },
    { name: "Wed", reviews: 4, posts: 1, reach: 1200 },
    { name: "Thu", reviews: 7, posts: 2, reach: 2100 },
    { name: "Fri", reviews: 12, posts: 3, reach: 2600 },
    { name: "Sat", reviews: 8, posts: 2, reach: 1900 },
    { name: "Sun", reviews: 14, posts: 2, reach: 2450 },
  ];

  // Small sparklines for KPI cards
  const sparkReviews = [5, 8, 4, 7, 10, 6, 12].map((v, i) => ({ x: i, v }));
  const sparkViews   = [2400, 2600, 2300, 2900, 3100, 3000, 3420].map((v, i) => ({ x: i, v }));
  const sparkReach   = [10400, 9800, 11200, 12600, 13700, 13000, 12450].map((v, i) => ({ x: i, v }));

  return (
    <div style={{ width: "100%", padding: "24px 32px", display: "grid", gap: 24 }}>
      {/* Title */}
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}> Dashboard</h1>
        <p className="sub" style={{ marginTop: 4 }}>Business insights at a glance</p>
      </div>

      {/* Connection status strip */}
      <div className="card" style={{ padding: 14, display: "flex", gap: 14, flexWrap: "wrap" }}>
        <span className="status"><span className="dot" /> Google Business Profile connected</span>
        <span className="status"><span className="dot" /> Instagram connected</span>
        <span className="status"><span className="dot" /> Facebook connected</span>
        <span className="status" style={{ color: "var(--warn)" }}> Scheduler: 1 post due today</span>
      </div>

      {/* KPIs (with mini sparklines) */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {/* Reviews */}
        <div className="card" style={{ padding: 16, display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <strong style={{ fontSize: 22 }}>238</strong>
            <span className="chip" style={{ background: "rgba(61,220,151,.12)" , borderColor:"rgba(61,220,151,.35)", color:"var(--ok)" }}>+12% WoW</span>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>Total Reviews</div>
          <div style={{ height: 50 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparkReviews}>
                <CartesianGrid stroke="rgba(255,255,255,.04)" vertical={false} />
                <XAxis dataKey="x" hide />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid rgba(255,255,255,.1)",
                    borderRadius: 8,
                    color: "var(--text)",
                  }}
                  labelFormatter={() => ""}
                />
                <Line type="monotone" dataKey="v" stroke="#64d2ff" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Avg Rating */}
        <div className="card" style={{ padding: 16, display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <strong style={{ fontSize: 22 }}>4.7 ⭐</strong>
            <span className="chip">+0.1</span>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>Avg Rating</div>
          <div className="status" style={{ marginTop: 4 }}>
            <span className="dot" /> 82% replies within 24h
          </div>
        </div>

        {/* Profile Views */}
        <div className="card" style={{ padding: 16, display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <strong style={{ fontSize: 22 }}>3,420</strong>
            <span className="chip" style={{ background: "rgba(61,220,151,.12)" , borderColor:"rgba(61,220,151,.35)", color:"var(--ok)" }}>+18%</span>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>Profile Views (7d)</div>
          <div style={{ height: 50 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparkViews}>
                <CartesianGrid stroke="rgba(255,255,255,.04)" vertical={false} />
                <XAxis dataKey="x" hide />
                <YAxis hide />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 8, color: "var(--text)" }} labelFormatter={() => ""}/>
                <Line type="monotone" dataKey="v" stroke="#64d2ff" strokeWidth={2} dot={false}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Reach */}
        <div className="card" style={{ padding: 16, display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <strong style={{ fontSize: 22 }}>12,450</strong>
            <span className="chip" style={{ background: "rgba(255,209,102,.12)", borderColor:"rgba(255,209,102,.35)", color:"var(--warn)" }}>-5%</span>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>Post Reach (7d)</div>
          <div style={{ height: 50 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparkReach}>
                <CartesianGrid stroke="rgba(255,255,255,.04)" vertical={false} />
                <XAxis dataKey="x" hide />
                <YAxis hide />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 8, color: "var(--text)" }} labelFormatter={() => ""}/>
                <Line type="monotone" dataKey="v" stroke="#3ddc97" strokeWidth={2} dot={false}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Main chart + side highlights */}
      <div className="grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
        {/* Big performance chart */}
        <div className="card" style={{ padding: 16, height: 360 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <strong>Weekly Performance</strong>
            <span className="chip">Last 7 days</span>
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={weekly}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
              <XAxis dataKey="name" stroke="var(--muted)" />
              <YAxis stroke="var(--muted)" />
              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 12,
                  color: "var(--text)",
                }}
              />
              <Line type="monotone" dataKey="reviews" stroke="#64d2ff" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="posts" stroke="#3ddc97" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Highlights / top post */}
        <div className="card" style={{ padding: 16, display: "grid", gap: 14 }}>
          <strong>Top Performing Post</strong>
          <div className="placeholder" style={{ aspectRatio: "16/10", borderRadius: 12 }}>
            {/* preview image dummy */}
            <img
              alt="Top Post"
              src="https://www.hitachimoneyspotatm.com/wp-content/uploads/2024/01/Article_1_f946e17f-14ef-4856-8f11-6d6670e7492e.webp"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
            />
          </div>
          <div style={{ display: "grid", gap: 6, fontSize: 14 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <span className="chip">👍 842 Likes</span>
              <span className="chip">💬 76 Comments</span>
              <span className="chip">↗ 2.3% CTR</span>
            </div>
            <div style={{ color: "var(--muted)" }}>Caption: “Level up your local presence with MV Digital Work 🚀”</div>
            <div className="status" style={{ marginTop: 4 }}>
              <span className="dot" /> Posted Fri, 6:30 PM
            </div>
          </div>
        </div>
      </div>

      {/* Recent activity + tasks */}
      <div className="grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
        {/* Recent Activity (table look, realistic entries) */}
        <div className="card" style={{ padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong>Recent Activity</strong>
            <span className="chip">Auto-refresh 5m</span>
          </div>
          <table style={{ width: "100%", marginTop: 12, borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", color: "var(--muted)", fontSize: 14 }}>
                <th style={{ padding: "8px 0" }}>Time</th>
                <th style={{ padding: "8px 0" }}>Activity</th>
                <th style={{ padding: "8px 0" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { t: "2h ago", a: "Replied to Google review (Aman ⭐⭐⭐⭐⭐)", s: "Done" },
                { t: "5h ago", a: "Scheduled Instagram post for 7 PM", s: "Queued" },
                { t: "Yesterday", a: "New review received (Neha ⭐⭐)", s: "Pending Reply" },
                { t: "Yesterday", a: "Profile photo updated on GBP", s: "Success" },
                { t: "2d ago", a: "Published Facebook post", s: "Success" },
              ].map((row, i) => (
                <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
                  <td style={{ padding: "10px 0" }}>{row.t}</td>
                  <td style={{ padding: "10px 0" }}>{row.a}</td>
                  <td style={{ padding: "10px 0" }}>
                    <span className="chip" style={
                      row.s === "Success" ? { background:"rgba(61,220,151,.12)", borderColor:"rgba(61,220,151,.35)", color:"var(--ok)"} :
                      row.s === "Queued" ? { background:"rgba(100,210,255,.12)", borderColor:"rgba(100,210,255,.35)", color:"var(--accent)"} :
                      row.s === "Done" ? {} :
                      { background:"rgba(255,209,102,.12)", borderColor:"rgba(255,209,102,.35)", color:"var(--warn)"}
                    }>
                      {row.s}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Tasks */}
        <div className="card" style={{ padding: 16, display: "grid", gap: 12, alignContent: "start" }}>
          <strong>Quick Tasks</strong>
          <label style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <input type="checkbox" defaultChecked />
            <span>Reply to 2 pending reviews</span>
          </label>
          <label style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <input type="checkbox" />
            <span>Schedule 3 photo posts for this week</span>
          </label>
          <label style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <input type="checkbox" />
            <span>Add 5 local keywords to profile</span>
          </label>
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <button className="btn">+ New Post</button>
            <button className="btn">Generate Caption</button>
          </div>
          <div className="status" style={{ marginTop: 6 }}>
            <span className="dot" /> All systems operational
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
