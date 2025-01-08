import { Line, Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function Dashboard() {
	const lineChartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Video Engagement",
				data: [65, 59, 80, 81, 56, 55],
				borderColor: "rgb(99, 102, 241)", // indigo-500
				backgroundColor: "rgba(99, 102, 241, 0.1)",
				tension: 0.4,
				fill: true,
			},
			{
				label: "Image Engagement",
				data: [28, 48, 40, 19, 86, 27],
				borderColor: "rgb(192, 132, 252)", // violet-400
				backgroundColor: "rgba(192, 132, 252, 0.1)",
				tension: 0.4,
				fill: true,
			},
		],
	};

	const barChartData = {
		labels: ["Likes", "Comments", "Shares"],
		datasets: [
			{
				label: "Videos",
				data: [12, 19, 3],
				backgroundColor: "rgba(99, 102, 241, 0.7)", // indigo-500
			},
			{
				label: "Images",
				data: [8, 15, 5],
				backgroundColor: "rgba(192, 132, 252, 0.7)", // violet-400
			},
		],
	};

	return (
		<div className='flex-1 p-8 bg-slate-950'>
			<div className='w-full max-w-5xl mx-auto space-y-8'>
				<div className='bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-800'>
					<h3 className='text-2xl font-bold mb-6 text-white text-center bg-gradient-to-r from-indigo-400 to-violet-400 text-transparent bg-clip-text'>
						Engagement Over Time
					</h3>
					<Line data={lineChartData} />
				</div>
				<div className='bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-800'>
					<h3 className='text-2xl font-bold mb-6 text-white text-center bg-gradient-to-r from-indigo-400 to-violet-400 text-transparent bg-clip-text'>
						Engagement Metrics
					</h3>
					<Bar data={barChartData} />
				</div>
			</div>
		</div>
	);
}
