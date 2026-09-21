import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const TechPieChart = ({ data, onSliceClick }) => {
  // handle the slice click
  const handleSliceClick = (event, params) => {
    const { dataIndex } = params;
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
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          highlighted: { additionalRadius: 5, cornerRadius: 6 },
          valueFormatter: (params) => `${params.value}%`,
        },
      ]}
      onItemClick={handleSliceClick}
      height={220}
      width={220}
      slotProps={{
        legend: {
          labelStyle: {
            fill: "#ffffff",
            fontSize: 12.5,
            fontWeight: 500,
          },
        },
      }}
      sx={{
        "& .MuiChartsLegend-root text": {
          fill: "#ffffff !important",
          color: "#ffffff !important",
        },
        "& .MuiChartsLegend-series text": {
          fill: "#ffffff !important",
          color: "#ffffff !important",
        },
        "& .MuiChartsLegend-label": {
          fill: "#ffffff !important",
          color: "#ffffff !important",
        },
        "& .MuiPieArcLabel-root": {
          fill: "#ffffff !important",
          color: "#ffffff !important",
        },
        "& text": {
          fill: "#ffffff !important",
        },
        "& tspan": {
          fill: "#ffffff !important",
        },
      }}
    />
  );
};

export default TechPieChart;
