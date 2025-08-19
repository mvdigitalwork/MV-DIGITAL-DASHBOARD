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
    <div className="container">
      {/* Page Title */}
      <h1>Dashboard</h1>
      <p className="sub">Business insights at a glance</p>

      {/* Stats Cards */}
      <div className="kpis">
        <div className="card">
          <strong>120+</strong>
          <p>Total Reviews</p>
        </div>
        <div className="card">
          <strong>4.8⭐</strong>
          <p>Avg. Rating</p>
        </div>
        <div className="card">
          <strong>15%</strong>
          <p>Profile Growth</p>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="card" style={{ marginTop: "28px", height: "300px" }}>
        <h3>Performance Overview</h3>
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
            <Line type="monotone" dataKey="reviews" stroke="#64d2ff" strokeWidth={2} />
            <Line type="monotone" dataKey="posts" stroke="#3ddc97" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Table */}
      <div className="card" style={{ marginTop: "28px" }}>
        <h3>Recent Activity</h3>
        <table style={{ width: "100%", marginTop: "12px" }}>
          <thead>
            <tr style={{ textAlign: "left", color: "var(--muted)" }}>
              <th>Date</th>
              <th>Activity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19 Aug</td>
              <td>Posted on Instagram</td>
              <td><span className="chip">Success</span></td>
            </tr>
            <tr>
              <td>18 Aug</td>
              <td>New Review Received</td>
              <td><span className="chip">Pending Reply</span></td>
            </tr>
            <tr>
              <td>17 Aug</td>
              <td>Profile Updated</td>
              <td><span className="chip">Done</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
