import { useState } from "react";
import UserInput from "./UserInput";
import ChatHistory from "./ChatHistory";

export default function AnalyticsModule() {
	const [chatHistory, setChatHistory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleQuery = async (postType, query) => {
		setIsLoading(true);
		try {
			const res = await fetch("http://localhost:8000/query", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					post_type: postType,
					query,
				}),
			});
			const data = await res.json();
			setChatHistory((prev) => [
				...prev,
				{
					type: "user",
					postType,
					content: query,
				},
				{
					type: "bot",
					content: data.report,
				},
			]);
		} catch (error) {
			setChatHistory((prev) => [
				...prev,
				{
					type: "error",
					content: "Failed to fetch response",
				},
			]);
		}
		setIsLoading(false);
	};

	return (
		<div className='max-w-6xl mx-auto bg-gray-800 rounded-lg border border-gray-700 overflow-hidden'>
			<div className='p-6'>
				<h2 className='text-xl text-white mb-6'>
					Analysis Module
				</h2>
				<div className='space-y-6'>
					<ChatHistory messages={chatHistory} />
					<UserInput
						onSubmit={handleQuery}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</div>
	);
}
