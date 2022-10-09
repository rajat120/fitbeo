import React, { useEffect } from "react";

import Highcharts from "highcharts";

import HighchartsReact from "highcharts-react-official";
const options = {
	chart: {
		height: 300,
		type: "spline",
		width: 300,
	},
	title: {
		text: "",
	},

	legend: {
		symbolWidth: 80,
	},

	plotOptions: {
		series: {
			color: "#000000",
		},
	},

	series: [
		{
			name: "Previous",
			data: [1, 3, 2, 4, 5, 4, 6, 2, 3, 5, 6],
			color: "red",
		},
		{
			name: "Current",
			data: [2, 4, 1, 3, 4, 2, 9, 1, 2, 3, 4, 5],
			color: "#0066FF",
		},
	],
};

function Serieschart() {
	useEffect(() => {}, [options]);

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}

export default Serieschart;
