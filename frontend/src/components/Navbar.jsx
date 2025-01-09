import { Link } from "react-router-dom";
import { FaChartBar, FaHome, FaCog, FaComment, FaUser } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className='bg-slate-900/50 backdrop-blur-lg border-b border-slate-800 text-white py-5 px-6 sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				<Link
					to='/'
					className='text-2xl font-bold flex items-center gap-3 hover:opacity-90 transition-opacity'
				>
					<div className='bg-gradient-to-r from-indigo-500 to-fuchsia-500 p-2 rounded-xl'>
						<FaChartBar className='text-white' />
					</div>
					<span className='bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 text-transparent bg-clip-text'>
						SuperMind
					</span>
				</Link>

				<div className='flex gap-8'>
					<Link
						to='/'
						className='flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group'
					>
						<FaHome className='text-slate-400 group-hover:text-indigo-400 transition-colors' />
						<span className='text-slate-300 group-hover:text-white transition-colors'>
							Home
						</span>
					</Link>

					<Link
						to='/dashboard'
						className='flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group'
					>
						<FaChartBar className='text-slate-400 group-hover:text-indigo-400 transition-colors' />
						<span className='text-slate-300 group-hover:text-white transition-colors'>
							Dashboard
						</span>
					</Link>

					<Link
						to='/chat'
						className='flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group'
					>
						<FaComment className='text-slate-400 group-hover:text-indigo-400 transition-colors' />
						<span className='text-slate-300 group-hover:text-white transition-colors'>
							Chat
						</span>
					</Link>

					<Link
						to='/profile'
						className='flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group'
					>
						<FaUser className='text-slate-400 group-hover:text-indigo-400 transition-colors' />
						<span className='text-slate-300 group-hover:text-white transition-colors'>
							Profile
						</span>
					</Link>
				</div>

				{/* Optional: Add a primary action button */}
				<Link
					to='/chat'
					className='bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-indigo-500/25 transition-all duration-300'
				>
					Get Started
				</Link>
			</div>
		</nav>
	);
}
