import React from "react";
import CountUp from "react-countup";
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
  // Dummy data for chart
  const data = [
    { name: "Mon", reviews: 5, posts: 2 },
    { name: "Tue", reviews: 8, posts: 1 },
    { name: "Wed", reviews: 3, posts: 3 },
    { name: "Thu", reviews: 7, posts: 2 },
    { name: "Fri", reviews: 10, posts: 4 },
    { name: "Sat", reviews: 6, posts: 2 },
    { name: "Sun", reviews: 12, posts: 3 },
  ];

  return (
    <div
      className="dashboard-wrapper"
      style={{
        width: "100%",
        padding: "24px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* Page Title */}
      <div>
        <h1 style={{ fontSize: "32px", fontWeight: 700 }}> Dashboard</h1>
        <p style={{ marginTop: "4px", color: "var(--muted)" }}>
          Business insights at a glance
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className="kpis"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        <div className="card" style={{ padding: "20px" }}>
          <strong style={{ fontSize: "26px" }}>
            <CountUp end={120} duration={2} />+
          </strong>
          <p>Total Reviews</p>
          <small style={{ color: "var(--muted)" }}>+12 this week</small>
        </div>
        <div className="card" style={{ padding: "20px" }}>
          <strong style={{ fontSize: "26px" }}>
            <CountUp end={4.8} duration={2} decimals={1} /> 
          </strong>
          <p>Avg. Rating</p>
          <small style={{ color: "var(--muted)" }}>Above industry avg</small>
        </div>
        <div className="card" style={{ padding: "20px" }}>
          <strong style={{ fontSize: "26px" }}>
            <CountUp end={15} duration={2} />%
          </strong>
          <p>Profile Growth</p>
          <small style={{ color: "var(--muted)" }}>Last 30 days</small>
        </div>
      </div>

      {/* Performance Chart */}
      <div
        className="card"
        style={{ padding: "20px", width: "100%", height: "380px" }}
      >
        <h3 style={{ marginBottom: "12px" }}> Performance Overview</h3>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.1)" />
            <XAxis dataKey="name" stroke="var(--muted)" />
            <YAxis stroke="var(--muted)" />
            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "12px",
                color: "var(--text)",
              }}
            />
            <Line type="monotone" dataKey="reviews" stroke="#64d2ff" strokeWidth={3} />
            <Line type="monotone" dataKey="posts" stroke="#3ddc97" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Table */}
      <div className="card" style={{ padding: "20px", width: "100%" }}>
        <h3> Recent Activity</h3>
        <table
          style={{
            width: "100%",
            marginTop: "16px",
            borderSpacing: "0 10px",
          }}
        >
          <thead>
            <tr style={{ textAlign: "left", color: "var(--muted)" }}>
              <th style={{ paddingBottom: "8px" }}>Date</th>
              <th style={{ paddingBottom: "8px" }}>Activity</th>
              <th style={{ paddingBottom: "8px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19 Aug</td>
              <td> Posted on Instagram</td>
              <td><span className="chip success">Success</span></td>
            </tr>
            <tr>
              <td>18 Aug</td>
              <td> New Review Received</td>
              <td><span className="chip pending">Pending Reply</span></td>
            </tr>
            <tr>
              <td>17 Aug</td>
              <td> Profile Updated</td>
              <td><span className="chip done">Done</span></td>
            </tr>
            <tr>
              <td>16 Aug</td>
              <td> Analytics Report Generated</td>
              <td><span className="chip success">Success</span></td>
            </tr>
            <tr>
              <td>15 Aug</td>
              <td> Reply Sent to Review</td>
              <td><span className="chip done">Done</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
