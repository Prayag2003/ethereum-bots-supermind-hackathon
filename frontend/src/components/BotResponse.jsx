export default function BotResponse({ response, isLoading }) {
	return (
		<div className='mt-4'>
			<div className='flex items-center gap-4'>
				<div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center'>
					<svg
						className='w-6 h-6'
						fill='currentColor'
						viewBox='0 0 20 20'
					>
						<path d='M13 7H7v6h6V7z' />
						<path
							fillRule='evenodd'
							d='M7 2a5 5 0 00-5 5v6a5 5 0 005 5h6a5 5 0 005-5V7a5 5 0 00-5-5H7zm6 1.5a3.5 3.5 0 013.5 3.5v6a3.5 3.5 0 01-3.5 3.5H7a3.5 3.5 0 01-3.5-3.5V7A3.5 3.5 0 017 3.5h6z'
						/>
					</svg>
				</div>
				<div className='flex-1 bg-gray-700 rounded p-4'>
					{isLoading ? (
						<div className='animate-pulse'>
							Loading...
						</div>
					) : (
						<div className='whitespace-pre-wrap'>
							{response}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
