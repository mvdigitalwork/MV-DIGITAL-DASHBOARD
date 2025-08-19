import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <div className="app-root">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-area">
        <Header />
        <main style={{padding:24, flex:1}}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
