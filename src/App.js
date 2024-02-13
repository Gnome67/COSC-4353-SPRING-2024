import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";

function App() {
  return (
    <div>
		<Routes>
			<Route path="/" element={<Login />}/>
			<Route index element={<Login />} />
			<Route path="/Profile" element={<Profile />} />
			<Route path="/Register" element={<Register />} />
		</Routes>
    </div>
  );
}

export default App;
