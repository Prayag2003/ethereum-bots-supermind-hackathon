import React from "react";
import { Link } from "react-router-dom";
import {
	FaChartLine,
	FaRobot,
	FaBrain,
	FaArrowRight,
	FaUsers,
} from "react-icons/fa";
import { Bar } from "react-chartjs-2";

export default function LandingPage() {
	const demoChartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Engagement Growth",
				data: [30, 45, 57, 75, 85, 95],
				backgroundColor: [
					"rgba(129, 140, 248, 0.7)",
					"rgba(167, 139, 250, 0.7)",
					"rgba(192, 132, 252, 0.7)",
					"rgba(216, 180, 254, 0.7)",
					"rgba(240, 171, 252, 0.7)",
					"rgba(249, 168, 212, 0.7)",
				],
				borderColor: [
					"rgb(129, 140, 248)",
					"rgb(167, 139, 250)",
					"rgb(192, 132, 252)",
					"rgb(216, 180, 254)",
					"rgb(240, 171, 252)",
					"rgb(249, 168, 212)",
				],
				borderWidth: 2,
				borderRadius: 8,
			},
		],
	};

	const chartOptions = {
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					color: "rgba(148, 163, 184, 0.1)",
				},
				ticks: {
					color: "rgb(148, 163, 184)",
				},
			},
			x: {
				grid: {
					color: "rgba(148, 163, 184, 0.1)",
				},
				ticks: {
					color: "rgb(148, 163, 184)",
				},
			},
		},
		plugins: {
			legend: {
				labels: {
					color: "rgb(148, 163, 184)",
				},
			},
		},
	};

	const features = [
		{
			icon: (
				<FaChartLine className='text-4xl text-indigo-500' />
			),
			title: "Advanced Analytics",
			description:
				"Get deep insights into your social media performance with our comprehensive analytics tools.",
		},
		{
			icon: <FaRobot className='text-4xl text-violet-500' />,
			title: "AI-Powered Analysis",
			description:
				"Leverage cutting-edge AI to understand your audience engagement and content performance.",
		},
		{
			icon: <FaBrain className='text-4xl text-fuchsia-500' />,
			title: "Smart Recommendations",
			description:
				"Receive personalized recommendations to optimize your social media strategy.",
		},
	];

	const stats = [
		{ value: "95%", label: "Accuracy Rate" },
		{ value: "2M+", label: "Posts Analyzed" },
		{ value: "50K+", label: "Active Users" },
	];

	return (
		<div className='min-h-screen bg-slate-950'>
			{/* Modern Navbar */}

			{/* Hero Section - adjusted padding for fixed navbar */}
			<section className='relative pt-20 pb-20 px-6 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10' />
				<div className='max-w-7xl mx-auto relative'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<div className='space-y-8'>
							<h1 className='text-6xl font-bold leading-tight bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 text-transparent bg-clip-text'>
								Transform Your
								Social Media
								Analytics
							</h1>
							<p className='text-xl text-slate-300 leading-relaxed'>
								Harness the
								power of AI to
								understand your
								social media
								performance and
								make data-driven
								decisions.
							</p>
							<Link
								to='/chat'
								className='inline-flex items-center gap-2 bg-gradient-to-r from-indigo-700 to-fuchsia-800 hover:from-indigo-700 hover:to-fuchsia-600 px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/25'
							>
								Get Started{" "}
								<FaArrowRight className='transition-transform group-hover:translate-x-1' />
							</Link>
						</div>
						<div className='bg-gradient-to-r from-indigo-900  to-fuchsia-900 bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-800'>
							<Bar
								data={
									demoChartData
								}
								options={
									chartOptions
								}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Rest of the sections remain the same */}
			{/* Features Section */}
			<section className='py-24 px-6 relative'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-4xl font-bold text-center text-white mb-16 bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-transparent bg-clip-text'>
						Powerful Features for Smart
						Analysis
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{features.map(
							(feature, index) => (
								<div
									key={
										index
									}
									className='group bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-800 hover:border-slate-200'
								>
									<div className='mb-6 transition-transform duration-300 group-hover:scale-110'>
										{
											feature.icon
										}
									</div>
									<h3 className='text-2xl font-bold text-white mb-4'>
										{
											feature.title
										}
									</h3>
									<p className='text-slate-300 leading-relaxed'>
										{
											feature.description
										}
									</p>
								</div>
							)
						)}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className='py-24 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 rounded-2xl p-12 backdrop-blur-sm border border-slate-800'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
							{stats.map(
								(
									stat,
									index
								) => (
									<div
										key={
											index
										}
										className='space-y-4'
									>
										<div className='text-5xl font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-transparent bg-clip-text'>
											{
												stat.value
											}
										</div>
										<div className='text-lg text-slate-300'>
											{
												stat.label
											}
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-24 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<div className='bg-slate-900/50 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-slate-800'>
						<h2 className='text-4xl font-bold text-white mb-6'>
							Ready to Optimize Your
							Social Media Strategy?
						</h2>
						<p className='text-xl text-slate-300 mb-10'>
							Join thousands of social
							media managers who are
							already leveraging our
							AI-powered analytics.
						</p>
						<Link
							to='/dashboard'
							className='inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/25'
						>
							Start Analyzing Now{" "}
							<FaArrowRight />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
