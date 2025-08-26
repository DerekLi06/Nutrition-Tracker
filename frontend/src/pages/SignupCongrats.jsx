"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styling/signupCongrats.css";

const SignupCongrats = () => {
  const navigate = useNavigate()
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleLoginRedirect = () => {
    navigate("/login")
  }

  // Generate confetti pieces
  const generateConfetti = () => {
    const pieces = []
    for (let i = 0; i < 50; i++) {
      pieces.push(
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#1e3a8a" : "#10b981",
          }}
        />,
      )
    }
    return pieces
  }

  return (
    <div className="congrats-container">
      {/* Confetti Animation */}
      {showConfetti && <div className="confetti-container">{generateConfetti()}</div>}

      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <h2>Nutrition Analytics</h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="congrats-section">
        <div className="congrats-content">
          {/* Success Icon */}
          <div className="success-icon">
            <div className="checkmark">
              <svg viewBox="0 0 52 52" className="checkmark-svg">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark-check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          </div>

          {/* Congratulations Message */}
          <div className="congrats-header">
            <h1>🎉 Congratulations! 🎉</h1>
            <h2>Welcome to NutriTrack!</h2>
            <p>
              Your account has been successfully created. You're now ready to start your nutrition tracking journey!
            </p>
          </div>

          {/* Features Preview */}
          <div className="features-preview">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Track Progress</h3>
              <p>Monitor your daily nutrition goals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🥗</div>
              <h3>Log Meals</h3>
              <p>Easily record your food intake</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>View Analytics</h3>
              <p>Get insights into your habits</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <button className="btn-primary btn-large login-btn" onClick={handleLoginRedirect}>
              Get Started - Login Now
            </button>
            <p className="cta-text">Ready to transform your nutrition habits?</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignupCongrats
