import "./App.css";
import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoutes";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import SignupCongrats from "./pages/SignupCongrats";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./state/authentication/loginTypes";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        dispatch({ type: LOGIN_SUCCESS, payload: { token } });
      } catch (err) {
        localStorage.removeItem('token')
        dispatch({ type: LOGIN_FAILURE })
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('token');
    
    if (token) {
      localStorage.setItem('token', token);
      dispatch({ type: LOGIN_SUCCESS, payload: { token } });
      
      window.history.replaceState({}, document.title, '/homepage');
    }
  }, [location, dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }/>
        <Route path="/signupCongrats" element={<SignupCongrats />} />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }/>
        <Route path="/homepage" element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;

