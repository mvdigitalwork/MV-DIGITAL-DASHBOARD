import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <div>
            <h1>Grow Your Business with MV Digital Work</h1>
            <p className="sub">Social Media Marketing • SEO • Ads • Branding</p>
            <a className="btn" href="/dashboard">Get Started</a>
          </div>
          <div className="placeholder">Dashboard Preview</div>
        </section>

        <section className="grid">
          <div className="card"><strong>Social Media</strong><p>Boost online presence.</p></div>
          <div className="card"><strong>SEO</strong><p>Rank higher on Google.</p></div>
          <div className="card"><strong>Branding</strong><p>Create strong identity.</p></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
