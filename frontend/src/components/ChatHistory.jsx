// export default function ChatHistory({ messages }) {
// 	return (
// 		<div className='space-y-4'>
// 			{messages.map((message, index) => (
// 				<div
// 					key={index}
// 					className={`flex gap-4 ${
// 						message.type === "user"
// 							? "justify-end"
// 							: "justify-start"
// 					}`}
// 				>
// 					{message.type === "bot" && (
// 						<div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center'>
// 							<svg
// 								className='w-6 h-6'
// 								fill='currentColor'
// 								viewBox='0 0 20 20'
// 							>
// 								<path d='M13 7H7v6h6V7z' />
// 								<path
// 									fillRule='evenodd'
// 									d='M7 2a5 5 0 00-5 5v6a5 5 0 005 5h6a5 5 0 005-5V7a5 5 0 00-5-5H7zm6 1.5a3.5 3.5 0 013.5 3.5v6a3.5 3.5 0 01-3.5 3.5H7a3.5 3.5 0 01-3.5-3.5V7A3.5 3.5 0 017 3.5h6z'
// 								/>
// 							</svg>
// 						</div>
// 					)}
// 					<div
// 						className={`flex-1 p-4 rounded-lg ${
// 							message.type === "user"
// 								? "bg-blue-600 ml-12"
// 								: message.type ===
// 								  "error"
// 								? "bg-red-600"
// 								: "bg-gray-700"
// 						}`}
// 					>
// 						{message.type === "user" && (
// 							<div className='text-sm text-gray-300 mb-1'>
// 								Post Type:{" "}
// 								{
// 									message.postType
// 								}
// 							</div>
// 						)}
// 						<div className='whitespace-pre-wrap text-white'>
// 							{message.content}
// 						</div>
// 					</div>
// 					{message.type === "user" && (
// 						<div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center'>
// 							<svg
// 								className='w-6 h-6'
// 								fill='currentColor'
// 								viewBox='0 0 20 20'
// 							>
// 								<path d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' />
// 							</svg>
// 						</div>
// 					)}
// 				</div>
// 			))}
// 		</div>
// 	);
// }
