import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginForm from "./Pages/Login";
import Profile from "./Pages/Profile";
import RegistrationForm from "./Pages/Register";
import Header from "./header";
import FuelQuoteForm from "./Pages/fuelQuoteForm";
import QuotePage from "./Pages/QuoteHistory";
import "./App.css"

function App() {
  return (
    <div className="app-container">
		<Header />  
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/Login" element={<LoginForm />} />
			<Route path="/profile/edit" element={<Profile />} />
			<Route path="/Register" element={<RegistrationForm />} />
			<Route path="/quote" element={<FuelQuoteForm />} />
			<Route path="/history" element={<QuotePage />} />
		</Routes>
    </div>
  );
}

export default App;
