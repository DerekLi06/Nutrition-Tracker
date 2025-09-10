"use client"
import "../styling/home.css";

const Home = () => {
  const handleLogin = () => {
    window.location.href = "/login"
  }

  const handleSignup = () => {
    window.location.href = "/signup"
  }

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <h2>Nutrition Analytics</h2>
          </div>
          <nav className="nav-buttons">
            <button className="btn-secondary" onClick={handleLogin}>
              Log In
            </button>
            <button className="btn-primary" onClick={handleSignup}>
              Sign Up
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Track Your Nutrition!
            <span className="highlight"> Transform Your Health!</span>
          </h1>
          <p className="hero-description">
            Monitor your daily food intake, analyze nutrients, and visualize your progress with beautiful charts and
            insights. Take control of your health journey today.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary btn-large" onClick={handleSignup}>
              Start Tracking Free
            </button>
            <button className="btn-outline btn-large">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="nutrition-card">
            <h3>Today's Progress</h3>
            <div className="progress-rings">
              <div className="progress-ring calories">
                <span>1,847</span>
                <small>Calories</small>
              </div>
              <div className="progress-ring protein">
                <span>89g</span>
                <small>Protein</small>
              </div>
              <div className="progress-ring carbs">
                <span>156g</span>
                <small>Carbs</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Everything You Need to Succeed</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Visual Progress</h3>
              <p>Beautiful charts and graphs that make tracking your nutrition engaging and easy to understand.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🥗</div>
              <h3>Food Database</h3>
              <p>Access thousands of foods with detailed nutritional information to log your meals accurately.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Smart Goals</h3>
              <p>Set personalized nutrition goals and get insights to help you achieve optimal health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="footer">
        <div className="container">
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Health?</h2>
            <p>Join thousands of users who have already started their nutrition journey with NutriTrack.</p>
            <button className="btn-primary btn-large" onClick={handleSignup}>
              Get Started Today
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="footer">
        <div className="container">
        </div>
      </footer> */}
    </div>
  )
}

export default Home
