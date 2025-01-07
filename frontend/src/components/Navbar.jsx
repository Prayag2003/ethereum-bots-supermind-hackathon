export default function Navbar() {
	return (
		<nav className='bg-gray-800 border-b border-gray-700'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex items-center justify-between'>
					<h1 className='text-xl font-bold text-white'>
						SuperMind Analytics
					</h1>
					<div className='flex items-center space-x-4'>
						<button className='text-gray-300 hover:text-white'>
							Dashboard
						</button>
						<button className='text-gray-300 hover:text-white'>
							Settings
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
