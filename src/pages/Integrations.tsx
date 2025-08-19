import React from 'react'

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
    <path fill="#4285F4" d="M24 9.5c3.54 0 6.36 1.53 7.82 2.81l5.68-5.68C34.17 3.57 29.47 1.5 24 1.5 14.85 1.5 7.05 7.54 4.22 15.75l6.91 5.36C12.57 14.76 17.8 9.5 24 9.5z"/>
    <path fill="#34A853" d="M46.98 24.5c0-1.58-.14-3.1-.41-4.56H24v9.12h12.92c-.56 2.84-2.22 5.24-4.73 6.86l7.34 5.7C43.94 37.61 46.98 31.55 46.98 24.5z"/>
    <path fill="#FBBC05" d="M11.13 28.91a14.5 14.5 0 0 1 0-9.82l-6.91-5.36A23.99 23.99 0 0 0 .98 24c0 3.87.93 7.53 2.59 10.73l7.56-5.82z"/>
    <path fill="#EA4335" d="M24 47.5c6.47 0 11.9-2.13 15.87-5.81l-7.34-5.7c-2.05 1.38-4.67 2.21-8.53 2.21-6.2 0-11.43-5.26-12.87-11.61l-7.56 5.82C7.05 40.46 14.85 47.5 24 47.5z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
    <path fill="#1877F2" d="M24 1C11.85 1 2 10.85 2 23c0 10.96 8.06 20.04 18.63 21.76V29.29h-5.6v-6.29h5.6v-4.79c0-5.55 3.32-8.62 8.36-8.62 2.43 0 4.96.43 4.96.43v5.45h-2.8c-2.76 0-3.62 1.72-3.62 3.48v4.05h6.16l-.99 6.29h-5.17v15.47C37.94 43.04 46 33.96 46 23 46 10.85 36.15 1 24 1z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
    <radialGradient id="a" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#fd5"/>
      <stop offset=".5" stopColor="#ff543e"/>
      <stop offset="1" stopColor="#c837ab"/>
    </radialGradient>
    <path fill="url(#a)" d="M34 4H14C8.48 4 4 8.48 4 14v20c0 5.52 4.48 10 10 10h20c5.52 0 10-4.48 10-10V14c0-5.52-4.48-10-10-10z"/>
    <path fill="#fff" d="M24 15.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5zm0 14c-3.04 0-5.5-2.46-5.5-5.5s2.46-5.5 5.5-5.5 5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5zm9-14.75c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
  </svg>
)

const IntegrationCard: React.FC<{ title: string; connected?: boolean; desc: string; icon?: React.ReactNode }> = ({
  title,
  connected,
  desc,
  icon,
}) => (
  <div
    className="card"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '20px',
      borderRadius: 14,
      minHeight: 160,
      justifyContent: 'space-between',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: 'var(--card)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {icon}
      </div>
      <div>
        <strong style={{ fontSize: 16 }}>{title}</strong>
        <p className="sub" style={{ margin: '4px 0 0 0' }}>{desc}</p>
      </div>
    </div>

    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <button className="btn" style={{ padding: '6px 14px', borderRadius: 8 }}>
        {connected ? 'Reconnect' : 'Connect'}
      </button>
      {connected && <span className="chip">Connected</span>}
    </div>
  </div>
)

const Integrations: React.FC = () => (
  <div style={{ width: '100%' }}>
    <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 4 }}>Integrations</h1>
    <p className="sub" style={{ marginBottom: 24 }}>
      Connect your Google Business Profile and social accounts.
    </p>

    <section
      className="grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 20,
      }}
    >
      <IntegrationCard
        title="Google Business Profile"
        desc="Sync reviews, photos & profile info."
        connected
        icon={<GoogleIcon />}
      />
      <IntegrationCard
        title="Facebook"
        desc="Post content directly to your page."
        icon={<FacebookIcon />}
      />
      <IntegrationCard
        title="Instagram"
        desc="Publish reels and posts from the app."
        icon={<InstagramIcon />}
      />
    </section>
  </div>
)

export default Integrations
