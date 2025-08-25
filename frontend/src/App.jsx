import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Signup from "./pages/Signup";


function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

