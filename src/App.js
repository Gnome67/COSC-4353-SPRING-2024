import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div>
		<Routes>
			<Route path="/" element={<Login />}/>
			<Route index element={<Login />} />
			<Route path="/Profile" element={<Profile />} />
		</Routes>
    </div>
  );
}

export default App;
