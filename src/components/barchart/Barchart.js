import React, { useEffect } from "react";

import Highcharts from "highcharts";

import HighchartsReact from "highcharts-react-official";
const options = {
	chart: {
		height: 350,
		type: "column",
	},
	title: {
		text: "",
	},
	series: [
		{
			pointWidth: 10,
			events: {
				click: (e) => {
					this.categoryClicked(e);
				},
			},
			data: [
				{
					y: 2000000,
					drilldown: "Chrome",
				},
				{
					y: 2500000,
					drilldown: "Firefox",
				},
				{
					y: 800000,
					drilldown: "Chrome",
				},
				{
					y: 50000,
					drilldown: "Chrome",
				},
				{
					y: 500000,
					drilldown: "Chrome",
				},
				{
					y: 900000,
					drilldown: "Chrome",
				},
				{
					y: 440000,
					drilldown: "Chrome",
				},
				{
					y: 700000,
					drilldown: "Chrome",
				},
			],
		},
	],
	drilldown: {
		series: [
			{
				pointWidth: 10,
				name: "Chrome",
				id: "Chrome",
				data: [
					["v65.0", 0.1],
					["v64.0", 1.3],
				],
			},
			{
				name: "Firefox",
				id: "Firefox",
				data: [
					["v58.0", 1.02],
					["v57.0", 7.36],
				],
			},
		],
	},
};

function Barchart() {
	useEffect(() => {}, [options]);

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}

export default Barchart;
