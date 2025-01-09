import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";

const AppContent = () => {
	const location = useLocation();
	const hideFooterPaths = ["/chat"]; // Add any other paths where footer should be hidden

	const shouldShowFooter = !hideFooterPaths.includes(location.pathname);

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800'>
			<Navbar />
			<main className='flex-grow'>
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
					<Route
						path='/profile'
						element={<Profile />}
					/>
				</Routes>
			</main>
			{shouldShowFooter && <Footer />}
		</div>
	);
};

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

export default App;
