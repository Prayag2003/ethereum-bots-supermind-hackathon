import { useState } from "react";
import {
	FaUser,
	FaBell,
	FaLock,
	FaPalette,
	FaChartLine,
	FaSignOutAlt,
} from "react-icons/fa";

export default function Profile() {
	const [notifications, setNotifications] = useState({
		email: true,
		push: false,
		weekly: true,
		performance: true,
	});

	const [theme, setTheme] = useState("dark");
	const [dataRefresh, setDataRefresh] = useState("30");

	// State for the profile form fields and errors
	const [form, setForm] = useState({
		name: "",
		email: "",
		company: "",
	});
	const [errors, setErrors] = useState({
		name: false,
		email: false,
		company: false,
	});

	// Handle input change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	// Validate required fields
	const validateForm = () => {
		const newErrors = {
			name: !form.name.trim(),
			email: !form.email.trim(),
			company: !form.company.trim(),
		};
		setErrors(newErrors);
		return !Object.values(newErrors).includes(true);
	};

	// Handle save changes
	const handleSave = () => {
		if (validateForm()) {
			// Save the data to localStorage or wherever you want to persist
			localStorage.setItem("profile", JSON.stringify(form));
			alert("Changes saved!");
		} else {
			alert("Please fill in all required fields.");
		}
	};

	return (
		<div className='flex-1 bg-slate-950 p-8'>
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-transparent bg-clip-text'>
					Settings
				</h1>

				{/* Profile Section */}
				<div className='bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 mb-8'>
					<div className='flex items-center gap-4 mb-6'>
						<FaUser className='text-2xl text-indigo-500' />
						<h2 className='text-xl font-semibold text-white'>
							Profile Settings
						</h2>
					</div>

					<div className='space-y-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div>
								<label className='block text-sm font-medium text-slate-400 mb-2'>
									Full
									Name
								</label>
								<input
									type='text'
									name='name'
									value={
										form.name
									}
									onChange={
										handleInputChange
									}
									className={`w-full bg-slate-800 text-white px-4 py-2 rounded-xl border ${
										errors.name
											? "border-red-500"
											: "border-slate-700"
									} focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
									placeholder='Ethereum Bots'
								/>
								{errors.name && (
									<p className='text-red-500 text-sm mt-2'>
										Full
										Name
										is
										required
									</p>
								)}
							</div>
							<div>
								<label className='block text-sm font-medium text-slate-400 mb-2'>
									Email
									Address
								</label>
								<input
									type='email'
									name='email'
									value={
										form.email
									}
									onChange={
										handleInputChange
									}
									className={`w-full bg-slate-800 text-white px-4 py-2 rounded-xl border ${
										errors.email
											? "border-red-500"
											: "border-slate-700"
									} focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
									placeholder='ethereum-bots@botnet.com'
								/>
								{errors.email && (
									<p className='text-red-500 text-sm mt-2'>
										Email
										Address
										is
										required
									</p>
								)}
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium text-slate-400 mb-2'>
								Company
							</label>
							<input
								type='text'
								name='company'
								value={
									form.company
								}
								onChange={
									handleInputChange
								}
								className={`w-full bg-slate-800 text-white px-4 py-2 rounded-xl border ${
									errors.company
										? "border-red-500"
										: "border-slate-700"
								} focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
								placeholder='Ethereum Bots Inc.'
							/>
							{errors.company && (
								<p className='text-red-500 text-sm mt-2'>
									Company
									is
									required
								</p>
							)}
						</div>
					</div>
				</div>

				{/* Notifications Section */}
				<div className='bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 mb-8'>
					<div className='flex items-center gap-4 mb-6'>
						<FaBell className='text-2xl text-violet-500' />
						<h2 className='text-xl font-semibold text-white'>
							Notification Preferences
						</h2>
					</div>

					<div className='space-y-4'>
						{Object.entries(
							notifications
						).map(([key, value]) => (
							<div
								key={key}
								className='flex items-center justify-between py-2'
							>
								<span className='text-slate-300 capitalize'>
									{key
										.replace(
											/([A-Z])/g,
											" $1"
										)
										.trim()}{" "}
									Notifications
								</span>
								<label className='relative inline-flex items-center cursor-pointer'>
									<input
										type='checkbox'
										className='sr-only peer'
										checked={
											value
										}
										onChange={() =>
											setNotifications(
												(
													prev
												) => ({
													...prev,
													[key]: !prev[
														key
													],
												})
											)
										}
									/>
									<div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
								</label>
							</div>
						))}
					</div>
				</div>

				{/* Analytics Settings */}
				<div className='bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 mb-8'>
					<div className='flex items-center gap-4 mb-6'>
						<FaChartLine className='text-2xl text-fuchsia-500' />
						<h2 className='text-xl font-semibold text-white'>
							Analytics Preferences
						</h2>
					</div>

					<div className='space-y-6'>
						<div>
							<label className='block text-sm font-medium text-slate-400 mb-2'>
								Data Refresh
								Interval
							</label>
							<select
								value={
									dataRefresh
								}
								onChange={(e) =>
									setDataRefresh(
										e
											.target
											.value
									)
								}
								className='w-full bg-slate-800 text-white px-4 py-2 rounded-xl border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
							>
								<option value='15'>
									Every 15
									minutes
								</option>
								<option value='30'>
									Every 30
									minutes
								</option>
								<option value='60'>
									Every
									hour
								</option>
							</select>
						</div>

						<div>
							<label className='block text-sm font-medium text-slate-400 mb-2'>
								Default Date
								Range
							</label>
							<select className='w-full bg-slate-800 text-white px-4 py-2 rounded-xl border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'>
								<option value='7'>
									Last 7
									days
								</option>
								<option value='30'>
									Last 30
									days
								</option>
								<option value='90'>
									Last 90
									days
								</option>
							</select>
						</div>
					</div>
				</div>

				{/* Theme Settings */}
				<div className='bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 mb-8'>
					<div className='flex items-center gap-4 mb-6'>
						<FaPalette className='text-2xl text-indigo-500' />
						<h2 className='text-xl font-semibold text-white'>
							Appearance
						</h2>
					</div>

					<div className='grid grid-cols-3 gap-4'>
						{[
							"light",
							"dark",
							"system",
						].map((themeOption) => (
							<button
								key={
									themeOption
								}
								onClick={() =>
									setTheme(
										themeOption
									)
								}
								className={`p-4 rounded-xl border ${
									theme ===
									themeOption
										? "border-indigo-500 bg-indigo-500/10 text-white"
										: "border-slate-700 bg-slate-800 text-slate-400"
								} hover:border-indigo-500/50 transition-all duration-200`}
							>
								<span className='capitalize'>
									{
										themeOption
									}
								</span>
							</button>
						))}
					</div>
				</div>

				{/* Danger Zone */}
				<div className='bg-red-500/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/10'>
					<div className='flex items-center gap-4 mb-6'>
						<FaLock className='text-2xl text-red-500' />
						<h2 className='text-xl font-semibold text-white'>
							Danger Zone
						</h2>
					</div>

					<div className='flex justify-between items-center'>
						<div>
							<h3 className='text-lg font-medium text-red-200 mb-1'>
								Delete Account
							</h3>
							<p className='text-slate-400 text-sm'>
								Once deleted,
								your account
								cannot be
								recovered
							</p>
						</div>
						<button className='px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors duration-200'>
							Delete Account
						</button>
					</div>
				</div>

				{/* Save Button */}
				<div className='mt-8 flex justify-end gap-4'>
					<button
						className='px-6 py-3 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 transition-colors'
						onClick={() =>
							setForm({
								name: "",
								email: "",
								company: "",
							})
						}
					>
						Cancel
					</button>
					<button
						className='px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-xl hover:from-indigo-600 hover:to-violet-600 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25'
						onClick={handleSave}
					>
						Save Changes
					</button>
				</div>
			</div>
		</div>
	);
}
