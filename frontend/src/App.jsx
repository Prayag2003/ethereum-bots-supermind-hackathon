import AnalyticsModule from "./components/AnalyticsModule";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div className='min-h-screen flex flex-col bg-gray-900'>
			<Navbar />
			<main className='flex-1 container mx-auto px-4 py-6'>
				<AnalyticsModule />
			</main>
			<Footer />
		</div>
	);
}
