"use client"
import { useState, useEffect } from "react"
import { registerAPI } from "../state/authentication/register"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import "../styling/signup.css";

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    activityLevel: "",
    country: "",
    zipcode: "",
    weightGoal: "",
  })

  const [maintenanceCalories, setMaintenanceCalories] = useState(0)
  const [errors, setErrors] = useState({})

  const activityLevels = [
    { value: "1.2", label: "Sedentary: Little to no exercise (BMR × 1.2)" },
    { value: "1.375", label: "Lightly Active: Light exercise 1-3 days/week (BMR × 1.375)" },
    { value: "1.55", label: "Moderately Active: Moderate exercise 3-5 days/week (BMR × 1.55)" },
    { value: "1.725", label: "Very Active: Hard exercise 6-7 days/week (BMR × 1.725)" },
    { value: "1.9", label: "Super Active: Very hard exercise/physical job (BMR × 1.9)" },
  ]

  const weightGoals = [
    { value: "lose", label: "Lose Weight" },
    { value: "maintain", label: "Maintain Weight" },
    { value: "gain", label: "Gain Weight" },
  ]

  // Calculate maintenance calories using Mifflin-St Jeor formula
  useEffect(() => {
    const { weight, height, age, gender, activityLevel } = formData

    if (weight && height && age && gender && activityLevel) {
      let bmr
      const weightNum = Number.parseFloat(weight)
      const heightNum = Number.parseFloat(height)
      const ageNum = Number.parseFloat(age)
      const activityNum = Number.parseFloat(activityLevel)

      if (gender === "male") {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5
      } else if (gender === "female") {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161
      }

      if (bmr) {
        const maintenance = Math.round(bmr * activityNum)
        setMaintenanceCalories(maintenance)
      }
    } else {
      setMaintenanceCalories(0)
    }
  }, [formData]) // Updated to use formData as a whole dependency

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

    if (!formData.username.trim()) newErrors.username = "Username is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    if (!formData.gender) newErrors.gender = "Gender is required" 
    if (!formData.age || formData.age < 9) newErrors.age = "Age must be at least 9"
    if (!formData.height || formData.height < 100 || formData.height > 250)
      newErrors.height = "Height must be between 100-250 cm"
    if (!formData.weight || formData.weight < 30 || formData.weight > 300)
      newErrors.weight = "Weight must be between 30-300 kg"
    if (!formData.activityLevel) newErrors.activityLevel = "Activity level is required"
    // if (!formData.country.trim()) newErrors.country = "Country is required"
    // if (!formData.zipcode.trim()) newErrors.zipcode = "Zipcode is required"
    if (!formData.weightGoal) newErrors.weightGoal = "Weight goal is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const userData = {
        ...formData,
        maintenanceCalories: maintenanceCalories.toString(),
      }

      dispatch(registerAPI(userData))
    }
  }

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <div className="signup-container">
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <h2>NutriTrack</h2>
          </div>
          <nav className="nav-buttons">
            <button className="btn-secondary" onClick={handleLogin}>
              Log In
            </button>
          </nav>
        </div>
      </header>

      {/* Signup Form */}
      <section className="signup-section">
        <div className="signup-content">
          <div className="signup-header">
            <h1>Create Your Account</h1>
            <p>Join thousands of users tracking their nutrition journey</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="form-section">
              <h3>Basic Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={errors.username ? "error" : ""}
                  />
                  {errors.username && <span className="error-message">{errors.username}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "error" : ""}
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
                  />
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={errors.confirmPassword ? "error" : ""}
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              </div>
            </div>

            {/* Physical Information */}
            <div className="form-section">
              <h3>Physical Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={errors.gender ? "error" : ""}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && <span className="error-message">{errors.gender}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age (years)</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="13"
                    max="120"
                    className={errors.age ? "error" : ""}
                  />
                  {errors.age && <span className="error-message">{errors.age}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="height">Height (cm)</label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    min="100"
                    max="250"
                    className={errors.height ? "error" : ""}
                  />
                  {errors.height && <span className="error-message">{errors.height}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="weight">Weight (kg)</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    min="30"
                    max="300"
                    step="0.1"
                    className={errors.weight ? "error" : ""}
                  />
                  {errors.weight && <span className="error-message">{errors.weight}</span>}
                </div>
              </div>
            </div>

            {/* Activity & Goals */}
            <div className="form-section">
              <h3>Activity & Goals</h3>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="activityLevel">Activity Level</label>
                  <select
                    id="activityLevel"
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleInputChange}
                    className={errors.activityLevel ? "error" : ""}
                  >
                    <option value="">Select Activity Level</option>
                    {activityLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  {errors.activityLevel && <span className="error-message">{errors.activityLevel}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="weightGoal">Weight Goal</label>
                  <select
                    id="weightGoal"
                    name="weightGoal"
                    value={formData.weightGoal}
                    onChange={handleInputChange}
                    className={errors.weightGoal ? "error" : ""}
                  >
                    <option value="">Select Goal</option>
                    {weightGoals.map((goal) => (
                      <option key={goal.value} value={goal.value}>
                        {goal.label}
                      </option>
                    ))}
                  </select>
                  {errors.weightGoal && <span className="error-message">{errors.weightGoal}</span>}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="form-section">
              <h3>Location</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={errors.country ? "error" : ""}
                  />
                  {errors.country && <span className="error-message">{errors.country}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    className={errors.zipcode ? "error" : ""}
                  />
                  {errors.zipcode && <span className="error-message">{errors.zipcode}</span>}
                </div>
              </div>
            </div>

            {/* Maintenance Calories Display */}
            {maintenanceCalories > 0 && (
              <div className="calories-display">
                <div className="calories-card">
                  <h3>Your Estimated Daily Calories</h3>
                  <div className="calories-value">
                    <span className="calories-number">{maintenanceCalories}</span>
                    <span className="calories-unit">calories/day</span>
                  </div>
                  <p>Based on the Mifflin-St Jeor formula and your activity level</p>
                </div>
              </div>
            )}

            <button type="submit" className="btn-primary btn-large signup-btn">
              Create Account
            </button>
          </form>

          <div className="login-link">
            <p>
              Already have an account?{" "}
              <button onClick={handleLogin} className="link-btn">
                Log in here
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
