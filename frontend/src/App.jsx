// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/Chat";

function App() {
	return (
		<Router>
			<div className='flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800'>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<LandingPage />}
					/>
					<Route
						path='/dashboard'
						element={<Dashboard />}
					/>
					<Route
						path='/chat'
						element={<Chat />}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Dashboard from "./pages/Dashboard";
// import LandingPage from "./pages/LandingPage";

// function App() {
// 	return (
// 		<Router>
// 			<div className='flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800'>
// 				<Navbar />
// 				<Routes>
// 					<Route
// 						path='/'
// 						element={<LandingPage />}
// 					/>
// 					<Route
// 						path='/dashboard'
// 						element={<Dashboard />}
// 					/>
// 				</Routes>
// 				<Footer />
// 			</div>
// 		</Router>
// 	);
// }

// export default App;
