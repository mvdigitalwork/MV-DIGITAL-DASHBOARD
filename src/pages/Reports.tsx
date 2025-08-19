import React from 'react'

const Reports: React.FC = () => (
  <div>
    <h1>Reports</h1>
    <p className="sub">Track your business performance with detailed monthly insights.</p>

    {/* Summary Section */}
    <div
      className="card"
      style={{
        marginTop: 20,
        display: 'grid',
        gap: 14,
        padding: 20,
      }}
    >
      <strong style={{ fontSize: 16 }}>📈 Performance Overview</strong>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 160 }}>
          <p className="sub" style={{ margin: 0 }}>Profile Views</p>
          <strong style={{ fontSize: 18 }}>+12.4%</strong>
          <div
            style={{
              marginTop: 4,
              height: 6,
              borderRadius: 6,
              background: 'rgba(255,255,255,.08)',
            }}
          >
            <div style={{ width: '65%', height: '100%', background: 'var(--accent)', borderRadius: 6 }} />
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 160 }}>
          <p className="sub" style={{ margin: 0 }}>New Reviews</p>
          <strong style={{ fontSize: 18 }}>57</strong>
          <div
            style={{
              marginTop: 4,
              height: 6,
              borderRadius: 6,
              background: 'rgba(255,255,255,.08)',
            }}
          >
            <div style={{ width: '80%', height: '100%', background: 'var(--accent)', borderRadius: 6 }} />
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 160 }}>
          <p className="sub" style={{ margin: 0 }}>Posts Published</p>
          <strong style={{ fontSize: 18 }}>40</strong>
          <div
            style={{
              marginTop: 4,
              height: 6,
              borderRadius: 6,
              background: 'rgba(255,255,255,.08)',
            }}
          >
            <div style={{ width: '45%', height: '100%', background: 'var(--accent)', borderRadius: 6 }} />
          </div>
        </div>
      </div>
    </div>

    {/* Monthly Reports */}
    <section className="grid" style={{ marginTop: 24 }}>
      <div className="card" style={{ display: 'grid', gap: 10 }}>
        <strong style={{ fontSize: 16 }}>📊 July 2025</strong>
        <p className="sub" style={{ margin: 0 }}>
          +18% profile views · 42 new reviews · 28 posts
        </p>
        <a className="btn" href="#" style={{ marginTop: 6, width: 'fit-content' }}>
          Download PDF
        </a>
      </div>

      <div className="card" style={{ display: 'grid', gap: 10 }}>
        <strong style={{ fontSize: 16 }}>📊 August 2025</strong>
        <p className="sub" style={{ margin: 0 }}>
          +7% profile views · 15 new reviews · 12 posts
        </p>
        <a className="btn" href="#" style={{ marginTop: 6, width: 'fit-content' }}>
          Download PDF
        </a>
      </div>

      <div className="card" style={{ display: 'grid', gap: 10 }}>
        <strong style={{ fontSize: 16 }}>📊 September 2025</strong>
        <p className="sub" style={{ margin: 0 }}>
          Generating report… will be available soon
        </p>
        <span className="chip">Pending</span>
      </div>
    </section>
  </div>
)

export default Reports
