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
	// Sample data for charts
	const lineChartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Video Engagement",
				data: [65, 59, 80, 81, 56, 55],
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
			{
				label: "Image Engagement",
				data: [28, 48, 40, 19, 86, 27],
				borderColor: "rgb(255, 99, 132)",
				tension: 0.1,
			},
		],
	};

	const barChartData = {
		labels: ["Likes", "Comments", "Shares"],
		datasets: [
			{
				label: "Videos",
				data: [12, 19, 3],
				backgroundColor: "rgba(75, 192, 192, 0.5)",
			},
			{
				label: "Images",
				data: [8, 15, 5],
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	return (
		<div className='flex-1 p-6 flex flex-col justify-center items-center'>
			{/* Charts Section */}
			<div className='w-full max-w-3xl space-y-6'>
				<div className='bg-gray-800 rounded-lg p-6 shadow-xl'>
					<h3 className='text-xl font-bold mb-4 text-white text-center'>
						Engagement Over Time
					</h3>
					<Line data={lineChartData} />
				</div>
				<div className='bg-gray-800 rounded-lg p-6 shadow-xl'>
					<h3 className='text-xl font-bold mb-4 text-white text-center'>
						Engagement Metrics
					</h3>
					<Bar data={barChartData} />
				</div>
			</div>
		</div>
	);
}
