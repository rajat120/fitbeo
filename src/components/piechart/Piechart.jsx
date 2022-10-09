import React, { useEffect } from "react";

import Highcharts from "highcharts";

import HighchartsReact from "highcharts-react-official";
const options = {
	chart: {
		type: "pie",
		renderTo: "container",
		height: 300,
		width: 300,
	},
	title: {
		verticalAlign: "middle",
		floating: true,
		text: "",
	},
	plotOptions: {
		pie: {
			innerSize: "70%",
		},
	},

	series: [
		{
			data: [
				["Completed", 70],
				["Cancel", 10],
				["Pending", 20],
			],
		},
	],
};

function Piechart() {
	useEffect(() => {}, [options]);

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}

export default Piechart;
