import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className='bg-gray-800 text-white p-6 mt-auto'>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				<div>
					<p className='text-sm'>
						© 2024 SuperMind Analytics. All
						rights reserved.
					</p>
				</div>
				<div className='flex gap-4'>
					<a
						href='#'
						className='hover:text-blue-400 transition-colors'
					>
						<FaGithub />
					</a>
					<a
						href='#'
						className='hover:text-blue-400 transition-colors'
					>
						<FaTwitter />
					</a>
					<a
						href='#'
						className='hover:text-blue-400 transition-colors'
					>
						<FaLinkedin />
					</a>
				</div>
			</div>
		</footer>
	);
}
