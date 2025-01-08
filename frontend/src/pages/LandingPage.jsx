// src/pages/LandingPage.jsx
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
	// Sample data for demo chart
	const demoChartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Engagement Growth",
				data: [30, 45, 57, 75, 85, 95],
				backgroundColor: "rgba(59, 130, 246, 0.5)",
				borderColor: "rgb(59, 130, 246)",
				borderWidth: 2,
			},
		],
	};

	const features = [
		{
			icon: (
				<FaChartLine className='text-4xl text-blue-500' />
			),
			title: "Advanced Analytics",
			description:
				"Get deep insights into your social media performance with our comprehensive analytics tools.",
		},
		{
			icon: <FaRobot className='text-4xl text-purple-500' />,
			title: "AI-Powered Analysis",
			description:
				"Leverage cutting-edge AI to understand your audience engagement and content performance.",
		},
		{
			icon: <FaBrain className='text-4xl text-green-500' />,
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
		<div className='flex-1'>
			{/* Hero Section */}
			<section className='py-20 px-6 text-white'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h1 className='text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
								Transform Your
								Social Media
								Analytics
							</h1>
							<p className='text-xl text-gray-300 mb-8'>
								Harness the
								power of AI to
								understand your
								social media
								performance and
								make data-driven
								decisions.
							</p>
							<Link
								to='/dashboard'
								className='inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition-colors'
							>
								Get Started{" "}
								<FaArrowRight />
							</Link>
						</div>
						<div className='bg-gray-800 p-6 rounded-xl shadow-xl'>
							<Bar
								data={
									demoChartData
								}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-16 px-6 bg-gray-800/50'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-3xl font-bold text-center text-white mb-12'>
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
									className='bg-gray-800 p-6 rounded-xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300'
								>
									<div className='mb-4'>
										{
											feature.icon
										}
									</div>
									<h3 className='text-xl font-bold text-white mb-2'>
										{
											feature.title
										}
									</h3>
									<p className='text-gray-300'>
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
			<section className='py-16 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
							{stats.map(
								(
									stat,
									index
								) => (
									<div
										key={
											index
										}
										className='p-6'
									>
										<div className='text-4xl font-bold text-white mb-2'>
											{
												stat.value
											}
										</div>
										<div className='text-gray-300'>
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
			<section className='py-16 px-6'>
				<div className='max-w-3xl mx-auto text-center'>
					<div className='bg-gray-800 rounded-xl p-8 shadow-xl'>
						<h2 className='text-3xl font-bold text-white mb-4'>
							Ready to Optimize Your
							Social Media Strategy?
						</h2>
						<p className='text-gray-300 mb-8'>
							Join thousands of social
							media managers who are
							already leveraging our
							AI-powered analytics.
						</p>
						<Link
							to='/dashboard'
							className='inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-colors'
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
