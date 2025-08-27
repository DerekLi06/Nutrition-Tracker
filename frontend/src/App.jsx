import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import SignupCongrats from "./pages/SignupCongrats";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupCongrats" element={<SignupCongrats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;

