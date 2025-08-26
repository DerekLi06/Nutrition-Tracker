"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginAPI } from "../state/authentication/login"
import "../styling/login.css";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth || { loading: false, error: null })
    
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  console.log(formData);

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      const result = await dispatch(loginAPI(formData))
      if (result.type === "LOGIN_SUCCESS") {
        navigate("/homepage")
      }
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const handleGoogleLogin = () => {
    const googleAuthUrl = import.meta.env.VITE_GOOGLE_CALLBACK_URL

    if (!googleAuthUrl) {
      console.error("Google OAuth URL not configured")
      return
    }

    // Open Google Auth in a popup window
    const popup = window.open(googleAuthUrl, "googleAuth", "width=500,height=600,scrollbars=yes,resizable=yes")

    // Listen for the popup to close or receive a message
    const checkClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkClosed)
        // Check if authentication was successful
        // This would typically involve checking localStorage or making an API call
        // For now, we'll navigate to homepage assuming success
        navigate("/homepage")
      }
    }, 1000)

    // Listen for messages from the popup (if your backend sends them)
    window.addEventListener("message", (event) => {
      if (event.origin !== window.location.origin) return

      if (event.data.type === "GOOGLE_AUTH_SUCCESS") {
        popup.close()
        navigate("/homepage")
      } else if (event.data.type === "GOOGLE_AUTH_ERROR") {
        popup.close()
        console.error("Google authentication failed")
      }
    })
  }

  return (
    <div className="login-container">
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <h2>NutriTrack</h2>
          </div>
          <div className="nav-buttons">
            <button className="btn-secondary" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Login Section */}
      <section className="login-section">
        <div className="login-content">
          <div className="login-header">
            <h1>Welcome Back!</h1>
            <p>Sign in to continue tracking your nutrition journey</p>
          </div>

          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Sign In</h3>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "error" : ""}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errors.password ? "error" : ""}
                    placeholder="Enter your password"
                  />
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                {error && <div className="error-message global-error">{error}</div>}

                <button type="submit" className="btn-primary btn-large login-btn" disabled={loading}>
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </div>

              <div className="divider">
                <span>or</span>
              </div>

              <div className="google-login-section">
                <button type="button" className="btn-google" onClick={handleGoogleLogin} disabled={loading}>
                  <svg className="google-icon" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </form>

            <div className="signup-link">
              <p>
                Don't have an account?{" "}
                <button className="link-btn" onClick={() => navigate("/signup")}>
                  Sign up here
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
