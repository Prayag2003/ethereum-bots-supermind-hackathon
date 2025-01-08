import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className='bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 text-white p-8 mt-auto'>
			<div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4'>
				<div>
					<p className='text-slate-400'>
						© 2024 SuperMind Analytics. All
						rights reserved.
					</p>
				</div>
				<div className='flex gap-6'>
					<a
						href='https://www.github.com/Prayag2003'
						className='text-slate-400 hover:text-indigo-400 transition-colors text-xl'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub />
					</a>
					<a
						href='https://x.com/prayagbhatt2003'
						className='text-slate-400 hover:text-indigo-400 transition-colors text-xl'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaTwitter />
					</a>
					<a
						href='https://www.linkedin.com/in/prayagbhatt2003'
						className='text-slate-400 hover:text-indigo-400 transition-colors text-xl'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaLinkedin />
					</a>
				</div>
			</div>
		</footer>
	);
}
