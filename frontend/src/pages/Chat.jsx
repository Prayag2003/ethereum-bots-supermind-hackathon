// src/pages/Chat.jsx
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
			const res = await fetch("http://localhost:8000/query", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					post_type: postType,
					query: userMessage.content,
				}),
			});
			const data = await res.json();

			const botMessage = {
				id: Date.now(),
				type: "assistant",
				content: data.report,
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, botMessage]);
		} catch (error) {
			const errorMessage = {
				id: Date.now(),
				type: "error",
				content: "I apologize, but I encountered an error while processing your request. Please try again.",
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

	// Loading animation dots
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
			<div className='flex items-center justify-between p-4 border-b border-gray-700'>
				<div className='flex items-center gap-3'>
					<div className='bg-blue-500/10 p-2 rounded-lg'>
						<FaRobot className='text-blue-500 text-xl' />
					</div>
					<div className='flex flex-col px-20'>
						<h2 className='text-lg font-semibold text-white'>
							Analytics Assistant
						</h2>
						<p className='text-sm text-gray-400'>
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
					className='bg-gray-700/50 text-white px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
				>
					<option value='Video'>Video</option>
					<option value='Image'>Image</option>
					<option value='Link'>Link</option>
				</select>
			</div>

			{/* Messages Container */}
			<div className='flex-1 overflow-y-auto p-4 space-y-4'>
				{messages.length === 0 && (
					<div className='text-center text-gray-500 mt-8'>
						<div className='bg-gray-800/50 rounded-lg p-6 max-w-md mx-auto'>
							<FaRobot className='text-4xl mx-auto mb-4 text-gray-400' />
							<h3 className='text-lg font-medium text-gray-300 mb-2'>
								Welcome to
								Analytics Chat!
							</h3>
							<p className='text-sm text-gray-400'>
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
							className={`flex gap-3 max-w-[80%] ${
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
										? "ml-2"
										: "mr-2"
								}`}
							>
								{message.type ===
								"user" ? (
									<div className='bg-blue-500/10 p-2 rounded-full'>
										<FaUser className='text-blue-500' />
									</div>
								) : (
									<div className='bg-purple-500/10 p-2 rounded-full'>
										<FaRobot className='text-purple-500' />
									</div>
								)}
							</div>

							<div
								className={`rounded-2xl p-4 ${
									message.type ===
									"user"
										? "bg-blue-500 text-white"
										: message.type ===
										  "error"
										? "bg-red-500/10 text-red-200 border border-red-500/20"
										: "bg-gray-700 text-white"
								}`}
							>
								{message.type ===
									"user" && (
									<div className='text-sm opacity-75 mb-1'>
										Analyzing{" "}
										{
											message.postType
										}{" "}
										Content
									</div>
								)}
								<p className='text-sm whitespace-pre-wrap'>
									{
										message.content
									}
								</p>
								<span className='text-xs opacity-75 mt-2 block'>
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
						<div className='flex gap-3'>
							<div className='bg-purple-500/10 p-2 rounded-full'>
								<FaRobot className='text-purple-500' />
							</div>
							<div className='bg-gray-700 rounded-2xl p-4'>
								<LoadingDots />
							</div>
						</div>
					</div>
				)}

				<div ref={messagesEndRef} />
			</div>

			{/* Input Form */}
			<div className='p-4 border-t border-gray-700'>
				<form
					onSubmit={handleSubmit}
					className='flex gap-2'
				>
					<input
						ref={inputRef}
						type='text'
						value={query}
						onChange={(e) =>
							setQuery(e.target.value)
						}
						placeholder='Ask about your analytics...'
						className='flex-1 bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400'
					/>
					<button
						type='submit'
						disabled={
							isLoading ||
							!query.trim()
						}
						className='bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed px-4 py-2 rounded-lg text-white flex items-center gap-2 transition-colors'
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
