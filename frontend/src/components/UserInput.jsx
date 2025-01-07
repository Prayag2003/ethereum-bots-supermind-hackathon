import { useState } from "react";

export default function UserInput({ onSubmit, isLoading }) {
	const [postType, setPostType] = useState("");
	const [query, setQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(postType, query);
		setQuery("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='mt-4 border-t border-gray-700 pt-4'
		>
			<div className='flex items-center gap-4 mb-4'>
				<select
					value={postType}
					onChange={(e) =>
						setPostType(e.target.value)
					}
					className='bg-gray-700 rounded px-4 py-2 text-white'
					required
				>
					<option value=''>
						Select Post Type
					</option>
					<option value='Video'>Video</option>
					<option value='Image'>Image</option>
					<option value='Link'>Link</option>
				</select>
			</div>
			<div className='flex gap-2'>
				<input
					type='text'
					value={query}
					onChange={(e) =>
						setQuery(e.target.value)
					}
					placeholder='Enter your query...'
					className='flex-1 bg-gray-700 rounded px-4 py-2 text-white'
					required
				/>
				<button
					type='submit'
					disabled={isLoading}
					className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white disabled:opacity-50'
				>
					{isLoading ? "Sending..." : "Send"}
				</button>
			</div>
		</form>
	);
}
