// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { FaChartBar, FaHome, FaCog, FaComment } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className='bg-gray-800 text-white p-4 shadow-lg'>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				<Link
					to='/'
					className='text-2xl font-bold flex items-center gap-2'
				>
					<FaChartBar className='text-blue-500' />
					<span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
						SuperMind Analytics
					</span>
				</Link>
				<div className='flex gap-6'>
					<Link
						to='/'
						className='flex items-center gap-2 hover:text-blue-400 transition-colors'
					>
						<FaHome /> Home
					</Link>
					<Link
						to='/dashboard'
						className='flex items-center gap-2 hover:text-blue-400 transition-colors'
					>
						<FaChartBar /> Dashboard
					</Link>
					<Link
						to='/chat'
						className='flex items-center gap-2 hover:text-blue-400 transition-colors'
					>
						<FaComment /> Chat
					</Link>
					<button className='flex items-center gap-2 hover:text-blue-400 transition-colors'>
						<FaCog /> Settings
					</button>
				</div>
			</div>
		</nav>
	);
}

// import { Link } from "react-router-dom";
// import { FaChartBar, FaHome, FaCog } from "react-icons/fa";

// export default function Navbar() {
// 	return (
// 		<nav className='bg-gray-800 text-white p-4 shadow-lg'>
// 			<div className='max-w-7xl mx-auto flex justify-between items-center'>
// 				<Link
// 					to='/'
// 					className='text-2xl font-bold flex items-center gap-2'
// 				>
// 					<FaChartBar className='text-blue-500' />
// 					<span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
// 						SuperMind Analytics
// 					</span>
// 				</Link>
// 				<div className='flex gap-6'>
// 					<Link
// 						to='/'
// 						className='flex items-center gap-2 hover:text-blue-400 transition-colors'
// 					>
// 						<FaHome /> Home
// 					</Link>
// 					<Link
// 						to='/dashboard'
// 						className='flex items-center gap-2 hover:text-blue-400 transition-colors'
// 					>
// 						<FaChartBar /> Dashboard
// 					</Link>
// 					<button className='flex items-center gap-2 hover:text-blue-400 transition-colors'>
// 						<FaCog /> Settings
// 					</button>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// }
