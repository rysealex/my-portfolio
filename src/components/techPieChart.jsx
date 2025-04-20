import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const TechPieChart = ({ data, onSliceClick }) => {

	// handle the slice click
	const handleSliceClick = (event, params) => {
		const { dataIndex, seriesId } = params;
		const clickedData = data?.[dataIndex];
		console.log("Pie slice clicked: ", clickedData);
		if (onSliceClick && clickedData?.label) {
			onSliceClick(clickedData.label);
		}
	};

	return (
		<PieChart
			series={[
				{
					data: data,
					highlightScope: { fade: 'global', highlight: 'item' },
					faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
					highlighted: { additionalRadius: 5, cornerRadius: 6 },
					valueFormatter: (params) => `${params.value}%`,
					
				},
			]}
			onItemClick={handleSliceClick}
			height={220}
			width={220}
		/>
	);
}

export default TechPieChart;