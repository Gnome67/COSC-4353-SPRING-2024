import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Header from "./header";
import fuelQuoteForm from "./Pages/fuelQuoteForm";

function App() {
  return (
    <div>
		<Header />
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/Login" element={<Login />} />
			<Route path="/Profile" element={<Profile />} />
			<Route path="/Register" element={<Register />} />
			<Route path="/Quote" element={<fuelQuoteForm />} />
		</Routes>
    </div>
  );
}

export default App;
