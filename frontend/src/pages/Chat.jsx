import { useState, useRef, useEffect } from "react";
import { FaRobot, FaUser, FaPaperPlane, FaSpinner } from "react-icons/fa";

export default function Chat() {
	const [postType, setPostType] = useState("Video");
	const [query, setQuery] = useState("");
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef(null);
	const inputRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!query.trim()) return;

		const userMessage = {
			id: Date.now(),
			type: "user",
			content: query,
			postType: postType,
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		setQuery("");
		setIsLoading(true);

		try {
			const endPoint =
				"https://ethereum-bots-supermind-hackathon.onrender.com/query";

			const res = await fetch(endPoint, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					post_type: postType,
					query: userMessage.content,
				}),
			});

			if (!res.ok) {
				throw new Error(
					`Failed to fetch: ${res.statusText}`
				);
			}

			const data = await res.json();

			if (!data.report) {
				throw new Error(
					"Invalid response format: Missing 'report' field."
				);
			}

			const botMessage = {
				id: Date.now(),
				type: "assistant",
				content: data.report,
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, botMessage]);
		} catch (error) {
			console.error("Error:", error);

			const errorMessage = {
				id: Date.now(),
				type: "error",
				content: `I apologize, but I encountered an error while processing your request: ${error.message}. Please try again.`,
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, errorMessage]);
		}

		setIsLoading(false);
	};

	const formatTime = (date) => {
		return date.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
	};

	const LoadingDots = () => (
		<div className='flex space-x-1.5 items-center h-6'>
			<div
				className='w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce'
				style={{ animationDelay: "0ms" }}
			/>
			<div
				className='w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce'
				style={{ animationDelay: "150ms" }}
			/>
			<div
				className='w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce'
				style={{ animationDelay: "300ms" }}
			/>
		</div>
	);

	return (
		<div className='flex flex-col h-[calc(100vh-8rem)] max-w-6xl mx-auto px-4'>
			{/* Chat Header */}
			<div className='flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-t-2xl'>
				<div className='flex items-center gap-4'>
					<div className='bg-indigo-500/10 p-3 rounded-xl'>
						<FaRobot className='text-indigo-500 text-xl' />
					</div>
					<div className='flex flex-col px-10'>
						<h2 className='text-xl font-bold text-white'>
							Analytics Assistant
						</h2>
						<p className='text-slate-400'>
							Ask me anything about
							your social media
							analytics
						</p>
					</div>
				</div>
				<select
					value={postType}
					onChange={(e) =>
						setPostType(e.target.value)
					}
					className='bg-slate-800 text-white px-4 py-2 rounded-xl border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
				>
					<option value='Video'>Video</option>
					<option value='Image'>Image</option>
					<option value='Link'>Link</option>
				</select>
			</div>

			{/* Messages Container */}
			<div className='flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-slate-900 to-slate-950'>
				{messages.length === 0 && (
					<div className='text-center text-slate-500 mt-2'>
						<div className='bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-slate-800'>
							<FaRobot className='text-5xl mx-auto mb-4 text-indigo-500' />
							<h3 className='text-xl font-bold text-white mb-3'>
								Welcome to
								Analytics Chat!
							</h3>
							<p className='text-slate-400'>
								Ask me about
								your social
								media metrics,
								engagement
								rates, or
								content
								performance.
							</p>
						</div>
					</div>
				)}

				{messages.map((message) => (
					<div
						key={message.id}
						className={`flex ${
							message.type === "user"
								? "justify-end"
								: "justify-start"
						}`}
					>
						<div
							className={`flex gap-4 max-w-[80%] ${
								message.type ===
								"user"
									? "flex-row-reverse"
									: "flex-row"
							}`}
						>
							<div
								className={`flex-shrink-0 ${
									message.type ===
									"user"
										? "ml-3"
										: "mr-3"
								}`}
							>
								{message.type ===
								"user" ? (
									<div className='bg-indigo-500/10 p-3 rounded-xl'>
										<FaUser className='text-indigo-500' />
									</div>
								) : (
									<div className='bg-fuchsia-500/10 p-3 rounded-xl'>
										<FaRobot className='text-fuchsia-500' />
									</div>
								)}
							</div>

							<div
								className={`rounded-2xl p-6 ${
									message.type ===
									"user"
										? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
										: message.type ===
										  "error"
										? "bg-red-500/10 text-red-200 border border-red-500/20"
										: "bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white"
								}`}
							>
								{message.type ===
									"user" && (
									<div className='text-sm text-white/75 mb-2'>
										Analyzing{" "}
										{
											message.postType
										}{" "}
										Content
									</div>
								)}
								<p className='text-sm whitespace-pre-wrap leading-relaxed'>
									{
										message.content
									}
								</p>
								<span className='text-xs opacity-75 mt-3 block'>
									{formatTime(
										message.timestamp
									)}
								</span>
							</div>
						</div>
					</div>
				))}

				{isLoading && (
					<div className='flex justify-start'>
						<div className='flex gap-4'>
							<div className='bg-fuchsia-500/10 p-3 rounded-xl'>
								<FaRobot className='text-fuchsia-500' />
							</div>
							<div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700'>
								<LoadingDots />
							</div>
						</div>
					</div>
				)}

				<div ref={messagesEndRef} />
			</div>

			{/* Input Form */}
			<div className='p-6 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-b-2xl'>
				<form
					onSubmit={handleSubmit}
					className='flex gap-3'
				>
					<input
						ref={inputRef}
						type='text'
						value={query}
						onChange={(e) =>
							setQuery(e.target.value)
						}
						placeholder='Ask about your analytics...'
						className='flex-1 bg-slate-800 text-white px-6 py-4 rounded-xl border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-500'
					/>
					<button
						type='submit'
						disabled={
							isLoading ||
							!query.trim()
						}
						className='bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-xl text-white flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25'
					>
						{isLoading ? (
							<FaSpinner className='animate-spin' />
						) : (
							<FaPaperPlane />
						)}
					</button>
				</form>
			</div>
		</div>
	);
}
