import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";

function App() {
  return (
    <div>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/Login" element={<Login />} />
			<Route path="/Profile" element={<Profile />} />
			<Route path="/Register" element={<Register />} />
		</Routes>
    </div>
  );
}

export default App;
