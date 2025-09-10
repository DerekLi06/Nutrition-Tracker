"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import "../styling/homepage.css"

const Homepage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Mock user data - replace with actual Redux state
  const [userData, setUserData] = useState({
    name: "John Doe",
    dailyGoals: {
      calories: 2200,
      protein: 165, // grams
      fat: 73, // grams
      carbs: 275, // grams
    },
    currentIntake: {
      calories: 1450,
      protein: 89,
      fat: 45,
      carbs: 180,
    },
    meals: {
      breakfast: [
        { name: "Oatmeal with Berries", calories: 320, protein: 12, fat: 8, carbs: 58 },
        { name: "Greek Yogurt", calories: 150, protein: 20, fat: 0, carbs: 20 },
      ],
      lunch: [{ name: "Grilled Chicken Salad", calories: 450, protein: 35, fat: 18, carbs: 25 }],
      dinner: [{ name: "Salmon with Rice", calories: 530, protein: 42, fat: 19, carbs: 45 }],
      snack: [],
    },
  })

  const handleLogout = () => {
    // Add logout logic here
    navigate("/")
  }

  const handleAddMeal = (mealType) => {
    navigate(`/add-meal?type=${mealType}`)
  }

  const handleAddFood = () => {
    navigate("/add-food")
  }

  const calculateProgress = (current, goal) => {
    return Math.min((current / goal) * 100, 100)
  }

  const CircularProgress = ({
    percentage,
    size = 120,
    strokeWidth = 8,
    color = "#1e3a8a",
    label,
    current,
    goal,
    unit,
  }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div className="circular-progress" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="progress-svg">
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="#f1f5f9" strokeWidth={strokeWidth} fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="progress-circle"
          />
        </svg>
        <div className="progress-content">
          <div className="progress-label">{label}</div>
          <div className="progress-value">
            {current}
            {unit}
          </div>
          <div className="progress-goal">
            / {goal}
            {unit}
          </div>
        </div>
      </div>
    )
  }

  const MealSection = ({ mealType, foods, onAddMeal }) => {
    const mealTotals = foods.reduce(
      (totals, food) => ({
        calories: totals.calories + food.calories,
        protein: totals.protein + food.protein,
        fat: totals.fat + food.fat,
        carbs: totals.carbs + food.carbs,
      }),
      { calories: 0, protein: 0, fat: 0, carbs: 0 },
    )

    return (
      <div className="meal-section">
        <button className="add-meal-btn" onClick={() => onAddMeal(mealType)}>
          <div className="meal-icon">
            {mealType === "breakfast" && "🌅"}
            {mealType === "lunch" && "☀️"}
            {mealType === "dinner" && "🌙"}
            {mealType === "snack" && "🍎"}
          </div>
          <span>Add {mealType.charAt(0).toUpperCase() + mealType.slice(1)}</span>
        </button>

        <div className="meal-tracker">
          {foods.length === 0 ? (
            <div className="empty-meal">
              <p>No items added yet</p>
              <span>Tap the button above to add some food!</span>
            </div>
          ) : (
            <>
              <div className="meal-summary">
                <h4>{mealType.charAt(0).toUpperCase() + mealType.slice(1)} Total</h4>
                <div className="nutrition-summary">
                  <span>{mealTotals.calories} cal</span>
                  <span>{mealTotals.protein}g protein</span>
                  <span>{mealTotals.fat}g fat</span>
                  <span>{mealTotals.carbs}g carbs</span>
                </div>
              </div>
              <div className="food-list">
                {foods.map((food, index) => (
                  <div key={index} className="food-item">
                    <div className="food-name">{food.name}</div>
                    <div className="food-nutrition">
                      <span>{food.calories} cal</span>
                      <span>{food.protein}g P</span>
                      <span>{food.fat}g F</span>
                      <span>{food.carbs}g C</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="homepage-container">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <div className="header-container">
          <div className="logo">
            <h2>NutriTrack</h2>
          </div>
          <nav className="dashboard-nav">
            <button className="nav-btn active" onClick={() => navigate("/homepage")}>
              Dashboard
            </button>
            <button className="nav-btn" onClick={() => navigate("/profile")}>
              Profile
            </button>
            <button className="nav-btn add-food-btn" onClick={handleAddFood}>
              Add Food
            </button>
            <button className="nav-btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-content">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h1>Welcome back, {userData.name}!</h1>
            <p>Here's your nutrition progress for today</p>
          </section>

          {/* Progress Circles */}
          <section className="progress-section">
            <div className="progress-grid">
              <div className="main-progress">
                <CircularProgress
                  percentage={calculateProgress(userData.currentIntake.calories, userData.dailyGoals.calories)}
                  size={160}
                  strokeWidth={12}
                  color="#1e3a8a"
                  label="Calories"
                  current={userData.currentIntake.calories}
                  goal={userData.dailyGoals.calories}
                  unit=""
                />
              </div>
              <div className="secondary-progress">
                <CircularProgress
                  percentage={calculateProgress(userData.currentIntake.protein, userData.dailyGoals.protein)}
                  size={120}
                  strokeWidth={8}
                  color="#10b981"
                  label="Protein"
                  current={userData.currentIntake.protein}
                  goal={userData.dailyGoals.protein}
                  unit="g"
                />
                <CircularProgress
                  percentage={calculateProgress(userData.currentIntake.fat, userData.dailyGoals.fat)}
                  size={120}
                  strokeWidth={8}
                  color="#f59e0b"
                  label="Fat"
                  current={userData.currentIntake.fat}
                  goal={userData.dailyGoals.fat}
                  unit="g"
                />
                <CircularProgress
                  percentage={calculateProgress(userData.currentIntake.carbs, userData.dailyGoals.carbs)}
                  size={120}
                  strokeWidth={8}
                  color="#8b5cf6"
                  label="Carbs"
                  current={userData.currentIntake.carbs}
                  goal={userData.dailyGoals.carbs}
                  unit="g"
                />
              </div>
            </div>
          </section>

          {/* Add Food Section */}
          <section className="add-food-section">
            <div className="add-food-container">
              <button className="add-food-btn-large" onClick={handleAddFood}>
                <div className="add-food-icon">🍽️</div>
                <span>Add Custom Food</span>
              </button>
              <p className="add-food-message">
                Don't see a certain food item in our database? Feel free to add your own!
              </p>
            </div>
          </section>

          {/* Meals Section */}
          <section className="meals-section">
            <h2>Today's Meals</h2>
            <div className="meals-grid">
              <MealSection mealType="breakfast" foods={userData.meals.breakfast} onAddMeal={handleAddMeal} />
              <MealSection mealType="lunch" foods={userData.meals.lunch} onAddMeal={handleAddMeal} />
              <MealSection mealType="dinner" foods={userData.meals.dinner} onAddMeal={handleAddMeal} />
              <MealSection mealType="snack" foods={userData.meals.snack} onAddMeal={handleAddMeal} />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Homepage
